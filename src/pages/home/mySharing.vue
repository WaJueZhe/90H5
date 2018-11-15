<template>
  <div class="mySharing-page">
    <Header :name="name"></Header>
    <div class="zeroCoupon">
      <div class="account">
        <p>{{ $t("myShare.myShare1") }}</p>
      </div>
      <div class="much">
        <p>{{sumCount}}</p>
      </div>
    </div>
    <div class="content">
      <scroller
      ref="myscroller"
      :on-infinite="infinite"
      :on-refresh="refresh">
        <div class="warpper">
          <ul class="sharing-list">
            <li class="sharing-item" v-for="(item,index) in shareList" :key="index">
              <router-link :to="{path:'/recordDetail', query:{hash:item.tHash}}">
                <div class="sharing-item-haxi">
                  <span class="num-haxi">{{item.tHash|splitHash}}</span>
                  <span class="sharing-item-VIP">{{[item.bsType,$i18n.locale]|sbookTypeToName}}</span>
                </div>
                <div v-if="$i18n.locale=='zh'">
                  <div class="sharing-msg" v-if="item.bsType==1">用户{{item.account|splitHash}}资料更新</div>
                  <div class="sharing-msg" v-if="item.bsType==2">用户{{item.account|splitHash}}与{{item.toAccount|splitHash}}发生交易</div>
                </div>
                <div v-if="$i18n.locale=='en'">
                  <div class="sharing-msg" v-if="item.bsType==1">User {{item.account|splitHash}} upload info</div>
                  <div class="sharing-msg" v-if="item.bsType==2">User {{item.account|splitHash}} and {{item.toAccount|splitHash}} have a deal</div>
                </div>
                <div class="sharing-msg">{{item.created}}</div>
              </router-link>
            </li>
          </ul>
        </div>
      </scroller>
    </div>
  </div>
</template>
<script>
import Header from "../../components/header/index";
import All from "../../components/recordBox";
export default {
  data () {
    return {
      name:this.$t('myShare.myShare1'),
      activeIndex:1,
      searchStr:'',
      account:"",
      pageSize:5,
      pageNo:1,
      total:0,
      pages:0,
      shareList:[],
      sumCount:0
    }
  },
  filters: {
    splitHash(val){
      let temp = String(val);
      temp = temp.substring(0,30)+"...";
      return temp;
    },
    transTypeToName([val,lang]){
      switch (val) {
        case "1":
        if(lang=='en'){
            return 'ISSUE'
          }
          return "发行"
          break;
        case "2":
        if(lang=='en'){
            return 'TRANSFER'
          }
          return "转让"
          break;      
        case "3":
        if(lang=='en'){
            return 'CASH'
          }
          return "兑付"
          break;              
        default:
          return null
          break;
      }
    },
    sbookTypeToName([val,lang]){
      switch (val) {
        case "1":
        if(lang=='en'){
            return 'USER INFO'
          }
          return "会员更新"
          break;
        case "2":
        if(lang=='en'){
            return 'BUSINESS'
          }
          return "会员交易"
          break;                   
        default:
          return null
          break;
      }
    }
  },
  methods: {
    //刷新 
    refresh(done){
      let self = this;
      setTimeout(() => {
        self.clearData()
        self.init()
        done()
      }, 1500)
    },
    //加载更多
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
        this.pageSize=5
        this.pageNo=1
        this.total=0
        this.pages=0
        this.shareList=[]
    },
    init(){
      let p={
        account:sessionStorage.getItem('account'),
        pageSize:this.pageSize,
        pageNo:this.pageNo,
        searchStr:this.searchStr
      }
      this.axios
      .post(`${this.api.baseURL}/bcSbookLog/sBookQueryList`,p)
        .then(res => {
        if (res.data.success) {
          this.shareList = this.shareList.concat(res.data.data.list.records)
          this.pages = res.data.data.list.pages
          this.total = res.data.data.list.total
        } else {
          console.log('获取账户列表失败')
        }
      });
    },
    loadCount(){
      let p={
        account:sessionStorage.getItem('account')
      }
      this.axios
      .post(`${this.api.baseURL}/bcSbookLog/sumCount`,p)
        .then(res => {
        if (res.data.success) {
          this.sumCount = res.data.data.sumSbookCount
        } else {
          console.log('获取账户列表失败')
        }
      });

    }    
  },
  created () {
    this.clearData()
    this.init()
    this.loadCount()    
  },
  components: {
    Header,
    All,
  }
}
</script>
<style lang="stylus">
@import '../../assets/styles/mixins.styl';

.mySharing-page {
  margin-top:px2rem(88px);
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
        width: 100%;
        height: px2rem(40px);
        font-size: px2rem(44px);
      }

      > span {
        float: right;
        width:86%;
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

  .content {
    width:100%;
    height:100%;

    ._v-container>._v-content {
      padding-bottom:px2rem(260px);
    }

    .warpper {
      width:100%;
      height:100%;
      background-color: #fff;

      .sharing-list {
        padding:px2rem(20px);
        width:100%;
        height:100%;

        .sharing-item {
          padding:px2rem(20px);
          margin-bottom:px2rem(20px);
          width:100%;
          background-color:#eee;
          border-radius:px2rem(20px);

          &:last-child {
            margin-bottom:0;
          }

          .sharing-item-haxi {
            width:100%;
            height:px2rem(56px);
            line-height:px2rem(56px);

            .num-haxi {
              display inline-block;
              width:70%;
              font-size:px2rem(30px);
              text-overflow:ellipsis;
              overflow: hidden;
              color:blue;
            }

            .sharing-item-VIP {
              display inline-block;
              width:27%;
              font-size:px2rem(28px);
              text-align:center;
              vertical-align: top;
            }
          }

          .sharing-msg {
            padding-bottom:px2rem(10px);
            width:100%;
            font-size:px2rem(30px);
          }
        }
      }
    }
  }
}
</style>
