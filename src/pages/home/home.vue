<template>
  <div class="websiteHome-page">
    <ComHeader></ComHeader>
    <scroller>
      <div class="warrpe">
        <div class="top-banner">
          <div class="top-title">90 Chain</div>
          <div class="top-title">{{ $t("banner.banner1") }}</div>
          <!-- 广告图 -->
          <div class="browse">
            <router-link to="/blockIndex">
              <span class="text">{{ $t("banner.banner11") }}</span>
              <span class="img"><img src="../../assets/img/fx.png" alt=""></span>
            </router-link>
          </div>
          <!-- 年月日 -->
          <div class="schedule">
            <div class="data">
              <div  class="day">
                <span>{{day||'0'}}</span>
                <p>{{ $t("banner.banner7") }}</p>
              </div>
              <div  class="hour">
                <span>{{hour||'00'}}</span>
                <p>{{ $t("banner.banner8") }}</p>
              </div>
              <div  class="yuan"><img src="../../assets/img/yuan.png" alt=""></div>
              <div  class="minute">
                <span>{{minute||'00'}}</span>
                <p>{{ $t("banner.banner9") }}</p>
              </div>
              <div  class="yuan"><img src="../../assets/img/yuan.png" alt=""></div>
              <div  class="miao">
                <span>{{miao||'00'}}</span>
                <p>{{ $t("banner.banner10") }}</p>
              </div>
            </div>
          </div>

          <div class="start-time">{{ $t("banner.banner2") }}</div>

          <!-- 统计数据 -->
          <div class="top-msg">
            <div class="msg-list">
              <div class="msg-item">
                <p class="tit">{{ $t("banner.banner3") }}</p>
                <p class="number">{{bHeight}}</p>
              </div>
              <div class="msg-item">
                <p class="tit">{{ $t("banner.banner4") }}</p>
                <p class="number">{{nodeCount}}</p>
              </div>
              <div class="msg-item">
                <p class="tit">{{ $t("banner.banner5") }}</p>
                <p class="number">{{sumUserCount}}</p>
              </div>
              <div class="msg-item">
                <p class="tit">{{ $t("banner.banner6") }}</p>
                <p class="number">{{sumAssetCount}}</p>
              </div>
            </div>
          </div>
        </div>
        <!-- 90chain-企业级、高性能区块链云平台 -->
        <div class="Chain">
          <div class="Chain-title">{{ $t("Chain.Chain1") }}</div>
          <div class="Chain-group">
            <div class="Chain-item">
              <div class="img"><img src="../../assets/img/Sharing-books.png" alt=""></div>
              <div class="Chain-name">{{ $t("Chain.Chain2") }}</div>
              <div class="Chain-text">{{ $t("Chain.Chain3") }}</div>
            </div>
            <div class="Chain-item">
              <div class="img"><img src="../../assets/img/Digital-Asset.png" alt=""></div>
              <div class="Chain-name">{{ $t("Chain.Chain4") }}</div>
              <div class="Chain-text">{{ $t("Chain.Chain5") }}</div>
            </div>
            <div class="Chain-item">
              <div class="img"><img src="../../assets/img/contract.png" alt=""></div>
              <div class="Chain-name">{{ $t("Chain.Chain6") }}</div>
              <div class="Chain-text">{{ $t("Chain.Chain7") }}</div>
            </div>
            <div class="Chain-item">
              <div class="img"><img src="../../assets/img/Verification-certificate.png" alt=""></div>
              <div class="Chain-name">{{ $t("Chain.Chain8") }}</div>
              <div class="Chain-text">{{ $t("Chain.Chain9") }}</div>
            </div>
            <div class="Chain-item">
              <div class="img"><img src="../../assets/img/Kua-chain.png" alt=""></div>
              <div class="Chain-name">{{ $t("Chain.Chain10") }}</div>
              <div class="Chain-text">{{ $t("Chain.Chain11") }}</div>
            </div>
          </div>
        </div>
        <!-- 丰富、多样化场景应用 -->
        <div class="adhibition">
          <div class="adhibition-title">{{ $t("adhibition.adhibition1") }}</div>
          <div class="adhibition-group">

            <mt-swipe :auto="40000" class="adhibition-list">
              <mt-swipe-item class="adhibition-item">
                <div class="adhibition-img"><img src="../../assets/img/product-01.png" alt=""></div>
                <div class="adhibition-headline">{{ $t("adhibition.adhibition2") }}</div>
                <p class="adhibition-content">{{ $t("adhibition.adhibition3") }}</p>
                <div class="adhibition-detail">
                  <router-link to="/adhibition">{{ $t("adhibition.adhibition10") }}</router-link>
                </div>
              </mt-swipe-item>
              <mt-swipe-item class="adhibition-item">
                <div class="adhibition-img"><img src="../../assets/img/product-02.png" alt=""></div>
                <div class="adhibition-headline">{{ $t("adhibition.adhibition4") }}</div>
                <p class="adhibition-content">{{ $t("adhibition.adhibition5") }}</p>
                <div class="adhibition-detail">
                  <router-link to="/adhibition">{{ $t("adhibition.adhibition10") }}</router-link>
                </div>
              </mt-swipe-item>
              <mt-swipe-item class="adhibition-item">
                <div class="adhibition-img"><img src="../../assets/img/product-03.png" alt=""></div>
                <div class="adhibition-headline">{{ $t("adhibition.adhibition6") }}</div>
                <p class="adhibition-content">{{ $t("adhibition.adhibition7") }}</p>
                <div class="adhibition-detail">
                  <router-link to="/adhibition">{{ $t("adhibition.adhibition10") }}</router-link>
                </div>
              </mt-swipe-item>
              <mt-swipe-item class="adhibition-item">
                <div class="adhibition-img"><img src="../../assets/img/product-04.png" alt=""></div>
                <div class="adhibition-headline">{{ $t("adhibition.adhibition8") }}</div>
                <p class="adhibition-content">{{ $t("adhibition.adhibition9") }}</p>
                <div class="adhibition-detail">
                  <router-link to="/adhibition">{{ $t("adhibition.adhibition10") }}</router-link>
                </div>
              </mt-swipe-item>
            </mt-swipe>
          </div>
        </div>
        <!-- 我们的优势 -->
        <div class="technical-feature">
          <div class="technology-title">{{ $t("advantage.advantage1") }}</div>
          <div class="technology-group">
            <div class="technology-item">
              <div class="technology-item-l">
                <div class="mark">
                  <div class="mark-img">
                    <img src="../../assets/img/technology-05.png" alt="">
                  </div>
                  <p class="mark-name">{{ $t("advantage.advantage2") }}</p>
                </div>
              </div>
              <div class="technology-item-r">{{ $t("advantage.advantage3") }}</div>
            </div>
            <div class="technology-item">
              <div class="technology-item-l">
                <div class="mark">
                  <div class="mark-img">
                    <img src="../../assets/img/technology-06.png" alt="">
                  </div>
                  <p class="mark-name">{{ $t("advantage.advantage4") }}</p>
                </div>
              </div>
              <div class="technology-item-r">{{ $t("advantage.advantage5") }}</div>
            </div>
            <div class="technology-item">
              <div class="technology-item-l">
                <div class="mark">
                  <div class="mark-img">
                    <img src="../../assets/img/technology-07.png" alt="">
                  </div>
                  <p class="mark-name">{{ $t("advantage.advantage6") }}</p>
                </div>
              </div>
              <div class="technology-item-r">{{ $t("advantage.advantage7") }}</div>
            </div>
            <div class="technology-item">
              <div class="technology-item-l">
                <div class="mark">
                  <div class="mark-img">
                    <img src="../../assets/img/technology-08.png" alt="">
                  </div>
                  <p class="mark-name">{{ $t("advantage.advantage8") }}</p>
                </div>
              </div>
              <div class="technology-item-r">{{ $t("advantage.advantage9") }}</div>
            </div>
          </div>
        </div>
        <!-- 90 Chain节点会员 -->
        <div class="VIP">
          <div class="VIP-title">{{ $t("VIP.VIP1") }}</div>
          <div class="VIP-group">
            <div class="VIP-item">
              <img src="../../assets/img/node-01.png" alt="">
            </div>
            <div class="VIP-item">
              <img src="../../assets/img/node-02.png" alt="">
            </div>
            <div class="VIP-item">
              <img src="../../assets/img/node-03.png" alt="">
            </div>
            <div class="VIP-item">
              <img src="../../assets/img/node-04.png" alt="">
            </div>
            <div class="VIP-item">
              <img src="../../assets/img/node-05.png" alt="">
            </div>
            <div class="VIP-item">
              <img src="../../assets/img/node-06.jpg" alt="">
            </div>
            <div class="VIP-item">
              <img src="../../assets/img/node-07.png" alt="">
            </div>
            <div class="VIP-item">
              <img src="../../assets/img/node-08.png" alt="">
            </div>
            <div class="VIP-item">
              <img src="../../assets/img/node-09.png" alt="">
            </div>
            <div class="VIP-item">
              <img src="../../assets/img/node-10.png" alt="">
            </div>
            <div class="VIP-item">
              <img src="../../assets/img/node-11.png" alt="">
            </div>
            <div class="VIP-item">
              <img src="../../assets/img/node-12.png" alt="">
            </div>
            <div class="VIP-item">
              <img src="../../assets/img/node-13.png" alt="">
            </div>
            <div class="VIP-item">
              <img src="../../assets/img/node-14.png" alt="">
            </div>
            <div class="VIP-item">
              <img src="../../assets/img/node-15.png" alt="">
            </div>
            <div class="VIP-item">
              <img src="../../assets/img/node-16.png" alt="">
            </div>
            <div class="VIP-item">
              <img src="../../assets/img/node-17.png" alt="">
            </div>
            <div class="VIP-item">
              <img src="../../assets/img/node-18.png" alt="">
            </div>
            <div class="VIP-item">
              <img src="../../assets/img/node-19.png" alt="">
            </div>
            <div class="VIP-item">
              <img src="../../assets/img/node-20.png" alt="">
            </div>
            <div class="VIP-item">
              <img src="../../assets/img/node-21.png" alt="">
            </div>
          </div>
        </div>
        <!-- 90 Chain区块链超级链接 -->
        <div class="interlinkage">
          <div class="interlinkage-title">{{ $t("interlinkage.interlinkage1") }}</div>
          <div class="interlinkage-group">
            <div class="interlinkage-item">
              <a href="https://www.btcchina.com/"><img src="../../assets/img/bitcoin.png" alt=""></a>
            </div>
            <div class="interlinkage-item">
              <a href="https://www.huobi.pro/"><img src="../../assets/img/Huobi.png" alt=""></a>
            </div>
            <div class="interlinkage-item">
              <a href="https://trustsql.qq.com/"><img src="../../assets/img/Tencent.png" alt=""></a>
            </div>
            <div class="interlinkage-item">
              <a href="https://www.binance.top/"><img src="../../assets/img/Binance.png" alt=""></a>
            </div>
            <div class="interlinkage-item">
              <a href="https://www.ethereum.org/"><img src="../../assets/img/ether.png" alt=""></a>
            </div>
            <div class="interlinkage-item">
              <a href="https://eos.io/"><img src="../../assets/img/EOS.png" alt=""></a>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </scroller>
  </div>
</template>
<script>
import ComHeader from "../../components/comHeader";
import Footer from "../../components/footer";
import moment from "moment";
export default {
  data() {
    return {
      year: null,
      day: null,
      hour: null,
      minute: null,
      miao: null,
      beginTime: "2018-07-25 13:53:39",
      showBeginTime: null,
      timerId: null,
      bHeight: 0,
      nodeCount: 21,
      sumUserCount: 0,
      sumAssetCount: 0,
      timerCountId: null

    };
  },
  methods:{
    days(start, end) {
      let times = end - start;
      return Math.floor(times / (24 * 3600 * 1000));
    },
    hours(start, end) {
      let times = end - start;
      let leave1 = times % (24 * 3600 * 1000); //计算天数后剩余的毫秒数
      return Math.floor(leave1 / (3600 * 1000));
    },
    minutes(start, end) {
      let times = end - start;
      let leave1 = times % (24 * 3600 * 1000); //计算天数后剩余的毫秒数
      let leave2 = leave1 % (3600 * 1000); //计算小时数后剩余的毫秒数
      return Math.floor(leave2 / (60 * 1000));
    },
    seconds(start, end) {
      let times = end - start;
      let leave1 = times % (24 * 3600 * 1000); //计算天数后剩余的毫秒数
      let leave2 = leave1 % (3600 * 1000); //计算小时数后剩余的毫秒数
      let leave3 = leave2 % (60 * 1000); //计算分钟数后剩余的毫秒数
      return Math.round(leave3 / 1000);
    },
    time2time() {
      let nowTime = new Date().getTime();
      let sTime = Date.parse(this.beginTime.replace(/-/gi, "/"));
      this.day = this.days(sTime, nowTime);
      this.hour = this.hours(sTime, nowTime);
      this.minute = this.minutes(sTime, nowTime);
      this.miao = this.seconds(sTime, nowTime);
    },
    countInit() {
      this.axios.post(`${this.api.baseURL}/home/sumCount`).then(res => {
        if (res.data.success) {
          this.bHeight = res.data.data.lastBlock.bHeight;
          this.nodeCount = res.data.data.nodeCount;
          this.sumUserCount = res.data.data.sumUserCount;
          this.sumAssetCount = res.data.data.sumAssetCount;
        } else {
          if (this.timerCountId) {
            window.clearInterval(this.timerCountId);
          }
        }
      });
    }
  },
  created() {
    this.showBeginTime = moment(this.beginTime).format(
      "YYYY年M月D日 H时mm分ss秒"
    );
    this.timerId = window.setInterval(this.time2time, 1000);
    if (this.$route.path === "/") {
      this.headActive = true;
    }
    this.timerCountId = window.setInterval(this.countInit, 10000);
    this.countInit();
  }, 
  mounted() {
    //给window添加一个滚动滚动监听事件
    window.addEventListener("scroll", this.menu);
  },
  destroyed() {
    if (this.timerId) {
      window.clearInterval(this.timerId);
    }

    if (this.timerCountId) {
      window.clearInterval(this.timerCountId);
    }
  },  
  components: {
    ComHeader,
    Footer
  },
   mounted () {
  },
};
</script>
<style lang="stylus">
@import '../../assets/styles/mixins.styl';

.websiteHome-page {
  width: 100%;
  height: 100%;

  > ._v-container > ._v-content {
    padding-bottom: px2rem(90px);
  }

  .warrpe {
    width:100%;
    height:100%;

    .top-banner {
      position: relative;
      margin-top: px2rem(88px);
      width: 100%;
      height: px2rem(680px);
      background: url('../../assets/img/banner.png') no-repeat;
      background-size: 100% 100%;

      .top-title {
        padding-top:px2rem(60px);
        width:100%;
        font-size:px2rem(48px);
        text-align:center;
        color:#fff;

        &:nth-child(2){
          padding-top:0;
        }
      }

      .browse {
        // position: absolute;
        // top: px2rem(238px);
        // left: 50%;
        position: relative;
        margin:auto;
        margin-top:px2rem(20px);
        width: px2rem(420px);
        height: px2rem(72px);
        line-height: px2rem(68px);
        font-size: px2rem(40px);
        border: 1px solid #fff;
        border-radius: px2rem(10px);

        > a {
          display: inline-block;
          width: 100%;
          color: #fff;

          .text {
            padding-left: px2rem(30px);
          }

          .img {
            position: absolute;
            top: 50%;
            right: px2rem(23px);
            transform: translateY(-50%);
            width: px2rem(46px);
            height: px2rem(40px);

            > img {
              position: absolute;
              width: 100%;
            }
          }
        }
      }

      .schedule {
        position: absolute;
        top: px2rem(410px);
        left: 50%;
        transform: translateX(-50%);
        width: px2rem(643px);
        height: px2rem(87px);

        .data {
          width: 100%;
          line-height: px2rem(87px);
          font-size: px2rem(46px);
          color: #fff;
          display: flex;
          justify-content: space-between;

          .day {
            position: relative;
            margin-right: px2rem(20px);
            width: px2rem(106px);
            height: px2rem(87px);
            text-align: center;
            background: url('../../assets/img/time.png') no-repeat;
            background-size: 100% 100%;

            > p {
              position: absolute;
              bottom: px2rem(-14px);
              left: 0;
              width: 100%;
              line-height: px2rem(30px);
              text-align: center;
              font-size: px2rem(24px);;
              color: #bbb;
            }
          }

          .hour {
            position: relative;
            width: px2rem(106px);
            height: px2rem(87px);
            text-align: center;
            background: url('../../assets/img/time.png') no-repeat;
            background-size: 100% 100%;

            > p {
              position: absolute;
              bottom: px2rem(-14px);
              left: 0;
              width: 100%;
              line-height: px2rem(30px);
              text-align: center;
              font-size: px2rem(24px);;
              color: #bbb;
            }
          }

          .minute {
            position: relative;
            width: px2rem(106px);
            height: px2rem(87px);
            text-align: center;
            background: url('../../assets/img/time.png') no-repeat;
            background-size: 100% 100%;

            > p {
              position: absolute;
              bottom: px2rem(-14px);
              left: 0;
              width: 100%;
              line-height: px2rem(30px);
              text-align: center;
              font-size: px2rem(24px);;
              color: #bbb;
            }
          }

          .miao {
            position: relative;
            width: px2rem(106px);
            height: px2rem(87px);
            text-align: center;
            background: url('../../assets/img/time.png') no-repeat;
            background-size: 100% 100%;

            > p {
              position: absolute;
              bottom: px2rem(-14px);
              left: 0;
              width: 100%;
              line-height: px2rem(30px);
              text-align: center;
              font-size: px2rem(24px);;
              color: #bbb;
            }
          }

          .yuan {
            position: relative;
            width: px2rem(9px);

            > img {
              position: absolute;
              top: 30%;
            }
          }
        }
      }

      .start-time {
        position: absolute;
        bottom: px2rem(300px);
        left: 50%;
        transform: translateX(-50%);
        width: px2rem(643px);
        font-size: px2rem(24px);
        text-align: center;
        color: #fff;

        &::before {
          content: ' ';
          position: absolute;
          top: 50%;
          left: 0;
          transform: translateY(-50%);
          width: 24%;
          height: 1px;
          background-color: #fff;
        }

        &::after {
          content: ' ';
          position: absolute;
          top: 50%;
          right: 0;
          transform: translateY(-50%);
          width: 24%;
          height: 1px;
          background-color: #fff;
        }
      }

      .top-msg {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        background-color: rgba(0, 0, 0, 0.3);

        .msg-list {
          padding: px2rem(32px) 0;
          width: 100%;
          display: flex;
          justify-content: space-between;

          .msg-item {
            text-align: center;
            flex: 1;
            color: #fff;
            border-right: 1px solid #bbb9cb;

            &:last-child {
              border-right: none;
            }

            .tit {
              padding-bottom: px2rem(20px);
              font-size: px2rem(28px);
              box-sizing: border-box;
            }

            .number {
              font-size: px2rem(24px);
            }
          }
        }
      }
    }

    .Chain {
      padding: px2rem(80px) 0;
      width: 100%;
      background-color: #fff;

      .Chain-title {
        position: relative;
        padding: 0 px2rem(40px);
        margin: auto;
        width: 100%;
        font-size: px2rem(44px);
        text-align: center;

        &::after {
          content: ' ';
          position: absolute;
          bottom: px2rem(-20px);
          left: 50%;
          transform: translateX(-50%);
          width: px2rem(80px);
          height: px2rem(4px);
          background-color: #0984e3;
        }
      }

      .Chain-group {
        margin-top: px2rem(80px);
        width: 100%;

        .Chain-item {
          margin-top:px2rem(40px);

          .img {
            margin: auto;
            width: px2rem(230px);
            height: px2rem(262px);

            > img {
              width: 100%;
              height: 100%;
            }
          }

          .Chain-name {
            position: relative;
            margin-top: px2rem(40px);
            width: 100%;
            font-size: px2rem(28px);
            text-align: center;
            font-weight: bold;

            &::after {
              content: ' ';
              position: absolute;
              bottom: px2rem(-20px);
              left: 50%;
              transform: translateX(-50%);
              width: px2rem(54px);
              height: 1px;
              background-color: #000;
            }
          }

          .Chain-text {
            padding: 0 px2rem(120px);
            margin-top: px2rem(60px);
            width: 100%;
            font-size: px2rem(26px);
            text-align:center;
          }
        }
      }
    }

    .adhibition {
      padding: px2rem(80px) 0;
      width:100%;
      height:100%;
      background-color: #111217;

      .adhibition-title {
        position: relative;
        padding:0 px2rem(40px);
        width: 100%;
        font-size: px2rem(44px);
        text-align: center;
        color:#fff;

        &::after {
          content: ' ';
          position: absolute;
          bottom: px2rem(-20px);
          left: 50%;
          transform: translateX(-50%);
          width: px2rem(80px);
          height: px2rem(4px);
          background-color: #0984e3;
        }
      }

      .adhibition-group {
        margin-top:px2rem(80px);
        width:100%;
        height:100%;

        .adhibition-list {
          margin:auto;
          width:80%;
          height: px2rem(780px);

          .adhibition-item {
            float: left;
            width:100%;
            height: px2rem(780px);
            background-color:#fff;
            font-size:px2rem(100px);
            border-radius:px2rem(20px);

            .adhibition-img {
              margin:auto;
              margin-top:px2rem(60px);
              width:px2rem(169px);
              height:px2rem(199px);

              > img {
                width:100%;
              }
            }

            .adhibition-headline {
              padding-top:px2rem(30px);
              text-align:center;
              font-size:px2rem(34px);
            }

            .adhibition-content {
              padding:0 px2rem(38px);
              margin-top:px2rem(20px);
              width:100%;
              line-height:1.7;
              font-size:px2rem(26px);
            }

            .adhibition-detail {
              margin:auto;
              margin-top:px2rem(30px);
              width:70%;
              height:px2rem(70px);
              line-height:px2rem(70px);
              text-align:center;
              font-size:px2rem(34px);
              background-color:#0984e3;
              border-radius:px2rem(20px);

              > a {
                display:block;
                width:100%;
                height:100%;
                color:#fff;
                border-radius:px2rem(20px);
              }
            }
          }
          
            .mint-swipe-indicators {
              bottom: -30px;

              .mint-swipe-indicator {
                width:px2rem(32px);
                height:px2rem(32px);
                background:#69696c;
                opacity:1;
              }

              .mint-swipe-indicator.is-active {
                background:#fff;
              }
            }
        }

        .mint-swipe {
          overflow:visible;
        }
      }
    }

    .technical-feature {
      padding: px2rem(80px) 0;
      width:100%;

      .technology-title {
        position: relative;
        width: 100%;
        font-size: px2rem(44px);
        text-align: center;

        &::after {
          content: ' ';
          position: absolute;
          bottom: px2rem(-20px);
          left: 50%;
          transform: translateX(-50%);
          width: px2rem(80px);
          height: px2rem(4px);
          background-color: #0984e3;
        }
      }

      .technology-group {
        padding: 0 px2rem(20px);
        margin-top:px2rem(50px);
        width:100%;
        height:100%;

        .technology-item {
          position: relative;
          margin-bottom:px2rem(20px);
          width:100%;
          height:px2rem(300px);
          background:url('../../assets/img/advantage-01.png') no-repeat;
          background-size:100% 100%;

          &:after {
            display: block;
            clear: both;
            content: ' ';
          }

          .technology-item-l {
            position: absolute;
            top:0;
            left:0;
            width:30%;
            height:100%;

            .mark {
              position: absolute;
              top:50%;
              left:50%;
              transform:translate(-50%,-50%);
              width:100%;

              .mark-img {
                margin:auto;
                max-width:px2rem(89px);

                > img {
                  width:100%;
                  height:100%;
                }
              }

              .mark-name {
                padding-top:px2rem(20px);
                font-size:px2rem(34px);
                text-align:center;
                color:#fff;

                &:after {
                  content:' ';
                  position: absolute;
                  bottom:px2rem(-10px);
                  left:50%;
                  transform:translateX(-50%);
                  width:px2rem(48px);
                  height:px2rem(2px);
                  background-color: #fff;
                }
              }
            }
          }

          .technology-item-r {
            position: absolute;
            top:50%;
            left:30%;
            transform:translateY(-50%);
            padding:0 px2rem(40px);
            width:70%;
            font-size:px2rem(26px);
            color:#fff;
          }
        }
      }
    }

    .VIP {
      padding: px2rem(80px) 0;
      width:100%;

      .VIP-title {
        position: relative;
        width: 100%;
        font-size: px2rem(44px);
        text-align: center;

        &::after {
          content: ' ';
          position: absolute;
          bottom: px2rem(-20px);
          left: 50%;
          transform: translateX(-50%);
          width: px2rem(80px);
          height: px2rem(4px);
          background-color: #0984e3;
        }
      }

      .VIP-group {
        padding:0 px2rem(20px);
        margin-top:px2rem(50px);
        width:100%;
        height:100%;
        overflow: hidden;

        .VIP-item {
          float: left;
          margin-top:px2rem(20px);
          margin-right:px2rem(18px);
          width:px2rem(164px);
          height:px2rem(102px);

          &:nth-child(4n) {
            margin-right:0;
          }
        }
      }
    }

    .interlinkage {
      padding-top:px2rem(56px);
      margin-bottom:px2rem(60px);
      width: 100%;
      height: px2rem(464px);
      background: url("../../assets/img/interlinkage.png") no-repeat;
      background-size: 100% 100%;

      .interlinkage-title {
        position: relative;
        width: 100%;
        font-size: px2rem(44px)
        text-align: center;
        color:#fff;

        &::after {
          content: " ";
          position: absolute;
          bottom: -10px;
          left: 50%;
          transform: translateX(-50%);
          width: 80px;
          height: 2px;
          background-color: #0984e3;
        }
      }

      .interlinkage-group {
        padding:0 px2rem(20px);
        // margin-top: px2rem(50px);
        width: 100%;
        overflow: hidden;

        .interlinkage-item {
          float: left;
          margin-top:px2rem(50px);
          width:33.3333%;
          height:px2rem(100px);

          &:nth-child(3n){
            margin-right:0;
          }
          > a {
            position: absolute;
            top:50%;
            left:50%;
            transform:translate(-50%,-50%);
            width:px2rem(162px);            
          }
          > img {
            position: absolute;
            top:50%;
            left:50%;
            transform:translate(-50%,-50%);
            width:px2rem(162px);
          }
        }
      }
    }
  }
}
</style>
