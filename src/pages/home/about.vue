<template>
  <div class="about-page">
    <ComHeader></ComHeader>
    <scroller>
      <div class="wrapper">
        <div class="top-banner">
          <div class="top-banner-title">{{ $t("about.about3") }}</div>
        </div>
        <div class="about">
          <div class="about-title">{{ $t("about.about1") }}</div>
          <p class="about-text">{{ $t("about.about2") }}</p>
          <p class="about-text">{{ $t("about.about4") }}</p>
          <p class="about-text">{{ $t("about.about5") }}</p>
          <p class="about-text">{{ $t("about.about6") }}</p>
          <p class="team"><span>{{ $t("about.about7") }}</span>{{ $t("about.about8") }}</p>
          <p class="team"><span>{{ $t("about.about9") }}</span>{{ $t("about.about10") }}</p>
          <div class="img"><img src="../../assets/img/qk-01.jpg" alt=""></div>
          <div class="img-group">
            <div class="img-item"><img src="../../assets/img/qk-02.jpg" alt=""></div>
            <div class="img-item"><img src="../../assets/img/qk-03.jpg" alt=""></div>
          </div>
          <p class="image">{{ $t("about.about11") }}
            <img src="../../assets/img/about.jpg" alt="">
          </p>
          <p class="location">{{ $t("about.about12") }}
            <img src="../../assets/img/location.jpg" alt="">
          </p>
          
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
  data () {
    return {
      
    }
  },
  components: {
    ComHeader,
    Footer
  }
}
</script>
<style lang="stylus">
@import '../../assets/styles/mixins.styl';

.about-page {
  padding-bottom: px2rem(100px);
  height: 100%;
  background: #fff;

  > ._v-container > ._v-content {
    padding-bottom: px2rem(90px);
  }

  .wrapper {
    margin-top: px2rem(88px);
    width: 100%;
    height: 100%;

    .top-banner {
      position: relative;
      width: 100%;
      height: px2rem(350px);
      background:url('../../assets/img/banner-04.png') no-repeat;
      background-size:100% 100%;

      .top-banner-title {
        position: absolute;
        top:50%;
        transform:translateY(-50%);
        width:100%;
        font-size:px2rem(44px);
        text-align:center;
        color:#fff;

        &:after {
          content:' ';
          position: absolute;
          bottom:px2rem(-10px);
          left:50%;
          transform:translateX(-50%);
          width:30%;
          height:px2rem(4px);
          background-color #fff;
        }
      }
    }

    .about {
      padding:px2rem(60px) px2rem(20px);
      width:100%;
      height:100%;
      background-color: #fff;

      .about-title {
        position: relative;
        margin-bottom:px2rem(40px);
        padding-left: px2rem(20px);
        font-size: px2rem(44px);

        &::before {
          content: ' ';
          position: absolute;
          top: 50%;
          left: 0;
          transform: translateY(-50%);
          width: px2rem(4px);
          height: px2rem(34px);
          background-color: #0984e3;
        }
        &::after {
          content: ' ';
          position: absolute;
          top: 50%;
          left: 30%;
          transform: translateY(-50%);
          width: 70%;
          height: px2rem(2px);
          background-color: #bfbfbf;
        }
      }

      .about-text {
        margin-bottom:px2rem(20px);
        font-size:px2rem(26px);
        line-height:1.5;
      }

      .team {
        margin-bottom:px2rem(20px);
        font-size:px2rem(28px);

        > span {
          font-weight:bold;
        }
      }

      .image {
        margin-bottom:px2rem(20px);
        width:100%;
        font-size:px2rem(32px);
        font-weight bold;

        > img {
          width:100%;
        }
      }

      .location {
        margin-bottom:px2rem(20px);
        width:100%;
        font-size:px2rem(32px);
        font-weight bold;

        > img {
          margin-top:px2rem(20px);
          width:100%;
        }
      }

      .img {
        margin:0 auto;
        width:px2rem(376px);
        height:px2rem(233px);

        > img {
          width:100%;
        }
      }

      .img-group {
        margin-bottom:px2rem(30px);
        width:100%;
        display:flex;
        justify-content:space-between;

        .img-item {
          flex:1;
          margin-top:px2rem(20px);
          margin-right:px2rem(20px)
          height:px2rem(233px);

          &:last-child {
            margin-right: 0;
          }

          > img {
            width:100%;
            height:100%;
          }
        }
      }
    }
  }
}
</style>