import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isMenuOpen: false
  },
  mutations: {
    toggleMenu(state) {
      state.isMenuOpen = !state.isMenuOpen
    }
  },
  actions: {},
  modules: {}
})