<template>
  <div class="blockDetail-page">
    <Header :name='name'></Header>
    <scroller>
      <div class="basicInformation">
        <div>{{ $t('BlockDetail.BlockDetail12') }}</div>
        <div class="top-view">{{bHash}}</div>
        <div class="basicInformation-list">
          <div class="basicInformation-item-time">
            <div class="basicInformation-name">{{ $t('BlockDetail.BlockDetail2') }}</div>
            <div class="basicInformation-text">{{bHeight}}</div>
          </div>
          <div class="basicInformation-item-time">
            <span class="basicInformation-name">{{ $t('BlockDetail.BlockDetail3') }}</span>
            <span class="basicInformation-text">{{bTime}}</span>
          </div>
          <div class="basicInformation-item">
            <div class="basicInformation-name">{{ $t('BlockDetail.BlockDetail4') }}</div>
            <div class="basicInformation-text">{{bPrevHash}}</div>
          </div>
          <div class="basicInformation-item-time">
            <div class="basicInformation-name">{{ $t('BlockDetail.BlockDetail5') }}</div>
            <div class="basicInformation-text">{{dtlCount}}</div>
          </div>        
        </div>

        <div>{{ $t('BlockDetail.BlockDetail7') }}</div>

        <div class="block-list" v-for="(item,index) in blockList" :key="index">
          <div class="block-item">
            <div class="block-name">{{ $t('BlockDetail.BlockDetail8') }}</div>
            <div class="block-text">                  
              <router-link style="color:#10ade4;" :to="{path:'/recordDetail', query:{hash:item.tHash}}">
                    {{item.tHash|splitHash}}
              </router-link></div>
          </div>
          <div class="block-item-time">
            <div class="block-name">{{ $t('BlockDetail.BlockDetail9') }}</div>
            <div class="block-text">{{[item.bsType,$i18n.locale]|sbookTypeToName}}</div>
          </div>
          <div class="block-item">
            <div class="block-name">{{ $t('BlockDetail.BlockDetail10') }}</div>
            <div v-if="$i18n.locale=='zh'">
              <div class="block-text" v-if="item.bsType==1">用户{{item.account|splitHash}}资料更新</div>
              <div class="block-text" v-if="item.bsType==2">用户{{item.account|splitHash}}与{{item.toAccount|splitHash}}发生交易</div>
            </div>
            <div v-if="$i18n.locale=='en'">
              <div class="block-text" v-if="item.bsType==1">User {{item.account|splitHash}} upload info</div>
              <div class="block-text" v-if="item.bsType==2">User {{item.account|splitHash}} and {{item.toAccount|splitHash}} have a deal</div>
            </div>
          </div>
          <div class="block-item-time">
            <div class="block-name">{{ $t('BlockDetail.BlockDetail11') }}</div>
            <div class="block-text">{{item.created}}</div>
          </div>        
        </div>

      </div>
    </scroller>
  </div>
</template>
<script>
import Header from "../../components/header/index";
export default {
  data() {
    return {
      name: this.$t('BlockDetail.BlockDetail1'),
      blockList: [],
      bHash:null,
      bHeight:null,
      bTime:null,
      bPrevHash:null,
      dtlCount:null
    };
  },
  filters: {

    splitHash(val){
      let temp = String(val);
      temp = temp.substring(0,20)+"...";
      return temp;
    },
    transTypeToName([val,lang]){
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
    },
    getDateDiff(dateTimeStamp){
      dateTimeStamp = String(dateTimeStamp);
      dateTimeStamp = Date.parse(dateTimeStamp.replace(/-/gi,"/"));
      var minute = 1000 * 60;
      var hour = minute * 60;
      var day = hour * 24;
      var halfamonth = day * 15;
      var month = day * 30;
      var now = new Date().getTime();
      var diffValue = now - dateTimeStamp;
      if(diffValue < 0){return;}
      var monthC =diffValue/month;
      var weekC =diffValue/(7*day);
      var dayC =diffValue/day;
      var hourC =diffValue/hour;
      var minC =diffValue/minute;
      let result = "";
      if(monthC>=1){
        result="" + parseInt(monthC) + "月前";
      }
      else if(weekC>=1){
        result="" + parseInt(weekC) + "周前";
      }
      else if(dayC>=1){
        result=""+ parseInt(dayC) +"天前";
      }
      else if(hourC>=1){
        result=""+ parseInt(hourC) +"小时前";
      }
      else if(minC>=1){
        result=""+ parseInt(minC) +"分钟前";
      }else
      result="刚刚";
      return result;
    }   
  },
  methods: {
    init() {
      this.loading = true;
      let p = {
        bHeight: this.bHeight
      };
      this.axios
        .post(`${this.api.baseURL}/bcSbookLog/findByBlock`, p)
        .then(res => {
          console.log(res)
          this.loading = false;
          if (res.data.success) {
            this.blockList = res.data.data.list
            this.bHash = this.blockList[0].bHash
            this.bHeight = this.blockList[0].bHeight
            this.bTime = this.blockList[0].bTime
            this.bPrevHash = this.blockList[0].bPrevHash
            this.dtlCount = this.blockList.length;
          }
        });
    }
  },
  created() {
    this.bHeight = this.$route.query.bHeight;
    this.init();
  },
  components: {
    Header
  }
};
</script>
<style lang="stylus">
@import '../../assets/styles/mixins.styl';

.blockDetail-page {
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

    .block-list {
      padding:px2rem(20px);
      width: 100%;
      background-color:#eee;
      border-radius:px2rem(10px);

      .block-item {
        margin-bottom: px2rem(20px);
        width: 100%;
        overflow: hidden;

        &:after {
          display: block;
          clear: both;
          content: ' ';
        }

        .block-name {
          float: left;
          width: 22%;
          font-size: px2rem(28px);
          font-weight: bold;
        }

        .block-text {
          float: left;
          width: 75%;
          font-size: px2rem(24px);
          word-break: break-all;
        }
      }

      .block-item-time {
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

        .block-name {
          float: left;
          width: 22%;
          font-size: px2rem(28px);
          font-weight: bold;
        }

        .block-text {
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
