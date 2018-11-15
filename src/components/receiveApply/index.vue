<template>
  <div class="numberAsset-page">
    <div class="numberAsset-list">

      <div class="numberAsset-item" v-for="(item,index) in list" :key="index">
        <div class="numberAsset-item-info">
          <div class="info-people">{{ $t("receiveApply.receiveApply7") }}</div>
          <div class="info-name">{{item.applicant}}</div>
          <div class="info-state" style="color:green;padding-right:20px;" v-if="item.applyResult=='1'">{{ $t("receiveApply.receiveApply8") }}</div>
          <div class="info-state" style="color:red;padding-right:20px;" v-if="item.applyResult=='-1'">{{ $t("receiveApply.receiveApply9") }}</div>
          <div class="info-state" style="color:#8B4726;padding-right:20px;" v-if="item.applyResult=='99'">{{ $t("receiveApply.receiveApply10") }}</div>
        </div>
        <div class="numberAsset-item-info">
          <div class="info-people">{{ $t("receiveApply.receiveApply9") }}</div>
          <div class="info-name">          
            <router-link class="apply-text" style="color: #10ade4;" v-if="item.type==1" :to="{path:'transDetail/', query:{hash:item.tHash}}">
              {{item.tHash}}
            </router-link>
            <router-link class="apply-text" style="color: #10ade4;" v-if="item.type==2" :to="{path:'recordDetail/', query:{hash:item.tHash}}">
              {{item.tHash}}
            </router-link>          
          </div>
        </div>
        <div class="numberAsset-item-info">
          <div class="info-people">{{ $t("receiveApply.receiveApply10") }}</div>
          <div class="info-name">{{item.created}}</div>
        </div>
        <div v-if="item.applyResult&&item.applyResult!='99'" class="numberAsset-item-info">
          <div class="info-people">{{ $t("receiveApply.receiveApply11") }}</div>
          <div class="info-name">{{item.acceptor}}</div>
        </div>
        <div v-if="item.applyResult&&item.applyResult!='99'" class="numberAsset-item-info">
          <div class="info-people">{{ $t("receiveApply.receiveApply12") }}</div>
          <div class="info-name">{{item.feedbackTime}}</div>
        </div>        


        <div v-if="!item.applyResult" class="numberAsset-btn">
          <span @click="doApply(item.id,'1')" class="btn-agree">{{ $t("receiveApply.receiveApply14") }}</span>
          <span @click="doApply(item.id,'-1')" class="btn-reject">{{ $t("receiveApply.receiveApply15") }}</span>
        </div>
      </div>


    </div>
  </div>
</template>
<script>
export default {
  props: ["list"],
  data () {
    return {
      
    }
  },
  methods: {
    abolish(){

      this.$emit('confirm');
    },
    confirm(){

      this.$emit('confirm');
    }
  }  
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
      margin-top:px2rem(20px);
      width:100%;
      background-color #eee;
      border-radius:px2rem(20px);

      &:first-child {
        margin-top:0;
      }

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

        .info-people {
          float: left;
          width:20%;
        }

        .info-name {
          float: left;
          width:58%;
          white-space:nowrap;
          text-overflow:ellipsis;
          overflow: hidden;
        }

        .info-state {
          float: right;
          width:20%;
          text-align:right;
        }
      }

      .numberAsset-btn {
        text-align:right;
        font-size:px2rem(28px);

        .btn-agree {
          padding:px2rem(6px) px2rem(20px);
          margin-right:px2rem(30px);
          background-color:#10ade4;
          border:px2rem(2px) solid #10ade4;
          border-radius:px2rem(10px);
          color:#fff;
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
