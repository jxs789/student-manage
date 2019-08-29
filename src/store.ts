import Vue from 'vue'
import Vuex from 'vuex'

import login from './modules/login'
import charts from './modules/charts'
import visual from "./modules/visual"

Vue.use(Vuex)

export default new Vuex.Store({
  modules:{
    login,
    charts,
    visual
  }
})
