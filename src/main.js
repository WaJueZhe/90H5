// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './vuex/store.js'

import '../static/sprites/sprite.css'
import './css/index.css'
import axios from 'axios'
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css';

import './js/flexible'
import './assets/styles/mixins.styl'

import apiconf from './js/apiConfigs.js'


import 'babel-polyfill'

//引用字体图标文件
import './css/icon/iconfont.css'

import VueScroller from 'vue-scroller';
import VueI18n from 'vue-i18n';

Vue.use(VueScroller)
Vue.use(Mint);
Vue.use(VueI18n)

// 注册i18n实例并引入语言文件，文件格式等下解析
const i18n = new VueI18n({
  locale: getLang(),
  messages: {
    'zh': require('@/language/zh.json'),
    'en': require('@/language/en.json')
  }
})

function getLang(){
  let lang = localStorage.getItem('LANG');
  if(lang){
    return lang;
  }else{
    return 'zh'
  }
}




Vue.config.productionTip = false
Vue.prototype.axios = axios
Vue.prototype.api = apiconf; //请求地址的配置

//  在拦截器中添加tokenid
axios.interceptors.request.use(
  config => {
      config.headers.apiToken = apiconf.apiToken;
      // 这里写死一个token，然后在这里从cookie中获取到token的值
      var token = sessionStorage.getItem('accessToken');
      if (token) {
          // 这里将token设置到headers中，header的key是Authorization，这个key值根据你的需要进行修改即可
          config.headers.accessToken = token;

      }

      return config
  },
  error => {
      return Promise.reject(error)
});

//返回拦截器
axios.interceptors.response.use((response) => {
  if (response.data.message == 'invalid apiToken') {
    console.log(response.data.message);
    alert(response.data.message);
    return;
  }

  // token 已过期，重定向到登录页面 
  if (response.data.message == 'invalid token'||response.data.message == 'invalid apiToken') {
    console.log(response.data.message);
    window.location.href = apiconf.weburl+"login";
    return;
  }


  return response;
}, function (error) {
  // Do something with response error  
  return Promise.reject(error);
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  i18n,
  components: { App },
  template: '<App/>'
})
