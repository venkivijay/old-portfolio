import { createStore, createLogger } from "vuex";

export default createStore({
  state: {
    isMenuOpen: false,
  },
  mutations: {
    toggleMenu(state) {
      state.isMenuOpen = !state.isMenuOpen;
    },
  },
  actions: {},
  modules: {},
  plugins: process.env.NODE_ENV !== "production" ? [createLogger()] : [],
});
