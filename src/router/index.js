import Vue from 'vue'
import Router from 'vue-router'

const BlockHome                 = resolve => require(['@/pages/home/blockHome'], resolve);
const BlockIndex                = resolve => require(['@/pages/home/blockIndex'], resolve);
const Trading_record            = resolve => require(['@/pages/trading_record/index'], resolve);
const Personal_center           = resolve => require(['@/pages/personal_center/index'], resolve);
const ZeroCoupon_account        = resolve => require(['@/pages/personal_center/zeroCoupon_account/index'], resolve);
const LongCoupon_account        = resolve => require(['@/pages/personal_center/longCoupon_account/index'], resolve);
const Shopping_account          = resolve => require(['@/pages/personal_center/shopping_account/index'], resolve);
const About_us                  = resolve => require(['@/pages/personal_center/about_us/index'], resolve);
const DransDetail               = resolve => require(['@/pages/home/transDetail'], resolve);
const SearchResult              = resolve => require(['@/pages/trading_record/searchResult'], resolve);
const AccountDetail             = resolve => require(['@/pages/trading_record/accountDetail'], resolve);
const Login                     = resolve => require(['@/pages/login/index'], resolve);


const Home                      = resolve => require(['@/pages/home/home'], resolve);
const Adhibition                = resolve => require(['@/pages/home/adhibition'], resolve);
const About                     = resolve => require(['@/pages/home/about'], resolve);
const PersonalCenter            = resolve => require(['@/pages/home/personalCenter'], resolve);
const MySharing                 = resolve => require(['@/pages/home/mySharing'], resolve);
const ReceiveApply              = resolve => require(['@/pages/home/receiveApply'], resolve);
const MyApply                   = resolve => require(['@/pages/home/myApply'], resolve);
const BasicInformation          = resolve => require(['@/pages/home/basicInformation'], resolve);
const RecordDetail              = resolve => require(['@/pages/home/recordDetail'], resolve);
const BlockDetail               = resolve => require(['@/pages/home/blockDetail'], resolve);
const SbookSeeMore              = resolve => require(['@/pages/home/sbookSeeMore'], resolve);
const SeeMore                   = resolve => require(['@/pages/home/seeMore'], resolve);

Vue.use(Router)

export default new Router({
  // linkActiveClass:'active',
  routes: [
    {
      path: '/', //首页
      name: 'Home',
      component: Home
    },
    {
      path: '/blockHome', //首页
      name: 'BlockHome',
      component: BlockHome
    },
    {
      path: '/blockIndex', //链上公示
      name: 'BlockIndex',
      component: BlockIndex
    },
    {
      path: '/adhibition', //应用场景
      name: 'Adhibition',
      component: Adhibition
    },
    {
      path: '/about', //关于
      name: 'About',
      component: About
    },
    {
      path: '/personalCenter', //个人中心
      name: 'PersonalCenter',
      component: PersonalCenter
    },
    {
      path: '/mySharing',//我的共享记录
      name: 'MySharing',
      component: MySharing
    },
    {
      path: '/receiveApply',//收到的申请
      name: 'ReceiveApply',
      component: ReceiveApply
    },
    {
      path: '/myApply',//我的申请
      name: 'MyApply',
      component: MyApply
    },
    {
      path: '/basicInformation',//基本资料
      name: 'BasicInformation',
      component: BasicInformation
    },
    {
      path: '/recordDetail', //记录详情
      name: 'RecordDetail',
      component: RecordDetail
    },
    {
      path: '/blockDetail', //区块详情
      name: 'BlockDetail',
      component: BlockDetail
    },
    {
      path: '/transDetail', //交易详情
      name: 'DransDetail',
      component: DransDetail
    },
    {
      path: '/trading_record', //交易记录
      name: 'Trading_record',
      component: Trading_record
    },
    {
      path: '/personal_center', //个人中心
      name: 'Personal_center',
      component: Personal_center
    },
    {
      path: '/zeroCoupon_account',//零购券账户
      name: 'ZeroCoupon_account',
      component: ZeroCoupon_account
    },
    {
      path: '/longCoupon_account',//久零券账户
      name: 'LongCoupon_account',
      component: LongCoupon_account
    },
    {
      path: '/shopping_account',//购物券账户
      name: 'Shopping_account',
      component: Shopping_account
    },
    {
      path: '/about_us',//关于我们
      name: 'About_us',
      component: About_us
    },
    {
      path: '/searchResult',//搜索结果
      name: 'SearchResult',
      component: SearchResult
    },
    {
      path: '/accountDetail',//账户详情
      name: 'AccountDetail',
      component: AccountDetail
    },
    {
      path: '/login',//登录
      name: 'Login',
      component: Login
    },
    {
      path: '/sbookSeeMore',//全部共享账本记录
      name: 'SbookSeeMore',
      component: SbookSeeMore
    },
    {
      path: '/seeMore',//全部数字资产交易
      name: 'SeeMore',
      component: SeeMore
    },
  ]
})
