import Vue from 'vue'
import Vuex from 'vuex'

import users from './modules/users'
import searchStr from './modules/searchStr'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    users,
    searchStr
  }
})
