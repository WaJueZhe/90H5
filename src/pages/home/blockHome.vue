<template>
<div class="home-page">
  <!-- <div class="header-page">
    <div class="mui-bar">
      <div class="search">
        <input type="text" placeholder="账户地址/交易哈希" v-model="searchStr">
        <img src="../../assets/img/nav_icon_search.png" alt="">
        <span class="seek" @click="search">搜索</span>
      </div>
    </div>
  </div> -->
  <ComHeader></ComHeader>
  <scroller>
    <div class="wrapper">
      <!--今日交易笔数-->
      <div class="transaction_number">
        <div class="headline">
          <b></b>
          <h3>今日交易笔数</h3>
        </div>
        <div class="number">{{dayTransCount}}</div>	
        <div class="time">更新时间：{{nowTime}}</div>
      </div>

      <!--数字资产交易量-->
      <div class="trading_volume">
        <div class="headline">
          <b></b>
          <h3>数字资产交易量</h3>
        </div>
        <div id="main"></div>
        <div class="source">数据来源：90区块链</div>
      </div>

      <!--最新交易-->
      <div class="the_latest_deals">
        <div class="headline">
          <b></b>
          <h3>最新交易</h3>
        </div>
        <ul class="group">
          <li class="group-item" v-for="(item, index) in list" :key="index">
            <div class="haxi">{{item.transHash}}</div>
            <div class="info">
              <p>交易量  {{item.amount}}</p>
              <div class="time">{{item.created|getDateDiff}}</div>
              <a href="javascript:;"><span></span></a>
              <router-link :to="{ path:'/transDetail', query:{hash:item.transHash}}">详情</router-link>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <Footer></Footer>
  </scroller>
    <!-- 广告提示 -->
    <transition name="flip-list">
      <div class="advertising" v-show="advertising">
        <img src="../../assets/img/home.png" alt="">
      </div>
   </transition>
  
</div>
</template>
<script>
import ComHeader from "../../components/comHeader/index";
import Footer from "../../components/footer/index";
import echarts from "echarts";
import { Toast } from 'mint-ui';
export default {
  data() {
    return {
      advertising:false,
      name: "首页",
      actived: 0,
      charts: "",
      list: [],
      dayTransCount: 0,
      nowTime:'',
      searchStr:'',
      
      uuid:'',
      dayTransCount:[],
      click_date:[],
      JLamount:[],
      LGamount:[],
      GWamount:[],
      categories:[],
      uuid:'',
      option:{
        title: {
          text: ""
        },
        tooltip: {
          trigger: "axis"
        },
        legend: {
          data: ["零购券", "久零券", "购物券"]
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        xAxis: {
          type: "category",
          boundaryGap: true,
          data: this.categories,
        },
        yAxis: {
          type: "value"
        },
        series: [
          {
            name: "零购券",
            type: "line",
            stack: "总量",
            data: [120, 132, 101, 134, 90, 230, 210]
          },
          {
            name: "久零券",
            type: "line",
            stack: "总量",
            data: [220, 182, 191, 234, 290, 330, 310]
          },
          {
            name: "购物券",
            type: "line",
            stack: "总量",
            data: [150, 232, 201, 154, 190, 330, 410]
          }
        ]
      }
    };
  },
  filters: {
    splitHash(val) {
      let temp = String(val);
      temp = temp.substring(0, 40) + "...";
      return temp;
    },
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
    tabSelect(index) {
      this.actived = index;
    },
    drowAllPie() {
      this.$nextTick(function() {
        this.drawPie("main");
      });
    },
    drawPie(id) {
      this.charts = echarts.init(document.getElementById(id));
      this.charts.setOption(this.option);
    },

    getNowFormatDate() {
      var date = new Date();
      var seperator1 = "-";
      var seperator2 = ":";
      var month = date.getMonth() + 1;
      var strDate = date.getDate();
      if (month >= 1 && month <= 9) {
          month = "0" + month;
      }
      if (strDate >= 0 && strDate <= 9) {
          strDate = "0" + strDate;
      }
      var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate
              + " " + date.getHours() + seperator2 + date.getMinutes()
              + seperator2 + date.getSeconds();
      return currentdate;
    },

    //最新交易
    init() {
      let p = {
        pageSize: "10",
        pageNo: "1"
      };
      this.axios
        .post(`${this.api.baseURL}/bcAssetLog/transQueryList`, p)
        .then(res => {
          if (res.data.success) {
            this.list = res.data.data.list.records;
          } else {
          }
        });
    },
    //今日交易笔数
    getTransCount(){
      this.axios
        .post(`${this.api.baseURL}/bcAssetLog/transCountForDay`)
        .then(res => {
          console.log(res)
          if (res.data.success) {
            this.dayTransCount = res.data.data.dayTransCount;
          }
        });
    },

    getTransAmount(){
      this.axios
        .post(`${this.api.baseURL}/bcAssetLog/transAmountForTwoWeek`)
        .then(res => {
          if (res.data.success) {
            let resData = res.data.data.amountList;
            for(let i=0;i<resData.length;i++){
              let dateTime = new Date(resData[i].click_date)
              this.click_date[i] = (dateTime.getMonth() + 1) + '-' + dateTime.getDate();
              
              this.LGamount[i] = parseInt(resData[i].LGamount);
              this.JLamount[i] = parseInt(resData[i].JLamount);
              this.GWamount[i] = parseInt(resData[i].GWamount);
            }
            this.categories = this.click_date;
            console.log(this.categories)
            this.charts.setOption({
              title: {
                text: ""
              },
              tooltip: {
                trigger: "axis"
              },
              legend: {
                data: ["零购券", "久零券", "购物券"]
              },
              grid: {
                left: "3%",
                right: "4%",
                bottom: "3%",
                containLabel: true
              },
              toolbox: {
                feature: {
                  saveAsImage: {}
                }
              },
              xAxis: {
                type: "category",
                boundaryGap: true,
                data: this.categories,
                axisLabel:{
                  rotate:60//让X轴的字体倾斜
                },
              },
              yAxis: {
                type: "value"
              },
              
              series: [
                {//两条数据
                    name: '零购券',
                    data: this.LGamount,
                }, {
                    name: '久零券',
                    data: this.JLamount
                },{
                    name: '购物券',
                    data: this.GWamount
                }
                ]
            });
            // this.option.series = 
            //   [{
            //       name: '零购券',
            //       data: this.LGamount
            //   }, {
            //       name: '久零券',
            //       data: this.JLamount
            //   }]
            this.uuid = this.guid();
          }else{
          }
        });      
    },

    guid() {
      return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
          var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
          return v.toString(16);
      })
    },

    search(){
      
      if(this.searchStr==null||this.searchStr==''){
        Toast('请输入搜索关键字')
        return;
      }
      this.$router.push({path:'/searchResult', query:{searchStr:this.searchStr}})
    },

    board(){
      let that = this;
      that.advertising = true;
      setTimeout(function(){
      that.advertising = false;
    },2000)
    
    }
  },
  components: {
    Footer,
    ComHeader
  },
  created() {
    this.nowTime = this.getNowFormatDate();
    // this.drowAllPie();
    this.init();
    this.getTransCount();
    this.getTransAmount();
    // sessionStorage.removeItem('isShow');
    
  },
  mounted () {
    this.drowAllPie();
    if(sessionStorage.getItem('isShow')){
      
    }else {
      sessionStorage.setItem('isShow',false);
      this.board()
    }

  },

};
</script>
<style lang="stylus">
@import '../../assets/styles/mixins.styl';

.home-page {
  padding-bottom: px2rem(100px);
  height: 100%;
  background: #f8f8f5;

  > ._v-container > ._v-content {
    padding-bottom: px2rem(120px);
  }

  // .header-page {
  //   height: px2rem(88px);

  //   .mui-bar {
  //     position: fixed;
  //     top: 0;
  //     left: 0;
  //     z-index: 9999;
  //     padding: 0 px2rem(26px);
  //     width: 100%;
  //     height: px2rem(88px);
  //     line-height: px2rem(88px);
  //     color: #fff;
  //     background-color: #9faf02;

  //     .search {
  //       position: relative;
  //       width: 100%;
  //       height: 100%;

  //       > input {
  //         position: absolute;
  //         top: 50%;
  //         left: 0;
  //         transform: translateY(-50%);
  //         padding-left: px2rem(80px);
  //         width: 83%;
  //         height: px2rem(60px);
  //         border: none;
  //         border-radius: px2rem(30px);
  //         background-color: #fff;
  //       }

  //       > img {
  //         position: absolute;
  //         top: 50%;
  //         left: px2rem(30px);
  //         transform: translateY(-50%);
  //         width: px2rem(27px);
  //       }

  //       .seek {
  //         position: absolute;
  //         right:0;
  //         width:15%;
  //         font-size:px2rem(34px);
  //         text-align:center;
  //       }
  //     }
  //   }
  // }

  .wrapper {
    padding-top: px2rem(88px);

    .transaction_number {
      padding: px2rem(24px);
      text-align: center;
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

      .number {
        font-size: px2rem(90px);
        color: #9faf02;
        margin: px2rem(30px) 0 px2rem(22px) 0;
      }

      .time {
        text-align: center;
        color: #999999;
        font-size: 0.24rem;
      }
    }

    .trading_volume {
      padding: px2rem(26px);
      margin-top: px2rem(20px);
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

      #main {
        margin-top: px2rem(20px);
        width: px2rem(702px);
        height: px2rem(438px);
      }

      .source {
        margin-top: px2rem(20px);
        color: #999;
        font-size: px2rem(24px);
        text-align: center;
      }
    }

    .the_latest_deals {
      padding: px2rem(26px);
      margin-top: px2rem(20px);
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

  .advertising {
    position: fixed;
    top:0;
    left:0;
    width:100%;
    height:100%;
    z-index:99999;

    > img {
      width:100%;
    }
  }

  .flip-list-enter-active, .flip-list-leave-active {
      transition: all 1s;
  }
  .flip-list-enter, .flip-list-leave-active {
      opacity: 0;
  }
}
</style>
