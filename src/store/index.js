import Vue from 'vue'
import Vuex from 'vuex'
import test from './test'
import getters from './getters'

Vue.use(Vuex)

export default new Vuex.Store({
  getters,
  modules: {
    test
  }
})
