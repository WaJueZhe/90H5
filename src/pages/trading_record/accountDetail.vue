<template>
  <div class="accountDetail">
    <Header :name="name"></Header>

    <scroller
      ref="myscroller"
      :on-infinite="infinite">
      <div class="main">
        <div class="basicInformation">
          <div class="title"><span>{{ $t('accountDetail.accountDetail1') }}</span>{{account}}</div>
          <div class="basicInformation-list">
            <div class="basicInformation-item-time">
              <div class="basicInformation-name">{{ $t('accountDetail.accountDetail2') }}</div>
              <div class="basicInformation-text">{{accountInfo.publicKey}}</div>
            </div>
            <div class="basicInformation-item-time">
              <span class="basicInformation-name">{{ $t('accountDetail.accountDetail3') }}</span>
              <span class="basicInformation-text">{{accountInfo.userPublicKey}}</span>
            </div>
            <div class="basicInformation-item">
              <div class="basicInformation-name">{{ $t('accountDetail.accountDetail4') }}</div>
              <div class="basicInformation-text">{{accountInfo.userAddress}}</div>
            </div>
            <div class="basicInformation-item-time">
              <div class="basicInformation-name">{{ $t('accountDetail.accountDetail5') }}</div>
              <div class="basicInformation-text">{{[accountInfo.accountType,$i18n.locale]|accountName}}</div>
            </div>
            <div class="basicInformation-item-time">
              <div class="basicInformation-name">{{ $t('accountDetail.accountDetail6') }}</div>
              <div class="basicInformation-text">{{accountInfo.created}}</div>
            </div>         
          </div>
        </div>

        <div class="basicInformation">
          <div class="basicInformation-list">
            <div class="basicInformation-item-time" v-for="(item,index) in asset_list" :key="index">
              <div class="basicInformation-name">{{ $t('accountDetail.accountDetail7') }}({{index+1}})</div>
              <div class="basicInformation-text">{{item.asset_id}}</div>
            </div>
            <div class="basicInformation-item-time">
              <span class="basicInformation-name">{{ $t('accountDetail.accountDetail8') }}</span>
              <span class="basicInformation-text">{{total}}</span>
            </div>
            <div class="basicInformation-item">
              <div class="basicInformation-name">{{ $t('accountDetail.accountDetail9') }}</div>
              <div class="basicInformation-text">{{totalAmount}} {{[accountInfo.accountType,$i18n.locale]|accountName}}</div>
            </div>      
          </div>
        </div>

        <div class="the_latest_deals">
          <div class="headline">
            <b></b>
            <h3>{{ $t('accountDetail.accountDetail10') }}</h3>
          </div>
          <ul class="group">
            <li class="group-item" v-for="(item,index) in list" :key="index">
              <div class="haxi">{{item.transHash}}</div>
              <div class="info">
                <p>{{ $t('accountDetail.accountDetail11') }}  {{item.amount}}</p>
                <div class="time">{{item.created}}</div>
                <a href="javascript:;"><span></span></a>
                <router-link :to="{path:'/transDetail', query:{hash:item.transHash}}">{{ $t('accountDetail.accountDetail12') }}</router-link>
              </div>
            </li>
          </ul>
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
      name: this.$t('accountDetail.accountDetail13'),
      account: "",
      pageSize: 5,
      pageNo: 1,
      total: 0,
      pages: 0,
      accountInfo: {},
      list: [],
      asset_list: [],
      totalAmount: 0.0
    };
  },
  filters: {
    accountName([val,lang]) {
      switch (val) {
        case "1":
        if(lang=='en'){
            return 'LG'
          }
          return "零购券";
          break;
        case "2":
        if(lang=='en'){
            return 'JL'
          }
          return "久零券";
          break;
        case "3":
        if(lang=='en'){
            return 'GW'
          }
          return "购物券";
          break;          
        default:
        if(lang=='en'){
            return 'Unkonw'
          }
          return "未知";
          break;
      }
    },
    getDateDiff([dateTimeStamp,locale]) {
      dateTimeStamp = String(dateTimeStamp);
      dateTimeStamp = Date.parse(dateTimeStamp.replace(/-/gi, "/"));
      var minute = 1000 * 60;
      var hour = minute * 60;
      var day = hour * 24;
      var halfamonth = day * 15;
      var month = day * 30;
      var now = new Date().getTime();
      var diffValue = now - dateTimeStamp;
      if (diffValue < 0) {
        return;
      }
      var monthC = diffValue / month;
      var weekC = diffValue / (7 * day);
      var dayC = diffValue / day;
      var hourC = diffValue / hour;
      var minC = diffValue / minute;
      let result = "";
      if (monthC >= 1) {
        result = "" + parseInt(monthC) + "月前";
        if(locale=='en'){
          result = "" + parseInt(monthC) + "month ago";
        }
      } else if (weekC >= 1) {
        result = "" + parseInt(weekC) + "周前";
        if(locale=='en'){
          result = "" + parseInt(weekC) + "weeks ago";
        }
      } else if (dayC >= 1) {
        result = "" + parseInt(dayC) + "天前";
        if(locale=='en'){
          result = "" + parseInt(dayC) + "days ago";
        }
      } else if (hourC >= 1) {
        result = "" + parseInt(hourC) + "小时前";
        if(locale=='en'){
          result = "" + parseInt(hourC) + "hours ago";
        }
      } else if (minC >= 1) {
        result = "" + parseInt(minC) + "分钟前";
        if(locale=='en'){
          result = "" + parseInt(minC) + "mins ago";
        }
      } else {
        result = "刚刚";
        if(locale=='en'){
          result = "moment";
        }  
      }
      return result;
    }
  },
  methods: {
    infinite(done) {
      if (this.pageNo >= this.pages) {
        setTimeout(() => {
          if(this.$i18n.locale=='en'){
            done('No more data');
          }else {
            done(true);
          }
        }, 1500);
        return;
      }

      setTimeout(() => {
        this.pageNo++;
        this.init();
        done();
      }, 1500);
    },
    init() {
      let p = {
        account: this.account,
        pageSize: this.pageSize,
        pageNo: this.pageNo
      };
      this.axios
        .post(`${this.api.baseURL}/bcAssetLog/accountDetail`, p)
        .then(res => {
          console.log(res);
          if (res.data.success) {
            this.total = res.data.data.list.total;
            this.pages = res.data.data.list.pages;
            this.accountInfo = res.data.data.accountInfo;
            this.list = this.list.concat(res.data.data.list.records);
            this.asset_list = res.data.data.asset_list;
            this.totalAmount = res.data.data.total_amount;
          }
        });
    }
  },
  created() {
    this.account = this.$route.query.act;
    this.init();
  },
  watch: {
    $route(to, from) {
      // 刷新参数放到这里里面去触发就可以刷新相同界面了
      this.account = to.query.act;
      this.init();
    }
  },
  components: {
    Header
  }
};
</script>
<style lang="stylus">
@import '../../assets/styles/mixins.styl';

.accountDetail {
  width: 100%;
  height: 100%;
  background: #f8f8f5;

  .main {
    padding-top: px2rem(88px);

    .basicInformation {
      padding: px2rem(20px);
      width: 100%;
      background-color: #fff;

      &:nth-child(2){
        margin-top:px2rem(20px);
      }

      .title {
        padding-bottom: px2rem(40px);
        font-size: px2rem(36px);
        font-weight: bold;
        color: #000;
        word-break: break-all;
      }

      .top-view {
        background: white;
        padding: px2rem(30px) 0;
        font-size: px2rem(44px);
      }

      .basicInformation-list {
        width: 100%;

        .basicInformation-item {
          margin-bottom: px2rem(20px);
          width: 100%;
          overflow: hidden;

          &:after {
            display: block;
            clear: both;
            content: ' ';
          }

          .basicInformation-name {
            float: left;
            width: 22%;
            font-size: px2rem(28px);
            font-weight: bold;
          }

          .basicInformation-text {
            float: left;
            width: 75%;
            font-size: px2rem(24px);
            word-break: break-all;
          }
        }

        .basicInformation-item-time {
          margin-bottom: px2rem(20px);
          width: 100%;
          height: px2rem(40px);
          line-height: px2rem(40px);
          overflow: hidden;

          &:after {
            display: block;
            clear: both;
            content: ' ';
          }

          .basicInformation-name {
            float: left;
            width: 22%;
            font-size: px2rem(28px);
            font-weight: bold;
          }

          .basicInformation-text {
            float: left;
            width: 75%;
            font-size: px2rem(24px);
            word-break: break-all;

            > a {
              display: block;
              color: blue;
            }
          }
        }
      }

      .block-list {
        padding: px2rem(20px);
        width: 100%;
        background-color: #eee;
        border-radius: px2rem(10px);

        .block-item {
          margin-bottom: px2rem(20px);
          width: 100%;
          overflow: hidden;

          &:after {
            display: block;
            clear: both;
            content: ' ';
          }

          .block-name {
            float: left;
            width: 22%;
            font-size: px2rem(28px);
            font-weight: bold;
          }

          .block-text {
            float: left;
            width: 75%;
            font-size: px2rem(24px);
            word-break: break-all;
          }
        }

        .block-item-time {
          margin-bottom: px2rem(20px);
          width: 100%;
          height: px2rem(40px);
          line-height: px2rem(40px);
          overflow: hidden;

          &:after {
            display: block;
            clear: both;
            content: ' ';
          }

          .block-name {
            float: left;
            width: 22%;
            font-size: px2rem(28px);
            font-weight: bold;
          }

          .block-text {
            float: left;
            width: 75%;
            font-size: px2rem(24px);
            word-break: break-all;

            > a {
              display: block;
              color: blue;
            }
          }
        }
      }

      .lately {
        padding: px2rem(20px) 0;
        width: 100%;

        .lately-login {
          font-size: px2rem(28px);
          font-weight: bold;
        }

        .lately-number {
          font-size: px2rem(24px);
        }
      }
    }

    .the_latest_deals {
      padding: px2rem(26px);
      margin-top: px2rem(20px);
      background: #fff;

      .headline {
        width: 100%;
        height: 100%;
        overflow: hidden;

        &:after {
          display: block;
          clear: both;
          content: ' ';
        }

        > b {
          width: px2rem(10px);
          height: px2rem(36px);
          background-color: #252533;
          float: left;
        }

        > h3 {
          font-size: px2rem(28px);
          float: left;
          margin-left: px2rem(14px);
          line-height: px2rem(36px);
          font-weight: normal;
        }
      }

      .group {
        margin-bottom: px2rem(-30px);

        .group-item {
          padding: px2rem(30px) 0;
          width: 100%;
          border-bottom: px2rem(2px) solid #dadada;

          .haxi {
            width: 100%;
            font-size: px2rem(28px);
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
          }

          .info {
            width:100%;
            height:px2rem(36px);
            line-height:px2rem(36px);
            overflow: hidden;
            margin-top: px2rem(18px);

            > p {
              float: left;
              font-size: px2rem(26px);
            }

            .time {
              float: left;
              margin-left: px2rem(64px);
              font-size: px2rem(24px);
              color: #999;
            }

            > a {
              float: right;
              font-size: px2rem(26px);
              color: #6199ff;
            }
          }
        }
      }
    }
  }
}
</style>
