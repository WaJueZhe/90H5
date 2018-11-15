<template>
  <div class="recordDetail">
    <Header :name='name'></Header>
    <scroller>
      <div class="basicInformation">
        <div>{{ $t('recordDetail.recordDetail2') }}</div>
        <div class="top-view">{{sbookInfo.tHash}}</div>
        <div class="basicInformation-list">
          <div class="basicInformation-item-time">
            <div class="basicInformation-name">{{ $t('recordDetail.recordDetail3') }}</div>
            <div class="basicInformation-text">{{[sbookInfo.bsType,$i18n.locale]|sbookTypeToName}}</div>
          </div>
          <div v-if="sbookInfo.bsType==1" class="basicInformation-item-time">
            <span class="basicInformation-name">{{ $t('recordDetail.recordDetail4') }}</span>
            <span class="basicInformation-text">{{sbookInfo.account}}</span>
          </div>

          <div v-if="sbookInfo.bsType==2" class="basicInformation-item-time">
            <span class="basicInformation-name">{{ $t('recordDetail.recordDetail5') }}</span>
            <span class="basicInformation-text">{{sbookInfo.account}}</span>
          </div>
          <div v-if="sbookInfo.bsType==2" class="basicInformation-item-time">
            <span class="basicInformation-name">{{ $t('recordDetail.recordDetail6') }}</span>
            <span class="basicInformation-text">{{sbookInfo.toAccount}}</span>
          </div>

          <div class="basicInformation-item-time">
            <div class="basicInformation-name">{{ $t('recordDetail.recordDetail7') }}</div>
            <div class="basicInformation-text">{{sbookInfo.commitTime}}</div>
          </div>
          <div class="basicInformation-item">
            <div class="basicInformation-name">{{ $t('recordDetail.recordDetail8') }}</div>
            <div class="basicInformation-text">{{sbookInfo.bsHash}}</div>
          </div>         
        </div>
        <div class="describe">
          <div class="business-msg">
            <i class="iconfont icon-gantanhao"></i>
            <span>{{ $t('recordDetail.recordDetail9') }}</span>
            <span @click="dateApply()" class="apply">{{ $t('recordDetail.recordDetail10') }}</span>
          </div>
        </div>

        <div v-if="isDataOwner" class="message">
          <div class="msg">{{ $t('recordDetail.recordDetail11') }}</div>
          <pre class="text">{{bs_data}}</pre>
        </div>

        <div>{{ $t('recordDetail.recordDetail12') }}</div>
        <div class="basicInformation-list">
          <div class="basicInformation-item">
            <div class="basicInformation-name">{{ $t('recordDetail.recordDetail13') }}</div>
            <div class="basicInformation-text">{{sbookInfo.bHash}}</div>
          </div>
          <div class="basicInformation-item-time">
            <div class="basicInformation-name">{{ $t('recordDetail.recordDetail14') }}</div>
            <div class="basicInformation-text"><router-link style="color:#10ade4;" :to="{path:'/blockDetail', query:{bHeight:sbookInfo.bHeight}}">{{sbookInfo.bHeight}}</router-link></div>
          </div>
          <div class="basicInformation-item-time">
            <div class="basicInformation-name">{{ $t('recordDetail.recordDetail15') }}</div>
            <div class="basicInformation-text">{{sbookInfo.bTime}}</div>
          </div>        
        </div>
      </div>
    </scroller>
  </div>
</template>
<script>
import { Toast } from "mint-ui";
import Header from "../../components/header/index";
export default {
  data() {
    return {
      name: this.$t('recordDetail.recordDetail1'),
      hash: "",
      assetType: "",
      sbookInfo: {},
      isDataOwner:false,
      bs_data:null,
    };
  },
  filters: {
    splitHash(val) {
      let temp = String(val);
      temp = temp.substring(0, 20) + "...";
      return temp;
    },      
    sbookTypeToName([val,lang]){
      switch (val) {
        case "1":
        if(lang=='en'){
            return 'USER INFO'
          }
          return "会员更新"
          break;
        case "2":
        if(lang=='en'){
            return 'BUSINESS'
          }
          return "会员交易"
          break;                   
        default:
          return null
          break;
      }
    }
  },
  methods: {
    init() {
      let p = {
        tHash: this.hash,
        userAccount:sessionStorage.getItem('account')
      };
      this.axios
        .post(`${this.api.baseURL}/bcSbookLog/findByHash`, p)
        .then(res => {
          console.log(res)
          if (res.data.success) {
            this.sbookInfo = res.data.data.result
            this.bs_data = res.data.data.bs_data
            this.isDataOwner = res.data.data.isDataOwner
          }
        });
    },
    dateApply(){
      //校验是否已经登陆
      let token = sessionStorage.getItem('accessToken')
      if(token==null||token==''){
        Toast('需登录之后才能提交申请')
        return
      }


      let p = {
        t_hash: this.hash,
        type:'2'
      };
      this.axios
        .post(`${this.api.baseURL}/bsCheckApply/newCheckApply`, p)
        .then(res => {
          if (res.data.success) {
            Toast('提交成功，在个人中心查看申请反馈情况')
          }else{
            Toast(res.data.message)           
          }
        });

    }

  },
  created() {
    this.hash = this.$route.query.hash;
    this.init();
  },
  components: {
    Header
  }
};
</script>
<style lang="stylus">
@import '../../assets/styles/mixins.styl';

.recordDetail {
  margin-top:px2rem(90px);
  width: 100%;
  height: 100%;
  background: #f8f8f5;

  > ._v-container > ._v-content {
    padding-bottom: px2rem(90px);
  }

  .basicInformation {
    padding: px2rem(20px);
    width: 100%;
    background-color: #fff;

    .title {
      padding-bottom: px2rem(40px);
      font-size: px2rem(36px);
      font-weight:bold
      color:#000;
      word-break: break-all; 
    }

    .top-view {
      background: white;
      width :100%;
      padding: px2rem(30px) 0;
      font-size: px2rem(30px);
      word-break:break-all;
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
          width: 25%;
          font-size: px2rem(28px);
          font-weight: bold;
        }

        .basicInformation-text {
          float: left;
          width: 71%;
          font-size: px2rem(24px);
          word-break: break-all;
        }
      }

      .basicInformation-item-time {
        margin-bottom: px2rem(20px);
        width: 100%;
        height:px2rem(40px);
        line-height:px2rem(40px);
        overflow: hidden;

        &:after {
          display: block;
          clear: both;
          content: ' ';
        }

        .basicInformation-name {
          float: left;
          width: 28%;
          font-size: px2rem(28px);
          font-weight: bold;
        }

        .basicInformation-text {
          float: left;
          width: 68%;
          font-size: px2rem(24px);
          word-break: break-all;

          > a  {
            display:block;
            color:blue;
          }
        }
      }
    }

    .describe {
        margin-bottom: px2rem(20px);
        width: 100%;
        height: 100%;

        .apply{
          color: #10ade4;
          cursor: pointer;
        }

        .business-msg {
          margin-top: px2rem(20px);
          width: 100%;
          font-size: px2rem(24px);

          > a {
            color: #10ade4;
          }
        }
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

  .message {
    padding: px2rem(30px) px2rem(20px);
    margin-top: px2rem(20px);
    width: 100%;
    background-color: #fff;

    .msg {
      padding-bottom: px2rem(10px);
      font-size: px2rem(34px);
      color: #000;
    }

    .text {
      font-size: px2rem(30px);
    }
  }
}
</style>
