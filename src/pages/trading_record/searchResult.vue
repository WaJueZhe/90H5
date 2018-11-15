<template>
  <div class="searchResult">
    <Header :name="name"></Header>
    <div class="search-page">
      <div class="mui-bar">
        <div class="search">
          <input type="text" :placeholder="$t('searchResult.searchResult1') + '/' + $t('searchResult.searchResult2')" v-model="searchStr">
          <img src="../../assets/img/nav_icon_search.png" alt="">
          <span class="seek" @click="search">{{ $t('searchResult.searchResult3') }}</span>
        </div>
      </div>
    </div>

    <scroller>
      <div class="main">
        <!-- <div class="the_latest_deals">
          <div class="title" v-if="transList.length!=0">交易相关</div>
          <ul class="group">
            <li class="group-item" v-for="(item,index) in transList" :key="index">
              <div class="haxi" @click="toTransDetail(item.transHash)" v-html="keyWordShow(item.transHash)"></div>
              <div class="shift-to">
                <i class="iconfont icon-shouru"></i>
                <span class="text" v-if="!item.srcAccount">没有输入(新发行的资产)</span>
                <span class="text" v-if="item.srcAccount"  @click="toAccountDetail(item.srcAccount)" v-html="keyWordShow(item.srcAccount)"></span>
              </div>
              <div class="shift-to">
                <i class="iconfont icon-zhichu"></i>
                <span class="text" v-if="!item.dstAccount">没有输出(资产兑付)</span>
                <span class="text" v-if="item.dstAccount"  @click="toAccountDetail(item.dstAccount)" v-html="keyWordShow(item.dstAccount)"></span>
              </div>
              <div class="info">
                <p>交易量  {{item.amount}}</p>
                <div class="time">{{item.created|getDateDiff}}</div>
              </div>
            </li>
          </ul>
        </div>

        <div class="the_latest_deals">
          <div class="title" v-if="accountList.length!=0">账户相关</div>
          <ul class="group">
            <li class="group-item" v-for="(item,idex) in accountList" :key="idex">
              <div class="haxi" v-if="item.accountAddress" @click="toAccountDetail(item.accountAddress)"  v-html="keyWordShow(item.accountAddress)"></div>
              <div class="shift-to">
                <span class="account">账户类型：</span>
                <span class="text">{{item.accountType|accountName}}账户</span>
              </div>
              <div class="shift-to">
                <span class="account">创建时间：</span>
                <span class="text">{{item.created|getDateDiff}}</span>
              </div>
            </li>
          </ul>
        </div> -->
        <!-- 数字资产最新交易 -->
        <div class="new-deal" v-if="transList.length>0">
          <div class="deal-title">{{ $t('searchResult.searchResult4') }}</div>
          <div class="deal-group">
            <div class="deal-item" v-for="(item, index) in transList" :key="index">
              <div class="deal-haxi">
                <router-link :to="{path:'/transDetail', query:{hash:item.transHash}}">
                  {{item.transHash}}
                </router-link>
              </div>
              <div class="deal-type">{{ $t('searchResult.searchResult5') }}{{[item.transType,$i18n.locale]|transTypeToName}}</div>
              <div class="deal-money">
                <div class="deal-money-l">
                  <span>{{ $t('searchResult.searchResult6') }}</span>
                  <span class="deal-money-num">{{item.amount}}</span>
                </div>
                <div class="deal-money-r">{{item.created}}</div>
              </div>
            </div>
          </div>
        </div>
        <!-- 共享账本最新记录 -->
        <div class="new-record" v-if="sbookList.length>0">
          <div class="record-title">{{ $t('searchResult.searchResult7') }}</div>
          <div class="record-group">
            <div class="record-item" v-for="(item,index) in sbookList" :key="index">
              <div class="record-haxi">
                <router-link :to="{ path:'/recordDetail', query:{hash:item.tHash} }">
                  {{item.tHash}}
                </router-link>
              </div>
              <div class="record-money">
                <div class="record-money-l">
                  <span>{{ $t('searchResult.searchResult6') }}</span>
                  <span>{{[item.bsType,$i18n.locale]|sbookTypeToName}}</span>
                </div>
                <div class="record-money-r">{{item.created}}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </scroller>

    <!-- <div v-if="accountList.length==0&&transList.length==0" style="margin-top:20px">
      <p style="font-size: 14px;line-height: 20px;">没有找到与"<span style="color:red">{{resultStr}}</span>"相关的数据，请确认输入内容是否有误。</p>
    </div> -->


  </div>
</template>
<script>
import Header from '../../components/header/index'
import { Toast } from 'mint-ui';
export default {
  data () {
    return {
      name:this.$t('searchResult.searchResult8'),
      searchStr:'',
      resultStr:'',
      sbookList:[],
      transList:[]
    }
  },
  filters: {
    getDateDiff([dateTimeStamp,locale]) {
      dateTimeStamp = String(dateTimeStamp);
      dateTimeStamp = Date.parse(dateTimeStamp.replace(/-/gi, "/"));
      var minute = 1000 * 60;
      var hour = minute * 60;
      var day = hour * 24;
      var halfamonth = day * 15;
      var month = day * 30;
      var now = new Date().getTime();
      var diffValue = now - dateTimeStamp;
      if (diffValue < 0) {
        return;
      }
      var monthC = diffValue / month;
      var weekC = diffValue / (7 * day);
      var dayC = diffValue / day;
      var hourC = diffValue / hour;
      var minC = diffValue / minute;
      let result = "";
      if (monthC >= 1) {
        result = "" + parseInt(monthC) + "月前";
        if(locale=='en'){
          result = "" + parseInt(monthC) + "month ago";
        }
      } else if (weekC >= 1) {
        result = "" + parseInt(weekC) + "周前";
        if(locale=='en'){
          result = "" + parseInt(weekC) + "weeks ago";
        }
      } else if (dayC >= 1) {
        result = "" + parseInt(dayC) + "天前";
        if(locale=='en'){
          result = "" + parseInt(dayC) + "days ago";
        }
      } else if (hourC >= 1) {
        result = "" + parseInt(hourC) + "小时前";
        if(locale=='en'){
          result = "" + parseInt(hourC) + "hours ago";
        }
      } else if (minC >= 1) {
        result = "" + parseInt(minC) + "分钟前";
        if(locale=='en'){
          result = "" + parseInt(minC) + "mins ago";
        }
      } else {
        result = "刚刚";
        if(locale=='en'){
          result = "moment";
        }
      }
      return result;
    },
    accountName([val,lang]){
      switch (val) {
        case "1":
        if(lang=='en'){
            return 'LG'
          }
          return "零购券"
          break;
        case "2":
        if(lang=='en'){
            return 'JL'
          }
          return "久零券"
          break;      
        default:
        if(lang=='en'){
            return 'Unkonw'
          }
          return "未知"
          break;
      }
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
    }
  },
  methods: {
    toTransDetail(val){
      this.$router.push({
        path:'/transDetail', query:{hash:val}
      })
    },
    toAccountDetail(val){
      this.$router.push({
        path:'/accountDetail', query:{act:val}
      })
    },
    keyWordShow(val){
      if (!val) {
          return '';
      }
      if(this.resultStr && this.resultStr!=''){
        // 匹配关键字正则
        let replaceReg = new RegExp(this.resultStr, 'g');

        // 高亮替换v-html值
        let replaceString = '<span class="search-text">' + this.resultStr + '</span>';

        val = val.replace(replaceReg, replaceString);

      }
      return val;
    },
    search(){
      if(this.searchStr==''||this.searchStr==null){
        Toast('请输入搜索关键字')
        return
      }
      let p = {
        "searchStr":this.searchStr
      }
      this.axios
        .post(`${this.api.baseURL}/bcAssetLog/searchByKeyWord`, p)
        .then(res => {
          console.log(res)
          this.resultStr = this.searchStr
          if (res.data.success) {
            if(res.data.data.sbookList !=null && res.data.data.sbookList.length>0){
              this.sbookList = res.data.data.sbookList;
            }else{
              this.sbookList = [];
            }
            if(res.data.data.transList !=null && res.data.data.transList.length>0){
              this.transList = res.data.data.transList;
            }else{
              this.transList=[];
            }
            
          }
        });
    }
  },
  created () {
    this.searchStr = this.$route.query.searchStr;
    this.search();
  },
  components: {
    Header,
  }
}
</script>
<style lang="stylus">
@import '../../assets/styles/mixins.styl';

.searchResult {
  width: 100%;
  height: 100%;
  background: #f8f8f5;

  .search-page {
    height: px2rem(88px);

    .mui-bar {
      z-index: 9999;
      padding: 0 px2rem(26px);
      width: 100%;
      height: px2rem(88px);
      line-height: px2rem(88px);
      color: #fff;
      background-color: #252533;

      .search {
        position: relative;
        width: 100%;
        height: 100%;

        > input {
          position: absolute;
          top: 50%;
          left: 0;
          transform: translateY(-50%);
          padding-left: px2rem(80px);
          width: 83%;
          height: px2rem(60px);
          border: none;
          border-radius: px2rem(30px);
          background-color: #fff;
        }

        > img {
          position: absolute;
          top: 50%;
          left: px2rem(30px);
          transform: translateY(-50%);
          width: px2rem(27px);
        }

        .seek {
          position: absolute;
          right:0;
          width:15%;
          font-size:px2rem(28px);
          text-align:center;
        }
      }
    }
  }

  .main {
    padding-top:px2rem(100px);
    padding-bottom:px2rem(20px);
    width:100%;

    .the_latest_deals {
      padding: 0 px2rem(26px);
      margin-bottom:px2rem(40px);
      background: #fff;
      box-sizing: border-box;

      .title {
        padding-top:px2rem(40px);
        border-bottom:1px solid #dadada;
      }

      .group {
        width: 100%;

        .group-item {
          padding: px2rem(20px) 0;
          width: 100%;
          border-bottom: px2rem(2px) solid #dadada;
          box-sizing: border-box;

          .haxi {
            width: 100%;
            font-size: px2rem(28px);
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
          }

          // 搜索字体高亮
          .search-text {
            color:red;
            font-weight:bold;
          }

          .shift-to {
            width:100%;

            > i {
              font-size:px2rem(40px);
              font-weight:bold;
              vertical-align: middle;
            }

            .text {
              font-size:px2rem(28px);
              font-weight: bold;
              vertical-align:middle
            }

            .account {
              font-size:px2rem(28px);
            }
          }

          .info {
            overflow: hidden;
            margin-top: px2rem(18px);

            &:after {
              display:block;
              clear: both;
              content:' ';
            }

            > p {
              float: left;
              font-size: px2rem(26px);
            }

            .time {
              float: left;
              margin-left: px2rem(64px);
              font-size: px2rem(28px);
              font-weight: bold;
            }
          }
        }
      }
    }

    .new-deal {
      padding-top:px2rem(40px);
      width:100%;

      .deal-title {
        padding:0 px2rem(40px);
        width:100%;
        font-size:px2rem(44px);
      }

      .deal-group {
        padding:0 px2rem(20px);
        margin-top:px2rem(20px);
        width:100%;
        height:100%;

        .deal-item {
          padding:px2rem(20px);
          margin-top:px2rem(20px);
          width:100%;
          border-radius:px2rem(20px);
          font-size:px2rem(28px);
          background-color: #eee;
          box-shadow: px2rem(2px) px2rem(4px) px2rem(6px) px2rem(4px) #ccc;

          .deal-haxi {
            width:100%;
            font-size:px2rem(30px);
            white-space:nowrap;
            text-overflow:ellipsis;
            overflow: hidden;

            > a {
              color:#0984e3;
            }
          }

          .deal-type {
            margin-top:px2rem(20px);
          }

          .deal-money {
            margin-top:px2rem(20px);
            width:100%;
            height:px2rem(46px);
            line-height:px2rem(46px);
            display:flex;
            justify-content:space-between;

            .deal-money-l {
              flex:1;

              > span {
                vertical-align:middle;
              }

              .deal-money-num {
                font-size:px2rem(40px);
              }
            }
            .deal-money-r {
              flex:1;
            }
          }
        }
      }
    }

    .new-record {
      padding:px2rem(80px) 0;
      width:100%;

      .record-title {
        padding:0 px2rem(40px);
        width:100%;
        font-size:px2rem(44px);
      }

      .record-group {
        padding:0 px2rem(20px);
        margin-top:px2rem(20px);
        width:100%;
        height:100%;

        .record-item {
          padding:px2rem(20px);
          margin-top:px2rem(20px);
          width:100%;
          border-radius:px2rem(20px);
          font-size:px2rem(28px);
          background-color: #eee;
          box-shadow: 1px 2px 3px 2px #ccc;

          .record-haxi {
            width:100%;
            font-size:px2rem(30px);
            white-space:nowrap;
            text-overflow:ellipsis;
            overflow: hidden;

            > a {
              color:#0984e3;
            }
          }

          .record-money {
            margin-top:px2rem(20px);
            width:100%;
            height:px2rem(46px);
            line-height:px2rem(46px);
            display:flex;
            justify-content:space-between;

            .record-money-l {
              flex:1;

              > span {
                vertical-align:middle;
              }
            }
            .record-money-r {
              flex:1;
            }
          }
        }
      }
    }
  }  
}
</style>
