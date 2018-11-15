<template>
  <div class="shopping_account">
    <Header :name="name"></Header>
    <div class="zeroCoupon">
      <div class="account">
        <p>{{ $t("tradingRecord.tradingRecord1") }}</p>
        <!--<span>无</span>-->
        <span>{{account}}</span>
      </div>
      <div class="much">
        <span>{{ $t("tradingRecord.tradingRecord2") }}</span>
        <p>{{totalAmount}}</p>
      </div>
    </div>
    <div class="tab">
      <ul class="tab-item">
        <li class="tab-list" :class="{ active:activeIndex == 1 }" @click="toogle(1)">{{ $t("tradingRecord.tradingRecord3") }}</li>
        <li class="tab-list" :class="{ active:activeIndex == 2 }" @click="toogle(2)">{{ $t("tradingRecord.tradingRecord4") }}</li>
        <li class="tab-list" :class="{ active:activeIndex == 3 }" @click="toogle(3)">{{ $t("tradingRecord.tradingRecord5") }}</li>
      </ul>
    </div>
    <div class="content">
      <scroller
      ref="myscroller"
      :on-infinite="infinite"
      :on-refresh="refresh">
        <All :list="list"></All>
      </scroller>
    </div>
  </div>
</template>
<script>
import Header from "../../../components/header/index";
import All from "../../../components/recordBox";
export default {
  data () {
    return {
      name:this.$t('leftNav.leftNav5'),
      activeIndex:1,
      searchType:'',
      searchStr:'',
      loading:false,
      account:"",
      pageSize:10,
      pageNo:1,
      total:0,
      pages:0,
      list:[],
      asset_list:[],
      totalAmount:0.00
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
    clearData(){
        this.pageSize=10
        this.pageNo=1
        this.total=0
        this.pages=0
        this.list=[]
        this.asset_list=[]
    },
    toogle(val){
      if(this.activeIndex != val){
        this.activeIndex = val
        this.clearData()
        this.searchStr = ''
        switch (this.activeIndex) {
          case 1:
            this.searchType=''
            break;
          case 2:
            this.searchType='SEND'
            break; 
          case 3:
            this.searchType='GET'
            break;            
          default:
            break;
        }
        this.init();
      }  
    },
    init(){
      let p = {
        "searchStr":this.searchStr,
        "searchType":this.searchType,
        "accountType":"1",
        "pageSize":this.pageSize,
        "pageNo":this.pageNo
      }
      this.axios
        .post(`${this.api.baseURL}/me/accountDetail`, p)
        .then(res => {
          console.log(res)
          if (res.data.success) {
            this.account = res.data.data.accountStr;
            this.total = res.data.data.list.total;
            this.pages = res.data.data.list.pages;
            this.list = this.list.concat(res.data.data.list.records);
            this.asset_list = res.data.data.asset_list;
            this.totalAmount = res.data.data.total_amount
          }
        });
    },
    onRefresList(){
      this.pageNo = 1;
      this.init();
    },
    onInfiniteList(){
      this.pageNo = this.pageNo++;
      this.init();
    }
  },
  created () {
    this.init();
  },
  components: {
    Header,
    All,
  }
}
</script>
<style lang="stylus">
@import '../../../assets/styles/mixins.styl';

.shopping_account {
  margin-top:px2rem(90px);
  width: 100%;
  height: 100%;
  background-color: #f8f8f5;

  .zeroCoupon {
    padding: px2rem(30px) px2rem(24px);
    background: #fff;
    box-sizing: border-box;

    .account {
      width:100%;
      height:px2rem(40px);
      box-sizing: border-box;

      &:after {
        display:block;
        clear: both;
        content: ' ';
      }

      > p {
        float: left;
        min-width: 10%;
        height: px2rem(40px);
        line-height: px2rem(40px);
        background-color: #252533;
        border-radius: px2rem(8px);
        font-size: px2rem(26px);
        color: #fff;
        text-align: center;
      }

      > span {
        float: left;
        padding-left:px2rem(20px);
        width:80%;
        font-size: px2rem(34px);
        font-weight:bold;
        word-break:break-all;
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

  .content {
    width:100%;
    height:100%;

    ._v-container>._v-content {
      padding-bottom:px2rem(260px);
    }
  }
}
</style>
