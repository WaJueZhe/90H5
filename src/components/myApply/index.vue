<template>
  <div class="numberAsset-page">

    <div class="numberAsset-list" v-for="(item, index) in list" :key="index">
      <div class="numberAsset-item">
        <div class="numberAsset-item-info">
          <div v-if="activeIndex==1" class="info-name"> 
            <span>[{{item.asset_type|assetTypeName}}]</span> 
            <router-link :to="{path:'/transDetail', query:{hash:item.tHash}}">{{item.tHash}}</router-link>
          </div>
          <div v-if="activeIndex==2" class="info-name"> 
            <span>[{{item.bsType|sbookTypeToName}}]</span> 
            <router-link :to="{path:'/recordDetail', query:{hash:item.tHash}}">{{item.tHash}}</router-link>
          </div>          
          <div class="info-state" v-if="!item.applyResult">{{ $t("myApplyFor.myApplyFor5") }}</div>
          <div class="info-state" style="color:green" v-if="item.applyResult=='1'">{{ $t("myApplyFor.myApplyFor6") }}</div>
          <div class="info-state" style="color:red" v-if="item.applyResult=='-1'">{{ $t("myApplyFor.myApplyFor7") }}</div>
          <div class="info-state" style="color:#8B4726" v-if="item.applyResult=='99'">{{ $t("myApplyFor.myApplyFor8") }}</div>
        </div>
        <div class="numberAsset-item-info">
          <div class="info-time">{{item.created}}</div>
        </div>
        <div @click="cancelApply(item.id)" v-if="!item.applyResult" class="numberAsset-btn">{{ $t("myApplyFor.myApplyFor9") }}</div>
      </div>
    </div>
  </div>
</template>
<script>
import { Toast } from "mint-ui";
export default {
  props: ["list","activeIndex"],
  data () {
    return {
      
    }
  },
  filters:{
    sbookTypeToName(val){
      switch (val) {
        case "1":
          return "会员更新"
          break;
        case "2":
          return "会员交易"
          break;                   
        default:
          return null
          break;
      }
    },    
    assetTypeName(key){
      switch (key) {
        case '1':
          return '零购券'
          break;
        case '2':
          return '久零券'
          break;  
        case '3':
          return '购物券'
          break;          
          
        default:
          return '未知券种'
          break;
      }
    }
  },
  methods:{

    abolish(){
      this.hooltip.isShow = false
      this.$emit('confirm');
    },
    confirm(){
      this.hooltip.isShow = false
      this.$emit('confirm');
    },  

    cancelApply(id){
      let p={
        id:id
      }
      this.axios
        .post(`${this.api.baseURL}/bsCheckApply/cancelCheckApply`, p)
        .then(res => {
          if (res.data.success) {
            Toast('申请已成功取消')
          }
        });

    }
  },    
}
</script>
<style lang="stylus">
@import '../../assets/styles/mixins.styl';

.numberAsset-page {
  width:100%;
  height:100%;
  background-color: #f8f8f5;

  ._v-container>._v-content {
    padding-bottom:px2rem(260px);
  }

  .numberAsset-list {
    padding:px2rem(20px);
    width:100%;
    height:100%;
    background-color: #fff;

    .numberAsset-item {
      padding:px2rem(20px);
      width:100%;
      background-color #eee;
      border-radius:px2rem(20px);

      .numberAsset-item-info {
        margin-bottom:px2rem(14px);
        width:100%;
        height:px2rem(40px);
        line-height:px2rem(40px);
        font-size:px2rem(28px);

        &:after {
          display:block;
          clear: both;
          content:' ';
        }

        .info-name {
          float: left;
          width:70%;
          white-space:nowrap;
          text-overflow:ellipsis;
          overflow: hidden;
          color:blue;

          > span {
            color:#000;
            font-weight:bold;
          }
        }

        .info-state {
          float: right;
          width:20%;
          text-align:center;
        }

        .info-time {
          width:100%;
        }
      }

      .numberAsset-btn {
        padding:px2rem(10px) 0;
        width:px2rem(200px);
        text-align:center;
        font-size:px2rem(28px);
        background-color:#10ade4;
        border-radius:px2rem(10px);
        color:#fff;

        .btn-agree {
          padding:px2rem(6px) px2rem(20px);
          margin-right:px2rem(30px);
          background-color:#10ade4;
          border:px2rem(2px) solid #10ade4;
          
        }

        .btn-reject {
          padding:px2rem(6px) px2rem(20px);
          background-color:#fff;
          border:px2rem(2px) solid #000;
          border-radius:px2rem(10px);
          color:#000;
        }
      }
    }
  }
}
</style>
