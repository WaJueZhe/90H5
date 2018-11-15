<template>
  <div class="all-page">
    
      <div class="the_latest_deals">
        <ul class="group">
          <li class="group-item" v-for="(item, index) in list" :key="index">
            <div class="haxi">{{item.transHash}}</div>
            <div class="info">
              <p>{{ $t("tradingRecord.tradingRecord6") }}  {{item.amount}}</p>
              <div class="time">{{item.created|getDateDiff}}</div>
              <a href="javascript:;"><span></span></a>
              <router-link :to={}>{{ $t("tradingRecord.tradingRecord7") }}</router-link>
            </div>
          </li>
        </ul>
      </div>
  </div>
</template>
<script>
export default {
  props:["list"],
  data () {
    return {
    }
  },
  watch: {
    'list':{
       handler:function(newValue,oldValue){
          // console.log(newValue)
      },
      deep:true,
    }
  },
  filters: {
    getDateDiff(dateTimeStamp) {
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
      } else if (weekC >= 1) {
        result = "" + parseInt(weekC) + "周前";
      } else if (dayC >= 1) {
        result = "" + parseInt(dayC) + "天前";
      } else if (hourC >= 1) {
        result = "" + parseInt(hourC) + "小时前";
      } else if (minC >= 1) {
        result = "" + parseInt(minC) + "分钟前";
      } else result = "刚刚";
      return result;
    }
  },
  methods: {
    
  },
  created () {
    // console.log(this.pageNo)
  }
}
</script>
<style lang="stylus">
@import '../../assets/styles/mixins.styl';

.all-page {
  width:100%;
  height:100%;
  background-color: #f8f8f5;

  ._v-container>._v-content {
    padding-bottom:px2rem(260px);
  }

  .the_latest_deals {
    padding: px2rem(26px);
    background: #fff;

    .headline {
      overflow: hidden;

      > b {
        width: px2rem(10px);
        height: px2rem(36px);
        background-color: #9faf02;
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
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          word-break: break-all;
        }

        .info {
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
</style>
