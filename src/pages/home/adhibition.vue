<template>
  <div class="adhibition-page">
    <ComHeader></ComHeader>
    <scroller>
      <div class="wrapper">
        <div class="top-banner"><img src="../../assets/img/banner-03.png" alt=""></div>
        <div class="sharing">
          <!-- 共享经济 -->
          <div class="sharing-title">
            <span>{{ $t("sharing.sharing1") }}</span>
          </div>
          <p class="sharing-describe" v-if="this.$i18n.locale === 'zh'">{{ $t("sharing.sharing2") }}</p>
          <p class="sharing-describe" v-if="this.$i18n.locale === 'zh'">{{ $t("sharing.sharing3") }}</p>
          <p class="sharing-describe" v-if="this.$i18n.locale === 'zh'">{{ $t("sharing.sharing4") }}</p>
          <p class="sharing-describe" v-if="this.$i18n.locale === 'en'">{{ $t("sharing.sharing2") }}</p>
          <div class="sharing-line"></div>
          <div class="sharing-trait">{{ $t("sharing.sharing5") }}</div>
          <div class="sharing-list">
            <div class="sharing-item">
              <p class="sharing-item-tit">
                <span>{{ $t("sharing.sharing6") }}</span>
              </p>
              <p class="sharing-item-text">{{ $t("sharing.sharing7") }}</p>
            </div>
            <div class="sharing-item">
              <p class="sharing-item-tit">
                <span>{{ $t("sharing.sharing8") }}</span>
              </p>
              <p class="sharing-item-text">{{ $t("sharing.sharing9") }}</p>
            </div>
          </div>
          <div class="solve">
            <div class="solve-title">
              <span>{{ $t("sharing.sharing10") }}</span>
            </div>
            <div class="solve-img">
              <img src="../../assets/img/share.png" alt="" v-if="this.$i18n.locale === 'zh'">
              <img src="../../assets/img/share-05.png" alt="" v-if="this.$i18n.locale === 'en'">
            </div>
          </div>
          <div class="worth">
            <div class="worth-title">
              <span>{{ $t("sharing.sharing11") }}</span>
            </div>
            <div class="worth-group">
              <div class="worth-item">
                <div class="worth-item-img"><img src="../../assets/img/worth-07.png" alt=""></div>
                <p>{{ $t("sharing.sharing12") }}</p>
              </div>
              <div class="worth-item">
                <div class="worth-item-img"><img src="../../assets/img/worth-08.png" alt=""></div>
                <p>{{ $t("sharing.sharing13") }}</p>
              </div>
              <div class="worth-item">
                <div class="worth-item-img"><img src="../../assets/img/worth-09.png" alt=""></div>
                <p>{{ $t("sharing.sharing14") }}</p>
              </div>
            </div>
          </div>
          <!-- 数字积分 -->
          <div class="sharing-title">
            <span>{{ $t("integral.integral1") }}</span>
          </div>
          <p class="sharing-describe" v-if="this.$i18n.locale === 'zh'">{{ $t("integral.integral2") }}</p>
          <p class="sharing-describe" v-if="this.$i18n.locale === 'zh'">{{ $t("integral.integral3") }}</p>
          <p class="sharing-describe" v-if="this.$i18n.locale === 'zh'">{{ $t("integral.integral4") }}</p>
          <p class="sharing-describe" v-if="this.$i18n.locale === 'en'">{{ $t("integral.integral2") }}</p>
          <div class="sharing-line"></div>
          <div class="sharing-trait">{{ $t("integral.integral5") }}</div>
          <div class="integral-list">
            <div class="integral-item">
              <p class="integral-item-tit">
                <span>{{ $t("integral.integral6") }}</span>
              </p>
              <p class="integral-item-text">{{ $t("integral.integral7") }}</p>
            </div>
            <div class="integral-item">
              <p class="integral-item-tit">
                <span>{{ $t("integral.integral8") }}</span>
              </p>
              <p class="integral-item-text">{{ $t("integral.integral9") }}</p>
            </div>
            <div class="integral-item">
              <p class="integral-item-tit">
                <span>{{ $t("integral.integral10") }}</span>
              </p>
              <p class="integral-item-text">{{ $t("integral.integral11") }}</p>
            </div>
          </div>
          <div class="solve">
            <div class="solve-title">
              <span>{{ $t("integral.integral12") }}</span>
            </div>
            <div class="solve-img">
              <img src="../../assets/img/share-02.png" alt="" v-if="this.$i18n.locale === 'zh'">
              <img src="../../assets/img/share-06.png" alt="" v-if="this.$i18n.locale === 'en'">
            </div>
          </div>
          <div class="worth">
            <div class="worth-title">
              <span>{{ $t("integral.integral13") }}</span>
            </div>
            <div class="worth-group">
              <div class="worth-item">
                <div class="worth-item-img"><img src="../../assets/img/worth-04.png" alt=""></div>
                <p>{{ $t("integral.integral14") }}</p>
              </div>
              <div class="worth-item">
                <div class="worth-item-img"><img src="../../assets/img/worth-05.png" alt=""></div>
                <p>{{ $t("integral.integral15") }}</p>
              </div>
              <div class="worth-item">
                <div class="worth-item-img"><img src="../../assets/img/worth-06.png" alt=""></div>
                <p>{{ $t("integral.integral16") }}</p>
              </div>
            </div>
          </div>
          <!-- 产品溯源 -->
          <div class="sharing-title">
            <span>{{ $t("product.product1") }}</span>
          </div>
          <p class="sharing-describe" v-if="this.$i18n.locale === 'zh'">{{ $t("product.product2") }}</p>
          <p class="sharing-describe" v-if="this.$i18n.locale === 'zh'">{{ $t("product.product3") }}</p>
          <p class="sharing-describe" v-if="this.$i18n.locale === 'zh'">{{ $t("product.product4") }}</p>
          <p class="sharing-describe" v-if="this.$i18n.locale === 'en'">{{ $t("product.product2") }}</p>
          <div class="sharing-line"></div>
          <div class="sharing-trait">{{ $t("product.product5") }}</div>
          <div class="product-list">
            <div class="product-item">
              <p class="product-item-tit">
                <span>{{ $t("product.product6") }}</span>
              </p>
              <p class="product-item-text">{{ $t("product.product7") }}</p>
            </div>
            <div class="product-item">
              <p class="product-item-tit">
                <span>{{ $t("product.product8") }}</span>
              </p>
              <p class="product-item-text">{{ $t("product.product9") }}</p>
            </div>
          </div>
          <div class="solve">
            <div class="solve-title">
              <span>{{ $t("product.product10") }}</span>
            </div>
            <div class="solve-img">
              <img src="../../assets/img/share-03.png" alt=""  v-if="this.$i18n.locale === 'zh'">
              <img src="../../assets/img/share-07.png" alt=""  v-if="this.$i18n.locale === 'en'">
            </div>
          </div>
          <div class="worth">
            <div class="worth-title">
              <span>{{ $t("product.product11") }}</span>
            </div>
            <div class="worth-group">
              <div class="worth-item">
                <div class="worth-item-img"><img src="../../assets/img/worth-01.png" alt=""></div>
                <p>{{ $t("product.product12") }}</p>
              </div>
              <div class="worth-item">
                <div class="worth-item-img"><img src="../../assets/img/worth-02.png" alt=""></div>
                <p>{{ $t("product.product13") }}</p>
              </div>
              <div class="worth-item">
                <div class="worth-item-img"><img src="../../assets/img/worth-03.png" alt=""></div>
                <p>{{ $t("product.product14") }}</p>
              </div>
            </div>
          </div>
          <!-- 供应链金融 -->
          <div class="financial-title">
            <span>{{ $t("financial.financial1") }}</span>
          </div>
          <p class="sharing-describe">{{ $t("financial.financial2") }}</p>
          <p class="sharing-describe">{{ $t("financial.financial3") }}</p>
          <p class="sharing-describe">{{ $t("financial.financial4") }}</p>
          <div class="sharing-line"></div>
          <div class="financial-list">
            <div class="financial-item">
              <p class="financial-item-tit">
                <span>{{ $t("financial.financial5") }}</span>
              </p>
              <p class="financial-item-text">{{ $t("financial.financial6") }}</p>
            </div>
            <div class="financial-item">
              <p class="financial-item-tit">
                <span>{{ $t("financial.financial7") }}</span>
              </p>
              <p class="financial-item-text">{{ $t("financial.financial8") }}</p>
            </div>
            <div class="financial-item">
              <p class="financial-item-tit">
                <span>{{ $t("financial.financial9") }}</span>
              </p>
              <p class="financial-item-text">{{ $t("financial.financial10") }}</p>
            </div>
            <div class="financial-item">
              <p class="financial-item-tit">
                <span>{{ $t("financial.financial11") }}</span>
              </p>
              <p class="financial-item-text">{{ $t("financial.financial12") }}</p>
            </div>
          </div>
          <div class="solve">
            <div class="solve-title">
              <span>{{ $t("financial.financial13") }}</span>
            </div>
            <div class="solve-img">
              <img src="../../assets/img/share-04.png" alt="" v-if="this.$i18n.locale === 'zh'">
              <img src="../../assets/img/share-08.png" alt="" v-if="this.$i18n.locale === 'en'">
            </div>
          </div>
          <div class="worth">
            <div class="worth-title">
              <span>{{ $t("financial.financial14") }}</span>
            </div>
            <div class="worth-group">
              <div class="worth-item">
                <div class="worth-item-img"><img src="../../assets/img/worth-10.png" alt=""></div>
                <p>{{ $t("financial.financial15") }}</p>
              </div>
              <div class="worth-item">
                <div class="worth-item-img"><img src="../../assets/img/worth-11.png" alt=""></div>
                <p>{{ $t("financial.financial16") }}</p>
              </div>
              <div class="worth-item">
                <div class="worth-item-img"><img src="../../assets/img/worth-12.png" alt=""></div>
                <p>{{ $t("financial.financial17") }}</p>
              </div>
            </div>
          </div>
        </div>
        <Footer></Footer>
      </div>
    </scroller>
  </div>
</template>
<script>
import ComHeader from "../../components/comHeader/index";
import Footer from "../../components/footer/index";
export default {
  data() {
    return {};
  },
  components: {
    ComHeader,
    Footer
  }
};
</script>
<style lang="stylus">
@import '../../assets/styles/mixins.styl';

.adhibition-page {
  padding-bottom: px2rem(100px);
  height: 100%;
  background: #f8f8f5;

  > ._v-container > ._v-content {
    padding-bottom: px2rem(90px);
  }

  .wrapper {
    margin-top: px2rem(88px);
    width: 100%;
    height: 100%;

    .top-banner {
      width: 100%;
      height: px2rem(350px);

      > img {
        width: 100%;
      }
    }

    .sharing {
      width: 100%;
      height: 100%;
      background-color: #fff;
      overflow: hidden;

      .sharing-title {
        margin-top: px2rem(40px);
        margin-bottom: px2rem(10px);
        font-size: px2rem(44px);
        text-align: center;

        > span {
          position: relative;

          &:before {
            content: ' ';
            position: absolute;
            top: 50%;
            left: px2rem(-20px);
            transform: translateY(-50%);
            width: px2rem(8px);
            height: px2rem(34px);
            background-color: #0984e3;
          }
        }

        
      }

      .financial-title {
        margin-top: px2rem(40px);
        margin-bottom: px2rem(10px);
        font-size: px2rem(44px);
        text-align: center;

        > span {
          position: relative;

          &:before {
            content: ' ';
            position: absolute;
            top: 50%;
            left: px2rem(-20px);
            transform: translateY(-50%);
            width: px2rem(8px);
            height: px2rem(34px);
            background-color: #0984e3;
          }
        }

        
      }

      .sharing-describe {
        padding:0 px2rem(20px);
        padding-top: px2rem(10px);
        font-size: px2rem(26px);
        text-align: center;
      }

      .sharing-line {
        margin: auto;
        margin-top: px2rem(40px);
        width: px2rem(490px);
        height: px2rem(2px);
        background-color: #bfbfbf;
      }

      .sharing-trait {
        position: relative;
        margin-top: px2rem(36px);
        font-size: px2rem(28px);
        text-align: center;

        &::before {
          content: ' ';
          position: absolute;
          top: 50%;
          left: 38%;
          width: px2rem(10px);
          height: px2rem(2px);
          background-color: #000;
        }

        &::after {
          content: ' ';
          position: absolute;
          top: 50%;
          right: 38%;
          width: px2rem(10px);
          height: px2rem(2px);
          background-color: #000;
        }
      }

      .sharing-list {
        margin-top: px2rem(24px);
        margin-bottom: px2rem(40px);
        width: 100%;
        height: 100%;

        .sharing-item {
          padding: px2rem(30px) px2rem(22px);
          margin: auto;
          margin-bottom: px2rem(20px);
          width: px2rem(610px);
          background: url('../../assets/img/sharing-01.png') no-repeat;
          background-size: 100% 100%;

          &:nth-child(2) {
            .sharing-item-tit {
              .right-line {
                right: px2rem(316px);
              }
            }
          }

          &:last-child {
            margin-bottom: 0;
          }

          .sharing-item-tit {
            
            padding-left: px2rem(10px);
            font-size: px2rem(28px);
            color: #fff;

            > span {
              position: relative;

              &:before {
                content: '';
                position: absolute;
                top:px2rem(-6px);
                left:px2rem(-12px);
                width: px2rem(20px);
                height: px2rem(20px);
                border-top: px2rem(2px) solid #fff;
                border-right: px2rem(2px) solid #fff;
                transform: rotate(-90deg);
                -webkit-transform: rotate(-90deg);
              }

              &:after {
                content: '';
                position: absolute;
                bottom:px2rem(-6px);
                right:px2rem(-12px);
                width: px2rem(20px);
                height: px2rem(20px);
                border-bottom: px2rem(2px) solid #fff;
                border-left: px2rem(2px) solid #fff;
                transform: rotate(-90deg);
                -webkit-transform: rotate(-90deg);
              }
            }
          }

          .sharing-item-text {
            padding: 0 px2rem(20px);
            padding-top: px2rem(10px);
            font-size: px2rem(24px);
            line-height: 1.7;
            color: #fff;
          }
        }
      }

      .integral-list {
        margin-top: px2rem(24px);
        margin-bottom: px2rem(40px);
        width: 100%;
        height: 100%;

        .integral-item {
          padding: px2rem(30px) px2rem(22px);
          margin: auto;
          margin-bottom: px2rem(20px);
          width: px2rem(610px);
          // height: px2rem(230px);
          background: url('../../assets/img/sharing-01.png') no-repeat;
          background-size: 100% 100%;

          &:last-child {
            margin-bottom: 0;
          }

          .integral-item-tit {
            position: relative;
            padding-left: px2rem(10px);
            font-size: px2rem(28px);
            color: #fff;

            > span {
              position: relative;

              &:before {
                content: '';
                position: absolute;
                top:px2rem(-6px);
                left:px2rem(-12px);
                width: px2rem(20px);
                height: px2rem(20px);
                border-top: px2rem(2px) solid #fff;
                border-right: px2rem(2px) solid #fff;
                transform: rotate(-90deg);
                -webkit-transform: rotate(-90deg);
              }

              &:after {
                content: '';
                position: absolute;
                bottom:px2rem(-6px);
                right:px2rem(-12px);
                width: px2rem(20px);
                height: px2rem(20px);
                border-bottom: px2rem(2px) solid #fff;
                border-left: px2rem(2px) solid #fff;
                transform: rotate(-90deg);
                -webkit-transform: rotate(-90deg);
              }
            }
          }

          .integral-item-text {
            padding: 0 px2rem(20px);
            padding-top: px2rem(10px);
            font-size: px2rem(24px);
            line-height: 1.7;
            color: #fff;
          }
        }
      }

      .product-list {
        margin-top: px2rem(24px);
        margin-bottom: px2rem(40px);
        width: 100%;
        height: 100%;

        .product-item {
          padding: px2rem(30px) px2rem(22px);
          margin: auto;
          margin-bottom: px2rem(20px);
          width: px2rem(610px);
          background: url('../../assets/img/sharing-01.png') no-repeat;
          background-size: 100% 100%;

          &:last-child {
            margin-bottom: 0;
          }

          .product-item-tit {
            position: relative;
            padding-left: px2rem(10px);
            font-size: px2rem(28px);
            color: #fff;

            > span {
              position: relative;

              &:before {
                content: '';
                position: absolute;
                top:px2rem(-6px);
                left:px2rem(-12px);
                width: px2rem(20px);
                height: px2rem(20px);
                border-top: px2rem(2px) solid #fff;
                border-right: px2rem(2px) solid #fff;
                transform: rotate(-90deg);
                -webkit-transform: rotate(-90deg);
              }

              &:after {
                content: '';
                position: absolute;
                bottom:px2rem(-6px);
                right:px2rem(-12px);
                width: px2rem(20px);
                height: px2rem(20px);
                border-bottom: px2rem(2px) solid #fff;
                border-left: px2rem(2px) solid #fff;
                transform: rotate(-90deg);
                -webkit-transform: rotate(-90deg);
              }
            }
          }

          .product-item-text {
            padding-top: px2rem(10px);
            font-size: px2rem(24px);
            line-height: 1.7;
            color: #fff;
          }
        }
      }

      .financial-list {
        margin-top: px2rem(24px);
        margin-bottom: px2rem(40px);
        width: 100%;
        height: 100%;

        .financial-item {
          padding: px2rem(30px) px2rem(22px);
          margin: auto;
          margin-bottom: px2rem(20px);
          width: px2rem(610px);
          background: url('../../assets/img/sharing-02.png') no-repeat;
          background-size: 100% 100%;

          &:last-child {
            margin-bottom: 0;
          }

          .financial-item-tit {
            position: relative;
            padding-left: px2rem(10px);
            font-size: px2rem(28px);
            color: #fff;

            > span {
              position: relative;

              &:before {
                content: '';
                position: absolute;
                top:px2rem(-6px);
                left:px2rem(-12px);
                width: px2rem(20px);
                height: px2rem(20px);
                border-top: px2rem(2px) solid #fff;
                border-right: px2rem(2px) solid #fff;
                transform: rotate(-90deg);
                -webkit-transform: rotate(-90deg);
              }

              &:after {
                content: '';
                position: absolute;
                bottom:px2rem(-6px);
                right:px2rem(-12px);
                width: px2rem(20px);
                height: px2rem(20px);
                border-bottom: px2rem(2px) solid #fff;
                border-left: px2rem(2px) solid #fff;
                transform: rotate(-90deg);
                -webkit-transform: rotate(-90deg);
              }
            }
          }

          .financial-item-text {
            padding: 0 px2rem(20px);
            padding-top: px2rem(10px);
            font-size: px2rem(24px);
            line-height: 1.7;
            color: #fff;
          }
        }
      }

      .solve {
        padding: px2rem(40px) 0;
        width: 100%;
        background-color: #f0f0f0;

        .solve-title {
          font-size: px2rem(36px);
          text-align: center;

          > span {
            position: relative;

            &::before {
              content: ' ';
              position: absolute;
              top: 50%;
              left: px2rem(-20px);
              width: px2rem(10px);
              height: px2rem(2px);
              background-color: #000;
            }

            &::after {
              content: ' ';
              position: absolute;
              top: 50%;
              right: px2rem(-20px);
              width: px2rem(10px);
              height: px2rem(2px);
              background-color: #000;
            }
          }
        }

        .solve-img {
          margin: auto;
          margin-top: px2rem(44px);
          width: px2rem(715px);
          height: px2rem(299px);

          > img {
            width: 100%;
          }
        }
      }

      .worth {
        padding: px2rem(40px) px2rem(20px) 0 px2rem(20px);
        width: 100%;
        background-color: #fff;

        .worth-title {
          
          font-size: px2rem(36px);
          text-align: center;

          > span {
            position: relative;

            &::before {
              content: ' ';
              position: absolute;
              top: 50%;
              left: px2rem(-20px);
              width: px2rem(10px);
              height: px2rem(2px);
              background-color: #000;
            }

            &::after {
              content: ' ';
              position: absolute;
              top: 50%;
              right: px2rem(-20px);
              width: px2rem(10px);
              height: px2rem(2px);
              background-color: #000;
            }
          }
        }

        .worth-group {
          padding-bottom:px2rem(40px);
          margin-top: px2rem(40px);
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: space-between;
          border-bottom:1px solid #ccc;

          .worth-item {
            flex: 1;

            .worth-item-img {
              margin: auto;
              width: px2rem(150px);
              height: px2rem(151px);

              > img {
                width: 100%;
              }
            }

            p {
              padding-top: px2rem(10px);
              font-size: px2rem(24px);
              text-align: center;
            }
          }
        }
      }
    }
  }
}
</style>
