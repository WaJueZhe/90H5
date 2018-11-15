<template>
  <div class="sbookSeeMore-page">
    <Header :name='name'></Header>
    <scroller
      ref="myscroller"
      :on-infinite="infinite"
      :on-refresh="refresh">
      <div class="deal-group">
        <div class="deal-item" v-for="(item,index) in list" :key="index">
          <router-link :to="{path:'/recordDetail', query:{hash:item.tHash}}">
          <div class="deal-haxi">{{item.tHash}}</div>
          <div class="deal-money">
            <div class="deal-money-l">
              <span>{{ $t('sbookSeeMore.sbookSeeMore2') }}</span>
              <span class="deal-money-num">{{[item.bsType,$i18n.locale]|sbookTypeToName}}</span>
            </div>
            <div class="deal-money-r">{{item.created}}</div>
          </div>
          </router-link>
        </div>
      </div>
    </scroller>
  </div>
</template>
<script>
import Header from "../../components/header/index";
export default {
  data() {
    return {
      name:this.$t('sbookSeeMore.sbookSeeMore1'),
      list: [],
      pageNo: 1,
      pageSize: 10,
      pages: 0,
    };
  },
  filters: {
    splitHash(val){
      let temp = String(val);
      temp = temp.substring(0,20)+"...";
      return temp;
    },
    transTypeToName(val){
      switch (val) {
        case "1":
          return "发行"
          break;
        case "2":
          return "转让"
          break;      
        case "3":
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
    },
    getDateDiff(dateTimeStamp){
      dateTimeStamp = String(dateTimeStamp);
      dateTimeStamp = Date.parse(dateTimeStamp.replace(/-/gi,"/"));
      var minute = 1000 * 60;
      var hour = minute * 60;
      var day = hour * 24;
      var halfamonth = day * 15;
      var month = day * 30;
      var now = new Date().getTime();
      var diffValue = now - dateTimeStamp;
      if(diffValue < 0){return;}
      var monthC =diffValue/month;
      var weekC =diffValue/(7*day);
      var dayC =diffValue/day;
      var hourC =diffValue/hour;
      var minC =diffValue/minute;
      let result = "";
      if(monthC>=1){
        result="" + parseInt(monthC) + "月前";
      }
      else if(weekC>=1){
        result="" + parseInt(weekC) + "周前";
      }
      else if(dayC>=1){
        result=""+ parseInt(dayC) +"天前";
      }
      else if(hourC>=1){
        result=""+ parseInt(hourC) +"小时前";
      }
      else if(minC>=1){
        result=""+ parseInt(minC) +"分钟前";
      }else
      result="刚刚";
      return result;
    }
  },
  methods: {
    //刷新 
    refresh(done){
      let self = this;
      setTimeout(() => {
        self.pageNo = 1,
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
     init(){
      let p = {
        "pageSize":this.pageSize,
        "pageNo":this.pageNo
      }
      this.axios
        .post(`${this.api.baseURL}/bcSbookLog/sBookQueryList`, p)
        .then(res => {
          console.log(res)
          if (res.data.success) {
            this.list = this.list.concat(res.data.data.list.records);
            this.pages = res.data.data.list.pages;
            this.total = res.data.data.list.total;
          }
        });
    },
  },
  created () {
    this.init();
  },
  components: {
    Header,
  }
};
</script>
<style lang="stylus">
@import '../../assets/styles/mixins.styl';

.sbookSeeMore-page {
  margin-top:px2rem(90px);
  width: 100%;
  height: 100%;

  > ._v-container > ._v-content {
    padding-bottom: px2rem(90px);
  }

  .deal-group {
    padding: 0 px2rem(20px);
    margin-top: px2rem(20px);
    width: 100%;
    height: 100%;

    .deal-item {
      padding: px2rem(20px);
      margin-top: px2rem(20px);
      width: 100%;
      border-radius: px2rem(20px);
      font-size: px2rem(28px);
      background-color: #eee;
      box-shadow: px2rem(2px) px2rem(4px) px2rem(6px) px2rem(4px) #ccc;

      >a {
        display: block;

        .deal-haxi {
          width:100%;
          font-size: px2rem(30px);
          white-space:nowrap;
          text-overflow:ellipsis;
          color: #0984e3;
          overflow: hidden;
        }

        .deal-type {
          margin-top: px2rem(20px);
        }

        .deal-money {
          margin-top: px2rem(20px);
          width: 100%;
          height: px2rem(46px);
          line-height: px2rem(46px);
          display: flex;
          justify-content: space-between;

          .deal-money-l {
            flex: 1;

            > span {
              vertical-align: middle;
            }

            .deal-money-num {
              font-size: px2rem(28px);
            }
          }

          .deal-money-r {
            flex: 1;
            text-align: center;
          }
        }
      }
    }
  }
}
</style>
