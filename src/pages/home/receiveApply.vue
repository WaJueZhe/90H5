<template>
  <div class="receiveApply-page">
    <Header :name="name"></Header>
    <div class="receiveApply">
      <div class="account">
        <p class="account-tit">{{ $t("receiveApply.receiveApply1") }}</p>
        <p class="account-num">{{totalCount||'0'}}{{ $t("receiveApply.receiveApply13") }}</p>
      </div>
      <div class="account">
        <p class="account-tit">{{ $t("receiveApply.receiveApply2") }}</p>
        <p class="account-num">{{successCount||'0'}}{{ $t("receiveApply.receiveApply13") }}</p>
      </div>
    </div>
    <div class="tab">
      <ul class="tab-item">
        <li class="tab-list" :class="{ active:activeIndex == 1 }" @click="togole(1)">{{ $t("receiveApply.receiveApply3") }}</li>
        <li class="tab-list" :class="{ active:activeIndex == 2 }" @click="togole(2)">{{ $t("receiveApply.receiveApply4") }}</li>
      </ul>
    </div>
    <div class="agree-list">
      <div v-if="list.length>0" @click="doAllApply('1')" class="all-consent">{{ $t("receiveApply.receiveApply5") }}</div>
      <div v-if="list.length>0" @click="doAllApply('-1')" class="all-reject">{{ $t("receiveApply.receiveApply6") }}</div>
    </div>
    <div class="content">
      <scroller
      ref="myscroller"
      :on-infinite="infinite"
      :on-refresh="refresh">
        <ReceiveApply @confirm="confirm" :list="list"></ReceiveApply>
      </scroller>
    </div>
  </div>
</template>
<script>
import Header from "../../components/header/index";
import ReceiveApply from "../../components/receiveApply";
import { Toast } from "mint-ui";
export default {
  data () {
    return {
      name:this.$t('leftNav.leftNav10'),
      activeIndex:1,
      list:[],
      pageSize:10,
      pageNo:1,
      searchStr:null,
      pages:0,
      total:0,

      successCount:0,
      totalCount:0
    }
  },
  methods: {
     refresh(done){
      let self = this;
      setTimeout(() => {
        self.clearData();
        self.loadList(self.activeIndex)
        done();
      }, 1500);
    },
    infinite (done) {
      let self = this;
      if (self.pageNo >= self.pages) {
        setTimeout(() => {
          done(true);
        }, 1500);
        return;
      }

      setTimeout(() => {
        self.pageNo ++;
        self.init();
        done();
      }, 1500);
    },
    togole(val) {
      if (this.activeIndex != val) {
        this.activeIndex = val;
        this.clearData()
        this.loadList(this.activeIndex)
      }
    },
    //初始化数据
    clearData(){
      this.list=[]
      this.pageSize=10
      this.pageNo=1  
      this.total=0  
    },    
    /**
     * 申请列表 
     * */    
    loadList(val){
      let p={
        pageSize:this.pageSize,
        pageNo:this.pageNo,
        searchStr:this.searchStr,
        type:val
      }
      this.loading = true
      this.axios
      .post(`${this.api.baseURL}/bsCheckApply/findCheckApplyByReciver`,p)
        .then(res => {
          this.loading =false
        if (res.data.success) {
          console.log(res)
          this.list = this.list.concat(res.data.data.list.records)
          this.pages = res.data.data.list.pages
          this.total = res.data.data.list.total
        } else {
          console.log('获取数字资产申请列表失败')
        }
      });
    },
    //数据统计
    applyCount(){
      let p={}
      this.axios
      .post(`${this.api.baseURL}/bsCheckApply/checkReCount`,p)
        .then(res => {
        if (res.data.success) {
          this.successCount = res.data.data.result.successCount
          this.totalCount = res.data.data.result.totalCount
        } else {
          console.log('获取账户列表失败')
        }
      });

    },    
    confirm(){
      this.loadList(this.activeIndex)
      this.applyCount()      
    },
    doApply(id,result){
      let p={
        id:id,
        checkResult:result
      }
      this.axios
      .post(`${this.api.baseURL}/bsCheckApply/checkApply`,p)
        .then(res => {        
        if (res.data.success) {
            Toast('申请处理成功')
            this.loadList(this.activeIndex)
            this.applyCount()

        } else {
            Toast(res.data.message)
        }
      });
    },
    doAllApply(result){
      let p={
        type:this.list[0].type,
        checkResult:result
      }
      this.axios
      .post(`${this.api.baseURL}/bsCheckApply/checkApplyAll`,p)
        .then(res => {
          console.log(res)
        if (res.data.success) {
            Toast('申请处理成功')
            this.loadList(this.activeIndex)
            this.applyCount()            
        } else {
            Toast(res.data.message)
        }
      });      
    }    
  },
  created () {
    this.loadList(this.activeIndex)
    this.applyCount()
  },
  components: {
    Header,
    ReceiveApply,
  }
}
</script>
<style lang="stylus">
@import '../../assets/styles/mixins.styl';

.receiveApply-page {
  margin-top:px2rem(88px);
  width: 100%;
  height: 100%;
  background-color: #f8f8f5;

  .receiveApply {
    padding: px2rem(30px) px2rem(24px);
    background: #fff;
    display:flex;
    justify-content:space-between;

    .account {
      flex:1;
      width:100%;
      height:px2rem(140px);

      &:last-child {
        text-align:center;
      }

      .account-tit {
        font-size:px2rem(40px);
      }

      .account-num {
        padding-top:px2rem(20px);
      }
    }

    .much {
      margin-top: px2rem(54px);
      width:100%;
      box-sizing: border-box;

      &:after {
        display:block;
        clear: both;
        content: ' ';
      }

      > span {
        float: left;
        margin-top: px2rem(25px);
        font-size: px2rem(28px);
      }

      > p {
        font-size: px2rem(70px);
        color: #252533;
        float: left;
        margin-left: px2rem(52px);
        line-height:1;
      }
    }
  }

  .tab {
    padding: px2rem(30px) px2rem(24px) 0;
    margin-top: px2rem(20px);
    width:100%;
    background-color: #fff;

    .tab-item {
      width:100%;

      .tab-list {
        display inline-block;
        margin-left: px2rem(80px);
        font-size: px2rem(30px);

        &:first-child {
          margin-left: 0;
        }
      }

      .active {
        color:#9faf02;
      }
    }
  }

  .agree-list {
    padding: px2rem(20px) px2rem(30px);
    width: 100%;
    font-size:px2rem(28px);
    background-color: #fff;
    color:#fff;

    .all-consent {
      display: inline-block;
      padding:px2rem(6px) px2rem(10px);
      background-color:#10ade4;
      border:px2rem(2px) solid #10ade4;
      border-radius:px2rem(10px);
    }

    .all-reject {
      display: inline-block;
      margin-left:px2rem(30px);
      padding:px2rem(6px) px2rem(10px);
      background-color:#fff;
      border:px2rem(2px) solid #000;
      border-radius:px2rem(10px);
      color:#000;
    }
  }

  .content {
    width:100%;
    height:100%;

    ._v-container>._v-content {
      padding-bottom:px2rem(260px);
    }
  }
}
</style>
