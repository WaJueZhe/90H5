<template>
  <div class="about_us">
    <Header :name="name"></Header>
    <scroller>
      <div class="info">
        <div class="img">
          <img src="../../../assets/img/20180628141610.png" alt="" />
        </div>
        <div>银川久零电子商务有限公司，久零网O2O项目，掘发源于杭州，夯基础在银川，创发展于全国。项目首期投资三亿元人民币，以线上线下无缝连接的O2O模式经营。</div>
        <div>银川作为首个试点城市及项目孵化基地，办公区位于宁夏电商谷三楼（西夏古城），面积800多平米，公司员工140多人。西夏万达体验店面积600多平方米，于2015年10月1日开始试营业。12个月，久零网会员注册35万名，会员消费35万人次65万笔，平台交易总额11.17亿元，单店营业额9284万元。</div>
        <div>久零网立足老百姓刚性需求，强手联合国美电器、中国电信、中国移动、招商银行等五百强企业，以及各地衣食住行玩乐购等行业佼佼者，依托互联网平台和线下体验店，真正让老百姓一笔钱当两笔钱用，提升生活品质。 久零网，共建大商业文明生态圈。</div>
        <div>公司组织机构及职能简介 运营中心：下设运营部、技术部和客服岗，主要职能是提供平台技术支持，协助联盟商及各地代理进行线上业务开展及新媒体的宣传推广。 行政中心：下设综合部、人事部、财务部，是公司重要的服务管理部门，主要职能是提供充足的人力、物力、财力支持，确保久零网的良性运转。 </div>
        <div>供应中心：下设采购部、生产部、物流部和综合岗，主要职能是全面负责久零网货品开发与生产供应，并提供强大物流保障。 </div>
        <div>招商部：体验店、仓储部，主要职能是服务会员联盟商家及二级代理</div>
      </div>
    </scroller>
  </div>
</template>
<script>
import Header from "../../../components/header/index";
export default {
  data () {
    return {
      name:'关于我们',
    }
  },
  components: {
    Header,
  }
}
</script>
<style lang="stylus">
@import '../../../assets/styles/mixins.styl';

.about_us {
  width: 100%;
  height: 100%;
  background-color: #f8f8f5;

  ._v-container>._v-content {
    padding-bottom:px2rem(100px);
  }

  .info {
    padding: px2rem(30px) px2rem(24px);
    margin-top:px2rem(88px);
    width:100%;
    box-sizing: border-box;

    .img {
      margin-bottom: px2rem(26px);
      width: 100%;
      height: px2rem(300px);
      
      > img {
        width:100%;
      }
    }

    > div {
      margin-bottom: px2rem(48px);
      font-size: px2rem(28px);
      color: #666666;
    }
  }
}
</style>
