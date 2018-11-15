<template>
  <div class="basicInformation-page">
    <Header :name="name"></Header>
    <div class="basicInformation">
      <div class="top-view">{{ $t("basicInformation.basicInformation1") }}</div>
      <div class="basicInformation-list">
        <div class="basicInformation-item">
          <div class="basicInformation-name">{{ $t("basicInformation.basicInformation2") }}</div>
          <div class="basicInformation-text">{{[userInfo.userType,$i18n.locale]|userType}}</div>
        </div>
        <div class="basicInformation-item">
          <div class="basicInformation-name">{{ $t("basicInformation.basicInformation3") }}</div>
          <div class="basicInformation-text">{{userInfo.userFullName}}</div>
        </div>
        <div class="basicInformation-item">
          <div class="basicInformation-name">{{ $t("basicInformation.basicInformation4") }}</div>
          <div class="basicInformation-text">{{ $t("basicInformation.basicInformation5") }}</div>
        </div>
        <div class="basicInformation-item">
          <div class="basicInformation-name">{{ $t("basicInformation.basicInformation6") }}</div>
          <div class="basicInformation-text">{{userInfo.created}}</div>
        </div>
        <div class="basicInformation-item">
          <div class="basicInformation-name">{{ $t("basicInformation.basicInformation7") }}</div>
          <div class="basicInformation-text">{{userInfo.publicKey}}</div>
        </div>
        <div class="basicInformation-item">
          <div class="basicInformation-name">{{ $t("basicInformation.basicInformation8") }}</div>
          <div class="basicInformation-text">{{userInfo.userAddress}}</div>
        </div>          
      </div>
      <div class="key-btn" @click="keyZzc = true">{{ $t("basicInformation.basicInformation9") }}</div>

    </div>

    <div class="key-zzc" v-show="keyZzc">
      <div class="keyBox">
        <div class="keyBox-tit">{{ $t("basicInformation.basicInformation9") }}</div>
        <p>{{ $t("basicInformation.basicInformation10") }}</p>
        <div class="public-key">
          <textarea :placeholder="$t('basicInformation.basicInformation11')" v-model="userPublicKey"></textarea>
        </div>
        <p>{{ $t("basicInformation.basicInformation12") }}</p>
        <div class="public-key">
          <textarea :placeholder="$t('basicInformation.basicInformation13')" v-model="userPrivateKey"></textarea>
        </div>
        <p>{{ $t("basicInformation.basicInformation14") }}</p>
        <div class="keyBox-btn">
          <div class="verify" @click="verifyKey()">{{ $t("basicInformation.basicInformation15") }}</div>
          <div class="cancel"  @click="keyZzc = false">{{ $t("basicInformation.basicInformation16") }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Header from "../../components/header/index";
import { Toast } from "mint-ui";
export default {
  data () {
    return {
      name:this.$t('leftNav.leftNav12'),
      keyZzc:false,
      userPublicKey:null,
      userPrivateKey:null,
      userInfo:{},      
    }
  },
  watch: {
    keyZzc(val){
      if(!val){
        this.userPrivateKey=null
      }
    }
  },
  filters: {
    userType([key,lang]){
      switch (key) {
        case '1':
        if(lang=='en'){
            return 'Personal'
          }
          return '普通用户'
          break;
        case '2':
        if(lang=='en'){
            return 'Merchant'
          }
          return '商户'
          break;      
        default:
        if(lang=='en'){
            return 'Unkonw'
          }
          return '未知'
          break;
      }
    }
  },
  methods: {    
    init(){
      let p={}
      this.axios
        .post(`${this.api.baseURL}/me/userInfo`, p)
        .then(res => {
          if(res.data.success){
            this.userInfo = res.data.data.userInfo
            this.userPublicKey = this.userInfo.publicKey
          }
        });
    },
    verifyKey(){
      if(this.userPublicKey==null||this.userPublicKey==''){
        Toast("公钥不能为空");
        return
      }
      if(this.userPrivateKey==null||this.userPrivateKey==''){
        Toast("私钥不能为空");
        return
      }      
      let p={
        publicKey:this.userPublicKey,
        privateKey:this.userPrivateKey
      }
      this.axios
        .post(`${this.api.baseURL}/me/keyVerify`, p)
        .then(res => {
          if(res.data.success){
            let result = res.data.data.result
            if(result==-1){
              Toast("公私钥不匹配，校验失败");
            }
            if(result==1){
              Toast("公私钥匹配成功");
            }            
          }
        });      
    }
  },
  created () {
    this.init()
  },
  components: {
    Header,
  }
}
</script>
<style lang="stylus">
@import '../../assets/styles/mixins.styl';

.basicInformation-page {
  margin-top:px2rem(88px);
  width: 100%;
  height: 100%;
  background-color: #fff;

  .basicInformation {
    padding: 0 px2rem(20px);
    width: 100%;

    .top-view {
      background: white;
      padding: px2rem(30px) 0;
      font-size: px2rem(44px);
    }

    .basicInformation-list {
      width: 100%;

      .basicInformation-item {
        margin-bottom: px2rem(20px);
        width: 100%;
        overflow: hidden;

        &:after {
          display: block;
          clear: both;
          content: ' ';
        }

        .basicInformation-name {
          float: left;
          width: 22%;
          font-size: px2rem(28px);
          font-weight: bold;
        }

        .basicInformation-text {
          float: left;
          width: 75%;
          font-size: px2rem(24px);
          word-break: break-all;
        }
      }
    }

    .key-btn {
      margin-top: px2rem(20px);
      width: px2rem(240px);
      height: px2rem(80px);
      line-height: px2rem(80px);
      text-align: center;
      font-size: px2rem(34px);
      background-color: #0984e3;
      color: #fff;
      border-radius: px2rem(12px);
      cursor: pointer;
    }

    .lately {
      padding: px2rem(20px) 0;
      width: 100%;

      .lately-login {
        font-size: px2rem(28px);
        font-weight: bold;
      }

      .lately-number {
        font-size: px2rem(24px);
      }
    }
  }

  .key-zzc {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);

    .keyBox {
      position: absolute;
      top: 50%;
      left: 50%;
      padding: px2rem(20px);
      width: 80%;
      transform: translate(-50%, -50%);
      background-color: #eee;
      border-radius: px2rem(20px);

      > p {
        font-size:px2rem(30px);
      }

      .keyBox-tit {
        padding-bottom: px2rem(20px);
        font-size: px2rem(36px);
        font-weight: bold;
      }

      .public-key {
        margin-bottom: px2rem(40px);
        width: 100%;
        height: px2rem(140px);
        background-color: #fff;
        border: 1px solid #666;

        textarea {
          padding: px2rem(20px);
          width: 100%;
          height: 100%;
          resize: none;
        }
      }

      .keyBox-btn {
        padding: 0 px2rem(60px);
        margin-top: px2rem(40px);
        width: 100%;
        height: px2rem(60px);
        line-height: px2rem(60px);
        font-size: px2rem(28px);
        display: flex;
        justify-content: space-between;

        > div {
          flex: 1;
          text-align: center;
          background-color: #0984e3;
          border-radius: px2rem(20px);
          color: #fff;
          cursor: pointer;

          &:first-child {
            margin-right: px2rem(20px);
          }
        }
      }
    }
  }
}
</style>
