<template>
  <div class="trading_record">
    <div class="header-page">
      <div class="mui-bar">
        <div class="search">
          <input type="text" placeholder="账户地址/交易哈希" v-model="searchStr">
          <img src="../../assets/img/nav_icon_search.png" alt="">
          <span class="seek" @click="search">搜索</span>
        </div>
      </div>
    </div>
    <!--交易记录-->
    <scroller
      ref="myscroller"
      :on-infinite="infinite"
      :on-refresh="refresh">
      <div class="the_latest_deals">
        <ul class="group">
          <li class="group-item" v-for="(item,index) in list" :key="index">
            <div class="haxi">{{item.transHash}}</div>
            <div class="info">
              <p>交易量  {{item.amount}}</p>
              <div class="time">{{item.created|getDateDiff}}</div>
              <router-link :to="{ path:'/transDetail', query:{hash:item.transHash}}">详情</router-link>
            </div>
          </li>
        </ul>
      </div>
    </scroller>
    <Footer></Footer>
  </div>
</template>
<script>
import Footer from '../../components/footer/index'
import { Toast } from 'mint-ui';
export default {
  data() {
    return {
      name: "",
      list:[],
      pageNo:1,
      pageSize:10,
      pages:0,
      searchStr:''
    };
  },
  filters: {
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
    refresh(done){
      let self = this;
      setTimeout(() => {
        self.pageNo = 1;
        self.init();
        done();
      }, 1500);
    },
    infinite (done) {
      if (this.pageNo >= this.pages) {
        setTimeout(() => {
          done(true);
        }, 1500);
        return;
      }

      setTimeout(() => {
        this.pageNo ++;
        this.init();
        done();
      }, 1500);
    },
    init(){
      let p = {
        "pageSize":this.pageSize,
        "pageNo":this.pageNo
      }
      this.axios
        .post(`${this.api.baseURL}/bcAssetLog/transQueryList`, p)
        .then(res => {
          console.log(res)
          if (res.data.success) {
            this.list = this.list.concat(res.data.data.list.records);
            this.pages = res.data.data.list.pages;
          }
          console.log(this.pages)
        });
    },
    search(){
      
      if(this.searchStr==null||this.searchStr==''){
        Toast('请输入搜索关键字')
        return;
      }
      this.$router.push({path:'/searchResult', query:{searchStr:this.searchStr}})
    },
  },
  created () {
    this.init();
  },
  components: {
    Footer
  }
};
</script>
<style lang="stylus">
@import '../../assets/styles/mixins.styl';

.trading_record {
  width: 100%;
  height: 100%;

  ._v-container>._v-content {
    padding-top: px2rem(88px);
    padding-bottom: px2rem(88px);
  }

  .header-page {
    height: px2rem(88px);

    .mui-bar {
      position: fixed;
      top: 0;
      left: 0;
      z-index: 9999;
      padding: 0 px2rem(26px);
      width: 100%;
      height: px2rem(88px);
      line-height: px2rem(88px);
      color: #fff;
      background-color: #9faf02;

      .search {
        position: relative;
        width: 100%;
        height: 100%;

        > input {
          position: absolute;
          top: 50%;
          left: 0;
          transform: translateY(-50%);
          padding-left: px2rem(80px);
          width: 83%;
          height: px2rem(60px);
          border: none;
          border-radius: px2rem(30px);
          background-color: #fff;
        }

        > img {
          position: absolute;
          top: 50%;
          left: px2rem(30px);
          transform: translateY(-50%);
          width: px2rem(27px);
        }

        .seek {
          position: absolute;
          right:0;
          width:15%;
          font-size:px2rem(34px);
          text-align:center;
        }
      }
    }
  }

  .the_latest_deals {
    padding: 0 px2rem(26px);
    background: #fff;
    box-sizing: border-box;

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
      width: 100%;

      .group-item {
        padding: px2rem(20px) 0;
        width: 100%;
        border-bottom: px2rem(2px) solid #dadada;
        box-sizing: border-box;

        .haxi {
          width: 100%;
          font-size: px2rem(28px);
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
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
