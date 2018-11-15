<template>
  <div class="personal_center">
    <div class="header-page">
      <div class="mui-bar">
        <h3>个人中心</h3>
      </div>
    </div>
    <div class="account_balance">
      <div class="account">
        <p>用户</p>
        <!--<span>无</span>-->
        <span>{{account}}</span>
      </div>
      <div class="money">
        <ul>
          <li>
            <p>零购券余额</p>
            <span>{{LGQamount||'0'}}</span>
          </li>
          <li>
            <p>久零券余额</p>
            <span>{{JLQamount||'0'}}</span>
          </li>
          <li>
            <p>购物券余额</p>
            <span>{{JLQamount||'0'}}</span>
          </li>
        </ul>
      </div>
      
    </div>
    <div class="group">
      <ul class="item">
        <li class="list">
          <router-link :to="{name: 'ZeroCoupon_account'}">
            <span>零购券账户</span>
            <img src="../../assets/img/mine_icon_right.png" alt="">
          </router-link>
        </li>
        <li class="list">
          <router-link :to="{ name: 'LongCoupon_account' }">
            <span>久零券账户</span>
            <img src="../../assets/img/mine_icon_right.png" alt="">
          </router-link>
        </li>
        <li class="list">
          <router-link :to="{  name: 'Shopping_account' }">
            <span>购物券账户</span>
            <img src="../../assets/img/mine_icon_right.png" alt="">
          </router-link>
        </li>
      </ul>
    </div>
    <div class="group">
      <ul class="item">
        <li class="list">
          <router-link :to="{ name: 'About_us' }">
            <span>关于我们</span>
            <img src="../../assets/img/mine_icon_right.png" alt="">
          </router-link>
        </li>
        <li class="list">
          <router-link to="" @click.native="quitBox = true">
            <span>退出登录</span>
            <img src="../../assets/img/mine_icon_right.png" alt="">
          </router-link>
        </li>
      </ul>
    </div>
    <!-- 退出弹框 -->
    <div class="quit" v-show="quitBox">
      <div class="quit-box">
        <div class="quit-tit">退出登录</div>
        <div class="quit-cent">确定退出登录？</div>
        <div class="quit-btn">
          <div class="cancel" @click="quitBox = false">取消</div>
          <div class="confirm" @click="quit">退出</div>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>
<script>
import Footer from "../../components/footer/index";
export default {
  data() {
    return {
      account:'',
      LGQamount:'',
      JLQamount:'',
      quitBox:false,//推出弹出
    };
  },
  methods: {
    init(){
      let p={}
      this.axios
        .post(`${this.api.baseURL}/me/index`, p)
        .then(res => {
          console.log(res);
          if (res.data.success) {
            if(res.data.data.JLQamount){
              this.JLQamount = res.data.data.JLQamount;
            }
            if(res.data.data.LGQamount){
              this.LGQamount = res.data.data.LGQamount;
            }
          }
        });
    },
    quit(){
      sessionStorage.removeItem("accessToken");
      sessionStorage.removeItem('account');
      this.$router.push({path: '/'})
    }
  },
  created () {
    this.account = JSON.parse(sessionStorage.getItem('account'));
    this.init();
  },
  components: {
    Footer
  }
};
</script>
<style lang="stylus">
@import '../../assets/styles/mixins.styl';

.personal_center {
  width: 100%;
  height: 100%;
  background-color: #f8f8f5;

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
      box-sizing:border-box;

      > h3 {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: px2rem(34px);
        font-weight: normal;
      }

      > span {
        position: absolute;
        top: 50%;
        right: px2rem(24px);
        transform: translateY(-50%);
        font-size: px2rem(32px);
      }
    }
  }

  .account_balance {
    padding: px2rem(30px) px2rem(24px);
    background: #fff;
    box-sizing:border-box;

    .account {
      width:100%;
      height:px2rem(40px);
      line-height: px2rem(40px);

      &:after {
        display:block;
        clear: both;
        content: ' ';
      }

      > p {
        float: left;
        width: 10%;
        height: px2rem(40px);
        background-color: #9faf02;
        border-radius: px2rem(8px);
        font-size: px2rem(26px);
        color: #fff;
        text-align: center;
      }

      > span {
        float: right;
        width:86%;
        font-size: px2rem(34px);
        font-weight :bold;
        word-break:break-all;
      }
    }

    .money {
      margin-top: px2rem(50px);
      width:100%;

      > ul {
        width:100%;
        display:flex;
        justify-content:space-between;

        > li {
          flex:1;
          text-align:center;
          border-right: 1px solid #dadada;

          > p {
            margin-bottom: px2rem(10px);
            font-size: px2rem(26px);
          }

          > span {
            font-size: px2rem(30px);
          }

          &:last-child {
            border-right:none;
          }
        }
      }
    }
  }

  .group {
    margin-top:px2rem(20px);
    width:100%;
    background-color: #fff;
    box-sizing:border-box;

    .item {
      width:100%;
      height:100%;

      .list {
        padding: 0 px2rem(24px);
        width:100%;
        box-sizing:border-box;

        > a {
          display:block;
          padding:px2rem(38px) 0;
          width:100%;
          font-size:px2rem(28px);
          border-bottom:px2rem(2px) solid #c8c7cc;
          box-sizing:border-box;

          > img {
            float: right;
            margin-top:px2rem(2px);
            width:px2rem(18px);
          }

          &:last-child {
            > a {
              &:last-child {
                border-bottom:none;
              }
            }
          }
        }
      }
    }
  }

  .quit {
    position: fixed;
    top:0;
    left:0;
    width:100%;
    height:100%;
    background:rgba(0,0,0,.3);
    z-index:22222;

    .quit-box {
      position: absolute;
      top:50%;
      left:50%;
      transform:translate(-50%,-50%);
      padding:px2rem(40px) px2rem(60px);
      width:80%;
      background-color: #fff;
      border-radius:px2rem(10px);
      z-index:33333;

      .quit-tit {
        text-align:center;
        font-size:px2rem(34px);
      }

      .quit-cent {
        padding-top:px2rem(60px);
        text-align:center;
        font-size:px2rem(34px);
      }

      .quit-btn {
        margin-top:px2rem(60px);
        width:100%;
        display:flex;
        justify-content:space-between;

        .cancel {
          flex:1;
          margin-right:px2rem(30px);
          height:px2rem(80px);
          line-height:px2rem(80px);
          text-align:center;
          font-size:px2rem(30px);
          color:#9faf02;
          border:px2rem(2px) solid #9faf02;
          border-radius:px2rem(10px);
        }
        .confirm {
          flex:1;
          height:px2rem(80px);
          line-height:px2rem(80px);
          text-align:center;
          font-size:px2rem(30px);
          color:#fff;
          border:px2rem(2px) solid #9faf02;
          border-radius:px2rem(10px);
          background-color: #9faf02;
        }
      }
    }
  }
}
</style>
