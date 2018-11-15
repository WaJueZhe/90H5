<template>
  <div class="myApply-page">
    <Header :name="name"></Header>
    <div class="myApply">
      <div class="account">
        <p class="account-tit">{{ $t("myApplyFor.myApplyFor1") }}</p>
        <p class="account-num">{{totalCount}}{{ $t("myApplyFor.myApplyFor10") }}</p>
      </div>
      <div class="account">
        <p class="account-tit">{{ $t("myApplyFor.myApplyFor2") }}</p>
        <p class="account-num">{{successCount}}{{ $t("myApplyFor.myApplyFor10") }}</p>
      </div>
    </div>
    <div class="tab">
      <ul class="tab-item">
        <li class="tab-list" :class="{ active:activeIndex == 1 }" @click="togole(1)">{{ $t("myApplyFor.myApplyFor3") }}</li>
        <li class="tab-list" :class="{ active:activeIndex == 2 }" @click="togole(2)">{{ $t("myApplyFor.myApplyFor4") }}</li>
      </ul>
    </div>
    <div class="content">
      <scroller
      ref="myscroller"
      :on-infinite="infinite"
      :on-refresh="refresh">
        <MyApply :list="list" :activeIndex="activeIndex" @confirm="confirm"></MyApply>

      </scroller>
    </div>
  </div>
</template>
<script>
import Header from "../../components/header/index";
import MyApply from "../../components/myApply";
export default {
  data () {
    return {
      name:this.$t('leftNav.leftNav9'),
      activeIndex:1,
      successCount:0,
      totalCount:0,
      searchStr:'',
      list:[],
      pageSize:10,
      pageNo:1,
      total:0,
      pages:0
      
    }
  },
  methods: {
     refresh(done){
      let self = this;
      setTimeout(() => {
        self.pageNo = 1;
        self.init();
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
    //切换
    togole(val) {
      if (this.activeIndex != val) {
        this.activeIndex = val;
        this.clearData()
        this.loadData()
      }
    },
    //数据统计
    applyCount(){
      let p={}
      this.axios
      .post(`${this.api.baseURL}/bsCheckApply/checkCount`,p)
        .then(res => {
          console.log(res)
        if (res.data.success) {
          this.successCount = res.data.data.result.successCount
          this.totalCount = res.data.data.result.totalCount
        } else {
          console.log('获取账户列表失败')
        }
      });
    },
    //初始化数据
    clearData(){
      this.list=[]
      this.pageSize=10
      this.pageNo=1  
      this.total=0    
    },    
    //加载数据
    loadData(){
      if(this.activeIndex==1){
        this.digitalList()
      }

      if(this.activeIndex==2){
        this.sBookList()
      }

    },
    /**
     * 数字资产申请列表 
     * */    
    digitalList(){
      let p={
        pageSize:this.pageSize,
        pageNo:this.pageNo,
        searchStr:this.searchStr,
        type:'1'
      }
      this.axios
      .post(`${this.api.baseURL}/bsCheckApply/assetCheckApplyQuery`,p)
        .then(res => {
          console.log(res)
        if (res.data.success) {
          this.list = res.data.data.list.records
          this.pages = res.data.data.list.pages
          this.total = res.data.data.list.total
        } else {
          console.log('获取数字资产申请列表失败')
        }
      });
    },
    /**
     * 共享账本申请列表 
     * */
    sBookList(){
      let p={
        pageSize:this.pageSize,
        pageNo:this.pageNo,
        searchStr:this.searchStr,
        type:'2'
      }
      this.axios
      .post(`${this.api.baseURL}/bsCheckApply/sbookCheckApplyQuery`,p)
        .then(res => {
          console.log(res)
        if (res.data.success) {
          this.list = res.data.data.list.records
          this.pages = res.data.data.list.pages
          this.total = res.data.data.list.total
        } else {
          console.log('获取数字资产申请列表失败')
        }
      });
    },
    confirm(){
      this.applyCount()
      this.loadData()      
    }
  },
  created () {
    this.applyCount()
    this.loadData()
  },
  components: {
    Header,
    MyApply,
  }
}
</script>
<style lang="stylus">
@import '../../assets/styles/mixins.styl';

.myApply-page {
  margin-top:px2rem(88px);
  width: 100%;
  height: 100%;
  background-color: #f8f8f5;

  .myApply {
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
        color:#10ade4;
      }
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
