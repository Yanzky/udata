import Vue from 'vue'
import Vuex from 'vuex'
import definition from './modules/definition'
import keyoperation from './modules/keyoperation'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    definition,
    keyoperation
  }
})

export default store
