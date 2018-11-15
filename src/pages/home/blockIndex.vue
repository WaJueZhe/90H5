<template>
  <div class="blockIndex-page">
    <ComHeader></ComHeader>
    <scroller>
      <div class="wrapper">
        <div class="top-banner">
          <div class="Block-height">
            <div class="Block-number">
              <div class="Block-box">
                <div class="number"></div>
                <div class="Block-txt">{{ $t("bulletin.bulletin1") }}</div>
              </div>
            </div>
            <div class="Block-img"><img src="../../assets/img/columnar.gif" alt=""></div>
          </div>

          <div class="Block-group">
            <div class="Block-account">
              <span class="Block-account-name">{{ $t("bulletin.bulletin2") }}</span>
              <span class="Block-account-number">{{sumUserCount}}</span>
            </div>
            <div class="Block-history">
              <span class="Block-account-name">{{ $t("bulletin.bulletin3") }}</span>
              <span class="Block-account-number">{{histConcurrentCount}}</span>
            </div>
            <div class="Block-property">
              <span class="Block-account-name">{{ $t("bulletin.bulletin4") }}</span>
              <span class="Block-account-number">{{sumAssetCount}}</span>
            </div>
            <div class="Block-share">
              <span class="Block-account-name">{{ $t("bulletin.bulletin5") }}</span>
              <span class="Block-account-number">{{sumSbookCount}}</span>
            </div>
          </div>

          <div class="banner-bottom-box">
            <div class="Block-node">
              <div class="Block-node-img">21</div>
              <p>{{ $t("bulletin.bulletin9") }}</p>
            </div>
            <div class="Block-swiper">
              <div class="marquee">
                  <div class="img"><img src="../../assets/img/node-logo-01.png" alt=""></div>
                  <div class="img"><img src="../../assets/img/node-logo-02.png" alt=""></div>
                  <div class="img"><img src="../../assets/img/node-logo-03.png" alt=""></div>
                  <div class="img"><img src="../../assets/img/node-logo-04.png" alt=""></div>
                  <div class="img"><img src="../../assets/img/node-logo-05.png" alt=""></div>
                  <div class="img"><img src="../../assets/img/node-logo-06.png" alt=""></div>
                  <div class="img"><img src="../../assets/img/node-logo-07.png" alt=""></div>
                  <div class="img"><img src="../../assets/img/node-logo-08.png" alt=""></div>
                  <div class="img"><img src="../../assets/img/node-logo-09.png" alt=""></div>
                  <div class="img"><img src="../../assets/img/node-logo-10.png" alt=""></div>
                  <div class="img"><img src="../../assets/img/node-logo-11.png" alt=""></div>
                  <div class="img"><img src="../../assets/img/node-logo-12.png" alt=""></div>
                  <div class="img"><img src="../../assets/img/node-logo-13.png" alt=""></div>
                  <div class="img"><img src="../../assets/img/node-logo-14.png" alt=""></div>
                  <div class="img"><img src="../../assets/img/node-logo-15.jpg" alt=""></div>
                  <div class="img"><img src="../../assets/img/node-logo-16.png" alt=""></div>
                  <div class="img"><img src="../../assets/img/node-logo-17.png" alt=""></div>
                  <div class="img"><img src="../../assets/img/node-logo-18.png" alt=""></div>
                  <div class="img"><img src="../../assets/img/node-logo-19.png" alt=""></div>
                  <div class="img"><img src="../../assets/img/node-logo-20.png" alt=""></div>
                  <div class="img"><img src="../../assets/img/node-logo-21.png" alt=""></div>

                  <div class="img"><img src="../../assets/img/node-logo-01.png" alt=""></div>
                  <div class="img"><img src="../../assets/img/node-logo-02.png" alt=""></div>
                  <div class="img"><img src="../../assets/img/node-logo-03.png" alt=""></div>
                  <div class="img"><img src="../../assets/img/node-logo-04.png" alt=""></div>
                  <div class="img"><img src="../../assets/img/node-logo-05.png" alt=""></div>
                  <div class="img"><img src="../../assets/img/node-logo-06.png" alt=""></div>
                  <div class="img"><img src="../../assets/img/node-logo-07.png" alt=""></div>
                  <div class="img"><img src="../../assets/img/node-logo-08.png" alt=""></div>
                  <div class="img"><img src="../../assets/img/node-logo-09.png" alt=""></div>
                  <div class="img"><img src="../../assets/img/node-logo-10.png" alt=""></div>
                  <div class="img"><img src="../../assets/img/node-logo-11.png" alt=""></div>
                  <div class="img"><img src="../../assets/img/node-logo-12.png" alt=""></div>
                  <div class="img"><img src="../../assets/img/node-logo-13.png" alt=""></div>
                  <div class="img"><img src="../../assets/img/node-logo-14.png" alt=""></div>
                  <div class="img"><img src="../../assets/img/node-logo-15.jpg" alt=""></div>
                  <div class="img"><img src="../../assets/img/node-logo-16.png" alt=""></div>
                  <div class="img"><img src="../../assets/img/node-logo-17.png" alt=""></div>
                  <div class="img"><img src="../../assets/img/node-logo-18.png" alt=""></div>
                  <div class="img"><img src="../../assets/img/node-logo-19.png" alt=""></div>
                  <div class="img"><img src="../../assets/img/node-logo-20.png" alt=""></div>
                  <div class="img"><img src="../../assets/img/node-logo-21.png" alt=""></div>
              </div>
            </div>
          </div>
        </div>
        <!-- 数字资产最新交易 -->
        <div class="new-deal">
          <div class="deal-title">{{ $t("deal.deal1") }}
            <span>
              <router-link to="/seeMore">{{ $t("deal.deal8") }}</router-link>
            </span>
          </div>
          <div class="deal-group">
            <div class="deal-item" v-for="(item,index) in assetlist" :key="index">
              <router-link :to="{path:'/transDetail', query:{hash:item.transHash}}">
              <div class="deal-haxi">{{item.transHash|splitHash}}</div>
              <div class="deal-type">{{ $t("deal.deal2") }}{{[item.transType,$i18n.locale]|transTypeToName}}</div>
              <div class="deal-money">
                <div class="deal-money-l">
                  <span>{{ $t("deal.deal3") }}</span>
                  <span class="deal-money-num">{{item.amount}}</span>
                </div>
                <div class="deal-money-r">{{[item.created,$i18n.locale]|getDateDiff}}</div>
              </div>
              </router-link>

            </div>
          </div>
        </div>
        <!-- 共享账本最新记录 -->
        <div class="new-record">
          <div class="record-title">{{ $t("record.record1") }}
            <span>
              <router-link to="/sbookSeeMore">{{ $t("record.record7") }}</router-link>
            </span>
          </div>
          <div class="record-group">
            <div class="record-item" v-for="(item,index) in sbookList" :key="index">
              <router-link :to="{path:'/recordDetail', query:{hash:item.tHash}}">
              <div class="record-haxi">{{item.tHash|splitHash}}</div>
              <div class="record-money">
                <div class="record-money-l">
                  <span>{{ $t("record.record2") }}</span>
                  <span>{{[item.bsType,$i18n.locale]|sbookTypeToName}}</span>
                </div>
                <div class="record-money-r">{{[item.created,$i18n.locale]|getDateDiff}}</div>
              </div>
              </router-link>

            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </scroller>
    
  </div>
</template>
<script>
import ComHeader from "../../components/comHeader/index";
import Footer from "../../components/footer/index";
export default {
  data() {
    return {
      bHeight:0,
      bhash:null,
      bTime:null,
      nodeCount:null,
      sumUserCount:null,
      sumAssetCount:null,
      sumSbookCount:null,
      histConcurrentCount:null,
      assetlist:[],
      sbookList:[],

      NumberRunFirst:false,
    };
  },
  watch: {
    bHeight(){
      this.AccountNumber();
    }
  },
  filters: {
    splitHash(val) {
      let temp = String(val);
      temp = temp.substring(0, 35) + "...";
      return temp;
    },
    transTypeToName([val,lang]) {
      switch (val) {
        case "1":
        if(lang=='en'){
            return 'ISSUE'
          }
          return "发行";
          break;
        case "2":
        if(lang=='en'){
            return 'TRANSFER'
          }
          return "转让";
          break;
        case "3":
        if(lang=='en'){
            return 'CASH'
          }
          return "兑付";
          break;
        default:
          return null;
          break;
      }
    },
    sbookTypeToName([val,lang]) {
      switch (val) {
        case "1":
        if(lang=='en'){
            return 'USER INFO'
          }
          return "会员更新";
          break;
        case "2":
        if(lang=='en'){
            return 'BUSINESS'
          }
          return "会员交易";
          break;
        default:
          return null;
          break;
      }
    },
    getDateDiff([dateTimeStamp,locale]) {
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
        result = '刚刚';
        if(locale=='en'){
          result = "moment";
        }
      }
      return result;
    }
  },
  methods:{
        //统计汇总数据
    countInit() {
      this.axios.post(`${this.api.baseURL}/home/sumCount`).then(res => {
        if (res.data.success) {
          console.log(res)
          if(res.data.data.lastBlock.bHeight){
            this.bHeight = res.data.data.lastBlock.bHeight;
            let heightStr = String(this.bHeight)
            if(heightStr.length >= 7) {
              this.numLength = true;
            }
          }
          this.bhash = res.data.data.lastBlock.bHash;
          this.bTime = res.data.data.lastBlock.bTime;
          this.nodeCount = res.data.data.nodeCount;
          this.sumUserCount = res.data.data.sumUserCount;
          this.sumAssetCount = res.data.data.sumAssetCount;
          this.sumSbookCount = res.data.data.sumSbookCount;
          this.histConcurrentCount = res.data.data.histConcurrentCount;

          if(!this.NumberRunFirst){
            this.NumberRunFirst = !this.NumberRunFirst
            this.AccountHeight();
          }

        } else {
          if (this.timerCountId) {
            window.clearInterval(this.timerCountId);
          }
        }
      });
    },
    //最近资产交易
    initAssetList() {
      let p = {
        pageSize: "5",
        pageNo: "1"
      };
      this.axios
        .post(`${this.api.baseURL}/bcAssetLog/assetTask`, p)
        .then(res => {
          if (res.data.success) {
            this.assetlist = res.data.data.list.records;
          } else {
          }
        });
    },
    initSbookList() {
      let p = {
        pageSize: "5",
        pageNo: "1"
      };
      this.axios
        .post(`${this.api.baseURL}/bcSbookLog/sbookTask`, p)
        .then(res => {
          if (res.data.success) {
            this.sbookList = res.data.data.list.records;
          } else {
          }
        });
    },

    $(dom) {
      return document.querySelectorAll(dom);
    },
    AccountHeight() {
     var tpl =
       `<div class="mbox">
            <div class="num-dom" data-num="0">
                <span class="num-span">0</span>
                <span class="num-span">1</span>
                <span class="num-span">2</span>
                <span class="num-span">3</span>
                <span class="num-span">4</span>
                <span class="num-span">5</span>
                <span class="num-span">6</span>
                <span class="num-span">7</span>
                <span class="num-span">8</span>
                <span class="num-span">9</span>
                <span class="num-span">.</span>
            </div>
        </div>`;
 
      var domArr = [];

      var num = String(this.bHeight);
      var len = num.length;
      var i = len;
      while (i > 0) {
        domArr[i] = tpl;
        i--;
      }

      this.$(".number")[0].innerHTML = domArr.join("");
      this.$(".mbox").forEach((val, idx) => {
        this.$(".num-dom")[len-1 - idx].style.transform = "translateY(" + -40 * num[idx] + "px)";
        // console.log(num[idx])translateY(px2rem(" + -70 * num1[idx] + "px))"
      });
      
    },
    AccountNumber(){
      var num = String(this.bHeight);
        let len = num.length
        var num1 = num.split("").reverse().join("");
        this.$(".mbox").forEach((val, idx) => {
          this.$(".num-dom")[len-1 - idx].style.transform = "translateY(" + -40 * num1[idx] + "px)";
        });
    },
  },
  created() {
    this.countInit();
    this.timerCountId = window.setInterval(this.countInit, 5000);

    this.initAssetList();
    this.initSbookList();
    let _this = this;
    this.timerListId = window.setInterval(function() {
      _this.initAssetList();
      _this.initSbookList();
    }, 10000);
  },
  destroyed() {
    if (this.timerListId) {
      window.clearInterval(this.timerListId);
    }

    if (this.timerCountId) {
      window.clearInterval(this.timerCountId);
    }
  },  
  components: {
    ComHeader,
    Footer
  }
};
</script>
<style lang="stylus">
@import '../../assets/styles/mixins.styl';

.blockIndex-page {
  padding-bottom: px2rem(100px);
  height: 100%;
  background: #f8f8f5;

  > ._v-container > ._v-content {
    padding-bottom: px2rem(90px);
  }

  .wrapper {
    width: 100%;
    height: 100%;

    .top-banner {
      position: relative;
      margin-top: px2rem(88px);
      width: 100%;
      height: px2rem(800px);
      background: url('../../assets/img/banner-02.png') no-repeat;
      background-size: 100% 100%;

      .Block-height {
        position: absolute;
        top: px2rem(80px);
        left: 50%;
        transform: translateX(-50%);
        width: 88%;
        height: px2rem(184px);
        display: flex;
        justify-content: space-between;
        background: url('../../assets/img/top-banner-02.png') no-repeat;
        background-size: 100% 100%;

        .Block-number {
          position: relative;
          flex: 1;
          color: #fff;

          .Block-box {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 100%;

            .number {
              width: 100%;
              height:40px;
              font-size: px2rem(50px);
              text-align: center;
              overflow: hidden;

              .mbox {
                font-weight: bold;
                height: px2rem(70px);
                width: px2rem(40px);
                margin: 0 auto;
                overflow: hidden;
                display: inline-block;
                color: #ffaf00;
                

                .num-dom {
                  transition: 2s;

                  .num-span {
                    display: block;
                    height:40px;
                    line-height:40px;
                    width: px2rem(40px);
                  }
                }
              }
            }

            .Block-txt {
              margin-top: px2rem(20px);
              width: 100%;
              font-size: px2rem(24px);
              text-align: center;
            }
          }
        }

        .Block-img {
          position: relative;
          flex: 1;

          > img {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width:px2rem(218px);
          }
        }
      }

      .Block-group {
        position: absolute;
        top: px2rem(340px);
        left: 50%;
        transform: translateX(-50%);
        width: 88%;
        height: px2rem(150px);

        .Block-account {
          position: absolute;
          top: 0;
          left: 0;
          padding: 0 px2rem(16px);
          width: px2rem(320px);
          height: px2rem(70px);
          line-height: px2rem(70px);
          color: #fff;
          display: flex;
          justify-content: space-between;
          background: url('../../assets/img/top-banner-01.png') no-repeat;
          background-size: 100% 100%;

          .Block-account-name {
            flex: 1;
            font-size: px2rem(24px);
          }

          .Block-account-number {
            flex: 1;
            font-size: px2rem(28px);
            text-align: center;
          }
        }

        .Block-history {
          position: absolute;
          top: 0;
          right: 0;
          padding: 0 px2rem(15px);
          width: px2rem(320px);
          height: px2rem(70px);
          line-height: px2rem(70px);
          color: #fff;
          display: flex;
          justify-content: space-between;
          background: url('../../assets/img/top-banner-01.png') no-repeat;
          background-size: 100% 100%;

          .Block-account-name {
            flex: 1;
            font-size: px2rem(24px);
          }

          .Block-account-number {
            flex: 1;
            font-size: px2rem(28px);
            text-align: center;
          }
        }

        .Block-property {
          position: absolute;
          top: px2rem(80px);
          left: 0;
          padding: 0 px2rem(15px);
          width: px2rem(320px);
          height: px2rem(70px);
          line-height: px2rem(70px);
          color: #fff;
          display: flex;
          justify-content: space-between;
          background: url('../../assets/img/top-banner-01.png') no-repeat;
          background-size: 100% 100%;

          .Block-account-name {
            flex: 1;
            font-size: px2rem(24px);
          }

          .Block-account-number {
            flex: 1;
            font-size: px2rem(28px);
            text-align: center;
          }
        }

        .Block-share {
          position: absolute;
          top: px2rem(80px);
          right: 0;
          padding-left:px2rem(15px);
          width: px2rem(320px);
          height: px2rem(70px);
          line-height: px2rem(70px);
          color: #fff;
          display: flex;
          justify-content: space-between;
          background: url('../../assets/img/top-banner-01.png') no-repeat;
          background-size: 100% 100%;

          .Block-account-name {
            flex: 1;
            font-size: px2rem(24px);
          }

          .Block-account-number {
            flex: 1;
            font-size: px2rem(28px);
            text-align: center;
          }
        }
      }

      .banner-bottom-box {
        position: absolute;
        bottom: 50px;
        left: 50%;
        transform: translateX(-50%);
        width: 88%;
        height: px2rem(145px);

        .Block-node {
          position: absolute;
          top: 0;
          left: 0;
          width: px2rem(130px);

          .Block-node-img {
            width: px2rem(130px);
            height: px2rem(101px);
            font-size: px2rem(58px);
            line-height: px2rem(101px);
            text-align: center;
            color: #fff;
            background: url('../../assets/img/top-banner-04.png') no-repeat;
            background-size: 100% 100%;
          }

          p {
            padding-top:px2rem(10px);
            font-size:px2rem(26px);
            color:#6ffaff;
          }
        }

        .Block-swiper {
          position: absolute;
          top: 0;
          left: px2rem(140px);
          width: 79%;
          height: px2rem(145px);
          border:1px solid #57aef0;
          overflow: hidden;

          .marquee {
            position: absolute;
            top: 50%;
            left: 0;
            transform:translateY(-50%);
            // width:px2rem(3772px);
            width:px2rem(7544px);
            height: px2rem(102px);
            animation: marquee 30s linear infinite;
            overflow: hidden;

            .img {
              float: left;
              margin-right: px2rem(10px);
              width: px2rem(164px);
              height: px2rem(102px);
              overflow: hidden;

              > img {
                width:100%;
                height:100%;
              }
            }
          }

          @keyframes marquee {
            0% {
              left:0;
            }

            100% {
              left:px2rem(-3642px);
            }
          }
        }
      }
    }

    .new-deal {
      padding-top:px2rem(80px);
      width:100%;

      .deal-title {
        padding:0 px2rem(40px);
        width:100%;
        font-size:px2rem(44px);

        > span {
          float: right;
          font-size:px2rem(34px);
          line-height:px2rem(58px);

          > a {
            display:block;
          }
        }
      }

      .deal-group {
        padding:0 px2rem(20px);
        margin-top:px2rem(20px);
        width:100%;
        height:100%;

        .deal-item {
          padding:px2rem(20px);
          margin-top:px2rem(20px);
          width:100%;
          border-radius:px2rem(20px);
          font-size:px2rem(28px);
          background-color: #eee;
          box-shadow: px2rem(2px) px2rem(4px) px2rem(6px) px2rem(4px) #ccc;

          >a{
            display:block;

            .deal-haxi {
              font-size:px2rem(30px);
              color:#0984e3;
            }

            .deal-type {
              margin-top:px2rem(20px);
            }

            .deal-money {
              margin-top:px2rem(20px);
              width:100%;
              height:px2rem(46px);
              line-height:px2rem(46px);
              display:flex;
              justify-content:space-between;

              .deal-money-l {
                flex:1;

                > span {
                  vertical-align:middle;
                }

                .deal-money-num {
                  font-size:px2rem(40px);
                }
              }
              .deal-money-r {
                flex:1;
                text-align :center;
              }
            }
          }
        }
      }
    }

    .new-record {
      padding:px2rem(80px) 0;
      width:100%;

      .record-title {
        padding:0 px2rem(40px);
        width:100%;
        font-size:px2rem(44px);

        > span {
          float: right;
          font-size:px2rem(34px);
          line-height:px2rem(58px);

          > a {
            display:block;
          }
        }
      }

      .record-group {
        padding:0 px2rem(20px);
        margin-top:px2rem(20px);
        width:100%;
        height:100%;

        .record-item {
          padding:px2rem(20px);
          margin-top:px2rem(20px);
          width:100%;
          border-radius:px2rem(20px);
          font-size:px2rem(28px);
          background-color: #eee;
          box-shadow: 1px 2px 3px 2px #ccc;

          .record-haxi {
            font-size:px2rem(30px);
            color:#0984e3;
          }

          .record-money {
            margin-top:px2rem(20px);
            width:100%;
            height:px2rem(46px);
            line-height:px2rem(46px);
            display:flex;
            justify-content:space-between;

            .record-money-l {
              flex:1;

              > span {
                vertical-align:middle;
              }
            }
            .record-money-r {
              flex:1;
              text-align :center;
            }
          }
        }
      }
    }
  }
}
</style>
