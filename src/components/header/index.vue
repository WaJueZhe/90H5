<template>
  <div class="header-page">
    <div class="header">
      <span @click="goBack"><i class="iconfont icon-fanhui"></i></span>
      <h2 class="title">{{name}}</h2>
      <slot name="right"></slot>
    </div>
  </div>
</template>
<script>
export default {
  props:['name'],
  data () {
    return {
      screenWidth: document.body.clientWidth
    }
  },
  methods: {
    goBack(){
      this.$router.go(-1);
    }
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
}
</script>
<style lang="stylus" scoped>
@import '../../assets/styles/mixins.styl';

.header-page {
  // height:px2rem(88px);

  .header {
    position: fixed;
    top:0;
    left:0;
    z-index:9999;
    width: 100%;
    height: px2rem(88px);
    line-height: px2rem(88px);
    color: #fff;
    background-color: #252533;

      &::after {
      display: block;
      clear: both;
      content: ' ';
    }

    > span {
      padding-left:px2rem(12px);
      float: left;
      z-index: 99999;

      > i {
        font-size: px2rem(46px);
      }
    }

    .title {
      position: absolute;
      top:50%;
      left:50%;
      transform: translate(-50%,-50%);
      height: px2rem(80px);
      line-height: px2rem(80px);
      font-size: px2rem(34px);
      font-weight: normal;
    }

    .slot {
      float: right;
      margin: auto;
      padding-right: px2rem(20px);
      height: px2rem(80px);
      line-height:px2rem(80px);
      color: #fff;
      z-index: 99999;

      > a {
        display: block;
        color: #fff;
      }

      > span {
        vertical-align: middle;
      }
    }
  }
  
}
</style>
