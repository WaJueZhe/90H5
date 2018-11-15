<template>
  <div class="header-page">
    <div class="header">
      <div class="img">
        <router-link to="/">
          <img src="../../assets/img/logo-01.png" alt="">
        </router-link>
      </div>
      <div class="search">
        <input type="text" v-model="searchStr" :placeholder="$t('header.placeholder1') + '/' + $t('header.placeholder2')">
        <span @click="search"><i class="iconfont icon-sousuo"></i></span>
      </div>
      <div class="nav" @click="menuBox = !menuBox"><i class="iconfont icon-daohang"></i></div>
    </div>
    <div class="header-menu" v-show="menuBox">
      <div class="menu-list">
        <div class="menu-item">
          <router-link to="/"><span>{{ $t("header.home") }}</span></router-link>
        </div>
        <div class="menu-item">
          <router-link to="/blockIndex"><span>{{ $t("header.publicity") }}</span></router-link>
        </div>
        <div class="menu-item">
          <router-link to="/adhibition"><span>{{ $t("header.scene") }}</span></router-link>
        </div>
        <div class="menu-item">
          <router-link to="/about"><span>{{ $t("header.aboutUs") }}</span></router-link>
        </div>
      </div>
      <div class="menu-msg">
        <div class="menu-login">
          <router-link to="/login" v-if="!isLogin">{{ $t("header.login") }}</router-link>
          <router-link to="/personalCenter" v-if="isLogin">{{ $t("header.loginCenter") }}</router-link>
        </div>
        <div class="menu-language">
          <span @click="change" v-if="$i18n.locale=='en'">中文</span>
          <span @click="change" v-if="$i18n.locale=='zh'">English</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      menuBox:false,
      isLogin:false,
      searchStr: null,

      screenWidth: document.body.clientWidth
    }
  },
  methods: {
    search() {
      if (this.searchStr == null || this.searchStr == "") {
        return;
      }
      this.$router.push({
        path: "/searchResult",
        query: { searchStr: this.searchStr }
      });
    },
    //切换中英文
    change(){
      let lang = this.$i18n.locale === 'zh' ? 'en' : 'zh';
      this.$set(this.$i18n, 'locale', lang)
      localStorage.setItem("LANG",lang);
    },
  },
  mounted () {
     if(this.screenWidth >= 980) {
        window.location.href = this.api.weburl;
      }
      const that = this
      window.onresize = () => {
          return (() => {
              window.screenWidth = document.body.clientWidth
              that.screenWidth = window.screenWidth
          })()
      }
  },
  watch: {
      screenWidth (val) {
          if (!this.timer) {
              this.screenWidth = val
              this.timer = true
              let that = this
              setTimeout(function () {
                  // that.screenWidth = that.$store.state.canvasWidth
                  console.log(that.screenWidth)
                  if(that.screenWidth >= 980) {
                    window.location.href = that.api.weburl;
                  }
                  that.timer = false
              }, 400)
          }
      }
  },
  created () {
    let token = sessionStorage.getItem('accessToken');
    if(token!=null&&token!=''){
      this.isLogin=true;
    }
  }
}
</script>
<style lang="stylus" scoped>
@import '../../assets/styles/mixins.styl';

.header-page {
  width:100%;
  height: px2rem(88px);

  .header {
    position fixed
    top:0;
    left: 0;
    width:100%;
    height: px2rem(88px);
    background-color: #252533;
    z-index: 9999;

    .img {
      position absolute;
      top: 50%;
      left: px2rem(20px);
      transform: translateY(-50%);
      width: px2rem(125px);
      height: px2rem(36px);

      > a {
        display:block;
        width:100%;
        height:100%;
      }
    }

    .search {
      position: absolute;
      top: 50%;
      left: px2rem(325px);
      transform: translateY(-50%);
      width: px2rem(300px);
      height: px2rem(48px);
      border: px2rem(2px) solid #0984e3;
      border-radius: px2rem(40px);
      overflow: hidden;

      > input {
        position: absolute;
        top: 0;
        left: 0;
        padding: 0 px2rem(20px);
        width: 100%;
        height: 100%;
        background-color:transparent;
        color #fff;
      }

      input::-webkit-input-placeholder {
        /* placeholder颜色  */
        color: #fff;
      }

      > span {
        position: absolute;
        top: px2rem(-2px);
        right: px2rem(-2px);
        width: px2rem(46px);
        height: px2rem(46px);
        border-radius: 50%;
        background-color: #0984e3;

        > i {
          position absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%,-50%);
          color: #fff;
        }
      }
    }

    .nav {
      position: absolute;
      top: 0;
      right: px2rem(20px);
      width: px2rem(60px);
      height: 100%;

      > i {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        font-size: px2rem(50px);
        color: #fff;
      }
    }
  }

  .header-menu {
    padding-top px2rem(88px);
    width: 100%;
    z-index: 999;

    .menu-list {
      padding: px2rem(20px) 0;
      width: 100%;
      background-color:rgba(0,0,0,.8);
      display: flex;
      justify-content: space-between;

      .menu-item {
        flex: 1;
        line-height: px2rem(88px);
        text-align: center;
        font-size: px2rem(30px);

        > a {
          display inline-block;
          width: 100%;
          height: 100%;
          color: #fff;

          > span {
            padding: px2rem(10px) 0;
          }

          &.router-link-exact-active {
            > span {
              border-bottom: px2rem(4px) solid #fff !important;
            }
          }
        }
      }
    }

    .menu-msg {
      padding: px2rem(20px) px2rem(120px) px2rem(40px) px2rem(120px);
      width: 100%;
      display: flex;
      justify-content: space-between;
      background-color:rgba(0,0,0,.8);

      .menu-login {
        width: px2rem(140px);
        height: px2rem(60px);
        line-height: px2rem(60px);
        text-align: center;
        font-size: px2rem(30px);
        border: px2rem(2px) solid #fff;
        border-radius: px2rem(10px);

        > a {
          display:block;
          color: #fff;
        }
      }

      .menu-language {
        height: px2rem(60px);
        line-height: px2rem(60px);
        font-size: px2rem(28px);
        color: #fff;

        > span {
          width: px2rem(100px);
          text-align: center;

          &:first-child {
            padding-right: px2rem(40px);
            padding-left: px2rem(20px);
            border-left: px2rem(4px) solid #0984e3;
          }
        }
      }
    }
  }
}
</style>
