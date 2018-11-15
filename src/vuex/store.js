import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state = {
  home: require("../assets/img/tab_icon_home_selected.png"),
  record: require("../assets/img/tab_icon_record_default.png"),
  mine: require('../assets/img/tab_icon_mine_default.png'),
  showIndex:1,
  account:''
}

const mutations = {

}

export default new Vuex.Store({
  state,
  mutations
})