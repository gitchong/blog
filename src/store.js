import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const types = {
  LOADING_TOGGLE: 'LOADING_TOGGLE',
};

/* eslint-disable no-param-reassign */
export default new Vuex.Store({
  state: {
    loading: false,
  },
  mutations: {
    [types.LOADING_TOGGLE](store, action) {
      store.loading = action;
    },
  },
  actions: {
    loadingClose({ commit }) {
      commit(types.LOADING_TOGGLE, false);
    },
    loadingOpen({ commit }) {
      commit(types.LOADING_TOGGLE, true);
    },
  },
});
