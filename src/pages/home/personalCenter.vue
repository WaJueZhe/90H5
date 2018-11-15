<template>
  <div class="personalCenter-page">
    <ComHeader></ComHeader>
    <scroller>
      <div class="wrapper">
        <div class="asset">
          <div class="asset-title">{{ $t("personal.personal1") }}</div>
          <div class="asset-group">
            <mt-swipe :auto="40000" class="asset-list">
              <mt-swipe-item class="asset-item">
                <div class="asset-item-t">{{ $t("personal.personal2") }}</div>
                <div class="asset-item-info">
                  <div class="item-info-l">
                    <p class="number">￥{{LGQSUMCOUNT.getTotal+LGQSUMCOUNT.sendTotal}}</p>
                    <p class="sum">{{ $t("personal.personal5") }}</p>
                  </div>
                  <div class="item-info-l">
                    <p class="number">{{LGQSUMCOUNT.getCount+LGQSUMCOUNT.sendCount}}</p>
                    <p class="sum">{{ $t("personal.personal6") }}</p>
                  </div>
                  <div class="item-info-l">
                    <p class="number">￥{{LGQamount}}</p>
                    <p class="sum">{{ $t("personal.personal7") }}</p>
                  </div>
                </div>
                <div class="asset-item-b" v-if="this.$i18n.locale === 'zh'">{{ $t("personal.personal8") }}{{LGQLT.created||'暂无交易'}} {{LGQLT.dataTime}}</div>
                <div class="asset-item-b" v-if="this.$i18n.locale === 'en'">{{ $t("personal.personal8") }}{{LGQLT.created||'No deal'}} {{LGQLT.dataTime}}</div>
              </mt-swipe-item>
              <mt-swipe-item class="asset-item">
                <div class="asset-item-t">{{ $t("personal.personal3") }}</div>
                <div class="asset-item-info">
                  <div class="item-info-l">
                    <p class="number">￥{{JLQSUMCOUNT.getTotal+JLQSUMCOUNT.sendTotal}}</p>
                    <p class="sum">{{ $t("personal.personal5") }}</p>
                  </div>
                  <div class="item-info-l">
                    <p class="number">{{JLQSUMCOUNT.getCount+JLQSUMCOUNT.sendCount}}</p>
                    <p class="sum">{{ $t("personal.personal6") }}</p>
                  </div>
                  <div class="item-info-l">
                    <p class="number">￥{{JLQamount}}</p>
                    <p class="sum">{{ $t("personal.personal7") }}</p>
                  </div>
                </div>
                <div class="asset-item-b" v-if="this.$i18n.locale === 'zh'">{{ $t("personal.personal8") }}{{JLQLT.created||'暂无交易'}} {{JLQLT.dataTime}}</div>
                <div class="asset-item-b" v-if="this.$i18n.locale === 'en'">{{ $t("personal.personal8") }}{{JLQLT.created||'No deal'}} {{JLQLT.dataTime}}</div>
              </mt-swipe-item>
              <mt-swipe-item class="asset-item">
                <div class="asset-item-t">{{ $t("personal.personal4") }}</div>
                <div class="asset-item-info">
                  <div class="item-info-l">
                    <p class="number">￥{{GWQSUMCOUNT.getTotal+GWQSUMCOUNT.sendTotal}}</p>
                    <p class="sum">{{ $t("personal.personal5") }}</p>
                  </div>
                  <div class="item-info-l">
                    <p class="number">{{GWQSUMCOUNT.getCount+GWQSUMCOUNT.sendCount}}</p>
                    <p class="sum">{{ $t("personal.personal6") }}</p>
                  </div>
                  <div class="item-info-l">
                    <p class="number">￥{{GWQamount}}</p>
                    <p class="sum">{{ $t("personal.personal7") }}</p>
                  </div>
                </div>
                <div class="asset-item-b" v-if="this.$i18n.locale === 'zh'">{{ $t("personal.personal8") }}{{GWQLT.created||'暂无交易'}} {{GWQLT.dataTime}}</div>
                <div class="asset-item-b" v-if="this.$i18n.locale === 'en'">{{ $t("personal.personal8") }}{{GWQLT.created||'No deal'}} {{GWQLT.dataTime}}</div>
              </mt-swipe-item>
            </mt-swipe>
          </div>
        </div>
        <div class="sharing">
          <div class="sharing-title">{{ $t("personal.personal9") }}</div>
          <div id="main"></div>
        </div>
        <div class="number-asset">
          <div class="number-title">{{ $t("personal.personal10") }}</div>
          <ul class="number-list">
            <li class="number-item">
              <router-link :to="{name: 'ZeroCoupon_account'}">
                <div class="img"><img src="../../assets/img/small-01.png" alt=""></div>
                <span class="number-item-name">{{ $t("personal.personal11") }}</span>
                <span class="jiantou"><img src="../../assets/img/mine_icon_right.png" alt=""></span>
              </router-link>
            </li>
            <li class="number-item">
              <router-link :to="{ name: 'LongCoupon_account' }">
                <div class="img"><img src="../../assets/img/small-02.png" alt=""></div>
                <span class="number-item-name">{{ $t("personal.personal12") }}</span>
                <span class="jiantou"><img src="../../assets/img/mine_icon_right.png" alt=""></span>
              </router-link>
            </li>
            <li class="number-item">
              <router-link :to="{  name: 'Shopping_account' }">
                <div class="img"><img src="../../assets/img/small-03.png" alt=""></div>
                <span class="number-item-name">{{ $t("personal.personal13") }}</span>
                <span class="jiantou"><img src="../../assets/img/mine_icon_right.png" alt=""></span>
              </router-link>
            </li>
          </ul>
          <div class="number-share">{{ $t("personal.personal14") }}</div>
          <ul class="number-list">
            <li class="number-item">
              <router-link to="/mySharing">
                <div class="img"><img src="../../assets/img/small-04.png" alt=""></div>
                <span class="number-item-name">{{ $t("personal.personal14") }}</span>
                <span class="jiantou"><img src="../../assets/img/mine_icon_right.png" alt=""></span>
              </router-link>
            </li>
          </ul>
          <div class="number-title">{{ $t("personal.personal15") }}</div>
          <ul class="number-list">
            <li class="number-item">
              <router-link to="/myApply">
                <div class="img"><img src="../../assets/img/small-05.png" alt=""></div>
                <span class="number-item-name">{{ $t("personal.personal16") }}</span>
                <span class="jiantou"><img src="../../assets/img/mine_icon_right.png" alt=""></span>
              </router-link>
            </li>
            <li class="number-item">
              <router-link to="/receiveApply">
                <div class="img"><img src="../../assets/img/small-06.png" alt=""></div>
                <span class="number-item-name">{{ $t("personal.personal17") }}</span>
                <span class="jiantou"><img src="../../assets/img/mine_icon_right.png" alt=""></span>
              </router-link>
            </li>
          </ul>
          <div class="number-operation">{{ $t("personal.personal18") }}</div>
          <ul class="number-list">
            <li class="number-item">
              <router-link to="/basicInformation">
                <div class="img"><img src="../../assets/img/small-06.png" alt=""></div>
                <span class="number-item-name">{{ $t("personal.personal19") }}</span>
                <span class="jiantou"><img src="../../assets/img/mine_icon_right.png" alt=""></span>
              </router-link>
            </li>
            <li class="number-item">
              <router-link to="" @click.native="quitBox = true">
                <div class="img"><img src="../../assets/img/small-07.png" alt=""></div>
                <span class="number-item-name">{{ $t("personal.personal20") }}</span>
                <span class="jiantou"><img src="../../assets/img/mine_icon_right.png" alt=""></span>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
      <Footer></Footer>
    </scroller>
    <!-- 退出弹框 -->
    <div class="quit" v-show="quitBox">
      <div class="quit-box">
        <div class="quit-tit">{{ $t("personal.personal21") }}</div>
        <div class="quit-cent">{{ $t("personal.personal22") }}</div>
        <div class="quit-btn">
          <div class="cancel" @click="quitBox = false">{{ $t("personal.personal23") }}</div>
          <div class="confirm" @click="quit">{{ $t("personal.personal20") }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ComHeader from "../../components/comHeader/index";
import Footer from "../../components/footer/index";
import echarts from "echarts";
export default {
  data() {
    return {
      JLQLT: {
        created: "",
        dataTime: ""
      },
      JLQSUMCOUNT: {
        getTotal: 0,
        sendTotal: 0,
        getCount:0,
        sendCount:0
      },
      JLQamount: 0.0,
      LGQLT: {
        created: "",
        dataTime: ""
      },
      LGQSUMCOUNT: {
        getTotal: 0,
        sendTotal: 0,
        getCount:0,
        sendCount:0
      },
      LGQamount: 0.0,
      GWQLT: {
        created: "",
        dataTime: ""
      },
      GWQSUMCOUNT: {
        getTotal: 0,
        sendTotal: 0,
        getCount:0,
        sendCount:0
      },
      GWQamount: 0.0,      
      quitBox: false,
      charts: "",
      option: {
        title: {
          text: ""
        },
        tooltip: {
          trigger: "axis"
        },
        legend: {
          data: ["共享信息"]
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
          data: null
        },
        yAxis: {
          type: "value"
        },
        series: [
          {
            name: "共享信息",
            type: "line",
            stack: "总量",
            smooth:true,  //这句就是让曲线变平滑的
            label: {
                normal: {
                    show: true,
                    position: 'top'
                }
            },
            areaStyle: {normal: {}},
            data: null
          }
        ]
      }
    };
  },
  methods: {
    init() {
      let p = {};
      this.axios.post(`${this.api.baseURL}/me/index`, p).then(res => {
        console.log(res);
        if (res.data.success) {
          if (res.data.data.JLQSUMCOUNT) {
            this.JLQSUMCOUNT = res.data.data.JLQSUMCOUNT;
          }
          if (res.data.data.JLQLT) {
            // this.JLQLT = res.data.data.JLQLT;
            this.JLQLT.created = res.data.data.JLQLT.created.slice(0, 10);
            this.JLQLT.dataTime = res.data.data.JLQLT.created.slice(11);
          }
          if (res.data.data.JLQamount) {
            this.JLQamount = res.data.data.JLQamount;
          }
          if (res.data.data.LGQLT) {
            // this.LGQLT = res.data.data.LGQLT;
            this.LGQLT.created = res.data.data.LGQLT.created.slice(0, 10);
            this.LGQLT.dataTime = res.data.data.LGQLT.created.slice(11);
          }
          if (res.data.data.LGQamount) {
            this.LGQamount = res.data.data.LGQamount;
          }
          if (res.data.data.LGQSUMCOUNT) {
            this.LGQSUMCOUNT = res.data.data.LGQSUMCOUNT;
          }

          if (res.data.data.GWQSUMCOUNT) {
            this.GWQSUMCOUNT = res.data.data.GWQSUMCOUNT;
          }
          if (res.data.data.GWQLT) {
            // this.JLQLT = res.data.data.JLQLT;
            this.GWQLT.created = res.data.data.GWQLT.created.slice(0, 10);
            this.GWQLT.dataTime = res.data.data.GWQLT.created.slice(11);
          }
          if (res.data.data.GWQamount) {
            this.GWQamount = res.data.data.GWQamount;
          }

          //共享数据
          let sbookList = res.data.data.sbookCountList
          let xdata = []
          let ydata = []
          for(let i=0;i<sbookList.length;i++){
            let click_date = sbookList[i].click_date
            xdata.push(click_date.slice(0, 10))
            ydata.push(sbookList[i].count)
          }
          this.option.xAxis.data = xdata
          this.option.series[0].data = ydata
          this.drowAllPie()

        } else {
        }
      });
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
    quit(){
      sessionStorage.removeItem("accessToken");
      sessionStorage.removeItem('account');
      this.$router.push({path: '/'})
    }
  },
  created() {
    this.init();
    this.drowAllPie();
  },
  components: {
    ComHeader,
    Footer
  }
};
</script>
<style lang="stylus">
@import '../../assets/styles/mixins.styl';

.personalCenter-page {
  padding-bottom: px2rem(100px);
  height: 100%;
  background: #f8f8f5;

  > ._v-container > ._v-content {
    padding-bottom: px2rem(90px);
  }

  .wrapper {
    margin-top: px2rem(88px);
    margin-bottom: px2rem(20px);
    width: 100%;
    height: 100%;

    .asset {
      width: 100%;
      height: 100%;

      .asset-title {
        position: relative;
        margin-left: px2rem(20px);
        padding-left: px2rem(20px);
        font-size: px2rem(44px);

        &::before {
          content: ' ';
          position: absolute;
          top: 50%;
          left: 0;
          transform: translateY(-50%);
          width: px2rem(8px);
          height: px2rem(43px);
          background-color: #0984e3;
        }
      }

      .asset-group {
        margin-top: px2rem(20px);
        width: 100%;
        height: px2rem(450px);
        background-color: #fff;

        .asset-list {
          margin: auto;
          width: 80%;
          height: px2rem(374px);

          .asset-item {
            float: left;
            padding: px2rem(30px) px2rem(28px);
            width: 100%;
            height: px2rem(374px);
            font-size: px2rem(100px);
            border-radius: px2rem(20px);
            background: url('../../assets/img/property-02.png') no-repeat;
            background-size: 100% 100%;

            &:nth-child(2) {
              background: url('../../assets/img/property-03.png') no-repeat;
              background-size: 100% 100%;
            }

            &:nth-child(3) {
              background: url('../../assets/img/property-04.png') no-repeat;
              background-size: 100% 100%;
            }

            .asset-item-t {
              padding-left :px2rem(20px);
              padding-top :px2rem(10px);
              padding-bottom: px2rem(20px);
              font-size: px2rem(30px);
              color: #fff;
              border-bottom: px2rem(2px) solid #fff;
            }

            .asset-item-info {
              width: 100%;
              display: flex;
              justify-content: space-between;
              border-bottom: px2rem(2px) solid #fff;

              .item-info-l {
                flex: 1;
                padding: px2rem(34px) 0;
                color: #fff;
                text-align: center;

                .number {
                  font-size: px2rem(30px);
                }

                .sum {
                  padding-top: px2rem(10px);
                  font-size: px2rem(24px);
                }
              }
            }

            .asset-item-b {
              padding-top: px2rem(10px);
              padding-left: px2rem(20px);
              font-size: px2rem(24px);
              color: #fff;
            }
          }

          .mint-swipe-indicators {
            bottom: -30px;

            .mint-swipe-indicator {
              width: px2rem(32px);
              height: px2rem(32px);
              background: #69696c;
              opacity: 1;
            }

            .mint-swipe-indicator.is-active {
              background: #fff;
            }

            .is-active {
              background: #000 !important;
            }
          }
        }

        .mint-swipe {
          overflow: visible;
        }
      }
    }

    .sharing {
      margin-top: px2rem(20px);
      width: 100%;
      height: 100%;

      // background-color:#191d27;
      .sharing-title {
        position: relative;
        margin-left: px2rem(20px);
        padding-left: px2rem(20px);
        font-size: px2rem(44px);

        &::before {
          content: ' ';
          position: absolute;
          top: 50%;
          left: 0;
          transform: translateY(-50%);
          width: px2rem(8px);
          height: px2rem(43px);
          background-color: #0984e3;
        }
      }

      #main {
        margin: auto;
        margin-top: px2rem(20px);
        width: px2rem(702px);
        height: px2rem(438px);
      }
    }

    .number-asset {
      width: 100%;

      .number-title {
        position: relative;
        padding: px2rem(20px) 0;
        margin-top: px2rem(20px);
        padding-left: px2rem(40px);
        font-size: px2rem(44px);
        background-color: #efefef;

        &::before {
          content: ' ';
          position: absolute;
          top: 50%;
          left: px2rem(20px);
          transform: translateY(-50%);
          width: px2rem(8px);
          height: px2rem(43px);
          background-color: #0984e3;
        }

        &::after {
          content: ' ';
          position: absolute;
          top: 50%;
          left: 30%;
          transform: translateY(-50%);
          width: 66%;
          height: px2rem(2px);
          background-color: #bdbdbd;
        }
      }

      .number-share {
        position: relative;
        padding: px2rem(20px) 0;
        padding-left: px2rem(40px);
        font-size: px2rem(44px);
        background-color: #efefef;

        &::before {
          content: ' ';
          position: absolute;
          top: 50%;
          left: px2rem(20px);
          transform: translateY(-50%);
          width: px2rem(8px);
          height: px2rem(43px);
          background-color: #0984e3;
        }

        &::after {
          content: ' ';
          position: absolute;
          top: 45%;
          left: 42%;
          transform: translateY(-50%);
          width: 55%;
          height: px2rem(2px);
          background-color: #bdbdbd;
        }
      }

      .number-operation {
        position: relative;
        padding: px2rem(20px) 0;
        padding-left: px2rem(40px);
        font-size: px2rem(44px);
        background-color: #efefef;

        &::before {
          content: ' ';
          position: absolute;
          top: 50%;
          left: px2rem(20px);
          transform: translateY(-50%);
          width: px2rem(8px);
          height: px2rem(43px);
          background-color: #0984e3;
        }

        &::after {
          content: ' ';
          position: absolute;
          top: 50%;
          left: 23%;
          transform: translateY(-50%);
          width: 70%;
          height: px2rem(2px);
          background-color: #bdbdbd;
        }
      }

      .number-list {
        width: 100%;

        .number-item {
          padding: 0 px2rem(20px);
          width: 100%;
          background-color: #fff;

          > a {
            display: block;
            padding: px2rem(28px) 0;
            border-bottom: px2rem(2px) solid #ccc;

            .img {
              display: inline-block;
              max-width: px2rem(47px);
              vertical-align: middle;

              > img {
                width: 100%;
                vertical-align: middle;
              }
            }

            .number-item-name {
              display: inline-block;
              font-size: px2rem(28px);
              vertical-align: middle;
            }

            .jiantou {
              float: right;
              margin-top: px2rem(10px);
              width: px2rem(18px);

              > img {
                width: 100%;
              }
            }
          }
        }
      }
    }
  }

  .quit {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.3);
    z-index: 22222;

    .quit-box {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      padding: px2rem(40px) px2rem(60px);
      width: 80%;
      background-color: #fff;
      border-radius: px2rem(10px);
      z-index: 33333;

      .quit-tit {
        text-align: center;
        font-size: px2rem(34px);
      }

      .quit-cent {
        padding-top: px2rem(60px);
        text-align: center;
        font-size: px2rem(34px);
      }

      .quit-btn {
        margin-top: px2rem(60px);
        width: 100%;
        display: flex;
        justify-content: space-between;

        .cancel {
          flex: 1;
          margin-right: px2rem(30px);
          height: px2rem(80px);
          line-height: px2rem(80px);
          text-align: center;
          font-size: px2rem(30px);
          color: #252533;
          border: px2rem(2px) solid #252533;
          border-radius: px2rem(10px);
        }

        .confirm {
          flex: 1;
          height: px2rem(80px);
          line-height: px2rem(80px);
          text-align: center;
          font-size: px2rem(30px);
          color: #fff;
          border: px2rem(2px) solid #252533;
          border-radius: px2rem(10px);
          background-color: #252533;
        }
      }
    }
  }
}
</style>
