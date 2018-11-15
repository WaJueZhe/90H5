<template>
  <div class="dealDetail">
    <Header :name='name'></Header>
    <div class="basicInformation">
      <div class="title"><span>{{ $t('transDetail.transDetail2') }}</span>{{transInfo.hash}}</div>
      <div class="basicInformation-list">
        <div class="basicInformation-item-time">
          <div class="basicInformation-name">{{ $t('transDetail.transDetail3') }}</div>
          <div class="basicInformation-text">{{transInfo.amount}}</div>
        </div>
        <div class="basicInformation-item-time" v-if="transInfo.trans_type==1">
          <span class="basicInformation-name">{{ $t('transDetail.transDetail4') }}</span>
          <span class="basicInformation-text" style="color:#6199ff;">{{ $t('transDetail.transDetail5') }}</span>
        </div>
        <div class="basicInformation-item-time" v-if="transInfo.trans_type!=1">
          <span class="basicInformation-name">{{ $t('transDetail.transDetail4') }}</span>
          <span class="basicInformation-text">
            <router-link :to="{path:'/accountDetail', query:{act:transInfo.src_account}}">{{transInfo.src_account}}</router-link>
          </span>
        </div>
        <div class="basicInformation-item" v-if="transInfo.trans_type==3">
          <div class="basicInformation-name">{{ $t('transDetail.transDetail6') }}</div>
          <div class="basicInformation-text" style="color:#6199ff;">{{ $t('transDetail.transDetail7') }}</div>
        </div>
        <div class="basicInformation-item" v-if="transInfo.trans_type!=3">
          <div class="basicInformation-name">{{ $t('transDetail.transDetail6') }}</div>
          <div class="basicInformation-text">
            <router-link :to="{path:'/accountDetail', query:{act:transInfo.dst_account}}">{{transInfo.dst_account}}</router-link>
          </div>
        </div>
        <div class="basicInformation-item-time">
          <div class="basicInformation-name">{{ $t('transDetail.transDetail8') }}</div>
          <div class="basicInformation-text">{{[transInfo.trans_type,$i18n.locale]|transName}}</div>
        </div>
        <!-- <div class="basicInformation-item-time">
          <div class="basicInformation-name">{{ $t('transDetail.transDetail9') }}</div>
          <div class="basicInformation-text">{{transInfo.trans_state|stateName}}</div>
        </div> -->
        <div class="basicInformation-item-time">
          <div class="basicInformation-name">{{ $t('transDetail.transDetail10') }}</div>
          <div class="basicInformation-text">{{transInfo.trans_time}}</div>
        </div>         
      </div>
      <div class="describe" v-if="!isDataOwner">
        <div class="business-msg">
          <i class="iconfont icon-gantanhao"></i>
          <span>{{ $t('transDetail.transDetail11') }}</span>
          <span class="apply" @click="dateApply()">{{ $t('transDetail.transDetail12') }}</span>
        </div>
      </div>

    </div>
    <div class="message">
        <div v-if="isDataOwner" class="describe">{{ $t('transDetail.transDetail13') }}</div>
        <pre v-if="isDataOwner" class="text">{{bs_data}}</pre>
    </div>
  </div>
</template>
<script>
import Header from "../../components/header/index";
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      name: this.$t('transDetail.transDetail1'),
      hash: "",
      assetType: "",
      transInfo: {},
      userAccount:null,
      isDataOwner:false,      
      bs_hash: null,
      bs_data:null
    };
  },
  filters: {
    transName([val,lang]){
      switch (val) {
        case "1":
        if(lang=='en'){
            return 'ISSUE'
          }
          return "发行"
          break;
        case "2":
        if(lang=='en'){
            return 'TRANSFER'
          }
          return "转让"
          break;      
        case "3":
        if(lang=='en'){
            return 'CASH'
          }
          return "兑付"
          break;              
        default:
          return null
          break;
      }
    },
    stateName(val) {
      switch (val) {
        case "1":
          return "申请中";
          break;
        case "2":
          return "已申请";
          break;
        case "3":
          return "提交中";
          break;
        case "4":
          return "已提交";
          break;
        default:
          break;
      }
    }
  },
  methods: {
    toAccountDetail(val){
      this.$router.push({
        path:'/accountDetail', query:{act:val}
      })
    },
    init() {
      let p = {
        hash: this.hash
      };
      this.axios
        .post(`${this.api.baseURL}/bc/asset/assetIssueTransQueryByHash`, p)
        .then(res => {
          console.log(res)
          if (res.data.success) {
            this.transInfo = res.data.data.detail;
            this.assetType = res.data.data.assetType;
            this.bs_hash = this.transInfo.extra_info.bs_hash;
            if(res.data.data.isDataOwner){
              this.isDataOwner = res.data.data.isDataOwner
              this.bs_data = res.data.data.bs_data
            }
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


      this.loading = true;
      let p = {
        t_hash: this.hash,
        type:'1'
      };
      this.axios
        .post(`${this.api.baseURL}/bsCheckApply/newCheckApply`, p)
        .then(res => {
          this.loading = false;
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
    console.log(this.$route.query.hash)
    this.init();
  },
  components: {
    Header
  }
};
</script>
<style lang="stylus">
@import '../../assets/styles/mixins.styl';

.dealDetail {
  margin-top:px2rem(88px);
  width: 100%;
  height: 100%;
  background: #f8f8f5;

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
          width: 22%;
          font-size: px2rem(28px);
          font-weight: bold;
        }

        .basicInformation-text {
          float: left;
          width: 75%;
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
      font-size: px2rem(24px);
      color: #000;
    }

    .text {
      font-size: px2rem(30px);
    }
  }
}
</style>
