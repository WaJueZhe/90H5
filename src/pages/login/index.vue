<template>
  <div class="login">
    <ComHeader></ComHeader>
    <div class="message">
      <h6>
        <span>{{ $t('login.login1') }}</span>
      </h6>
      <form class="mt-26">
        <div class="group">
          <div class="label">{{ $t('login.login2') }}</div>
          <div class="input">
            <input type="text" v-model="userName" :placeholder="$t('login.login3')">
          </div>
        </div>
        <div class="group">
          <div class="label">{{ $t('login.login4') }}</div>
          <div class="input">
            <input type="password" v-model="userPass" :placeholder="$t('login.login5')">
          </div>
        </div>
      </form>
      <div class="remember">
        <label>
          <input type="checkbox" v-model="psd">
          <span class="password_ji"> {{ $t("login.login6") }} </span>
        </label>
      </div>
      <div class="btn" @click="login">{{ $t('login.login1') }}</div>
    </div>
  </div>
</template>
<script>
import ComHeader from "../../components/comHeader/index";
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      userName: "",
      userPass: "",
      psd:false
    };
  },
  methods: {
    login() {
      //保存的账号
      let name = this.userName;
      //保存的密码
      let pass = this.userPass;

      if (this.userName == null || this.userName == "") {
        if(this.$i18n.locale=='en'){
          Toast("Check your publicKey")
          return
        }
        Toast("请输入您的用户公钥");
        return;
      }
      if (this.userPass == null || this.userPass == "") {
        if(this.$i18n.locale=='en'){
          Toast("Check your privateKey")
          return
        }        
        Toast("请输入您的用户私钥");
        return;
      }
      let p = {
        publicKey: this.userName,
        privateKey: this.userPass
      };
      this.axios.post(`${this.api.baseURL}/bsUser/loginByKey`, p).then(res => {
        if (res.data.success) {
          let accessToken = res.data.data.accessToken;

          let account = res.data.data.account;
          let userFullName = res.data.data.userFullName;
          let publicKey = res.data.data.publicKey;
          let userId = res.data.data.userId;
          if(this.$i18n.locale=='en'){
            Toast("Login success")
          }else{
            Toast("登录成功");
          }
          
          sessionStorage.setItem('userId',userId);
          sessionStorage.setItem('accessToken', accessToken);
          sessionStorage.setItem('account', account);
          sessionStorage.setItem('userFullName', userFullName);
          sessionStorage.setItem('publicKey', publicKey);

          sessionStorage.setItem('rememberme',this.psd);
          if(this.psd){
            sessionStorage.setItem('privateKey',this.userPass);             
          }else{
            sessionStorage.removeItem('privateKey');
            sessionStorage.removeItem('rememberme');
          }

          this.$router.push({ path: "/personalCenter" });
        } else {
          sessionStorage.removeItem('userId');
          sessionStorage.removeItem('accessToken');
          sessionStorage.removeItem('account');
          sessionStorage.removeItem('userFullName');
          sessionStorage.removeItem('publicKey');
          if(this.$i18n.locale=='en'){
            Toast("Unmatched keys")
          }else{
            Toast("公私钥不匹配!");
          }          
          
        }
      });
    }
  },

  created () {
    this.psd = sessionStorage.getItem('rememberme')
    if(this.psd){
      this.userName = sessionStorage.getItem('publicKey')
      this.userPass = sessionStorage.getItem('privateKey')
    }
  },
  components: {
    ComHeader
  }
};
</script>
<style lang="stylus">
@import '../../assets/styles/mixins.styl';

.login {
  width: 100%;
  height: 100%;
  // background: #9faf02;
  background: url('../../assets/img/login-banner-02.png') no-repeat;
  background-size: 100% 100%;
  overflow: hidden;

  .message {
    position: absolute;
    top: 190px;
    left: 10%;
    padding:0 px2rem(20px);
    width: px2rem(588px);
    height: px2rem(510px);
    background-color: #fff;
    border-radius: px2rem(20px);

    h6 {
      font-size: px2rem(44px);
      text-align: center;
      color: #0b87e3;
      font-weight: normal;

      > span {
        position: relative;

        &::before {
          content: ' ';
          position: absolute;
          top: 50%;
          left: px2rem(-60px);
          transform: translateY(-50%);
          width: px2rem(52px);
          height: px2rem(6px);
          background-color: #0b87e3;
        }

        &::after {
          content: ' ';
          position: absolute;
          top: 50%;
          right: px2rem(-60px);
          transform: translateY(-50%);
          width: px2rem(50px);
          height: px2rem(6px);
          background-color: #0b87e3;
        }
      }
    }

    .mt-26 {
      
      margin-top: px2rem(92px);

      .group {
        padding-left: px2rem(20px);
        margin-bottom: px2rem(40px);
        width: 100%;
        height: px2rem(76px);
        line-height: px2rem(76px);
        font-size: px2rem(32px);
        border: 1px solid #dadada;

        &::after {
          display: block;
          clear: both;
          content: ' ';
        }

        .label {
          float: left;
          width: 28%;
          font-size: px2rem(26px);
        }

        .input {
          float: left;
          width: 72%;
          height: 100%;

          > input {
            width: 100%;
            height: 100%;
            border: none;
            outline: none;
            vertical-align: top;
          }
        }
      }

      .help-block {
        margin-top: px2rem(-40px);
        font-size: px2rem(24px);
        color: red;
      }
    }

    .remember {
      width: 100%;

      label {
        width: 100%;
        height: px2rem(32px);
        line-height: px2rem(32px);

        > input {
          width: px2rem(32px);
          height: px2rem(32px);
        }

        > span {
          display:inline-block;
          padding-top:px2rem(2px);
          vertical-align: top;
          font-size:px2rem(24px);
        }
      }
    }

    .btn {
      margin-top: px2rem(60px);
      width: 100%;
      height: px2rem(80px);
      line-height: px2rem(80px);
      text-align: center;
      font-size: px2rem(32px);
      color: #fff;
      background-color: #169fe3;
      border-radius:px2rem(10px);
      cursor: pointer;
    }
  }
}
</style>
