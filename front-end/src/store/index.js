import Vue from 'vue';
import Vuex from 'vuex';
import undoRedoPlugin from './plugins/index';
import editor from './modules/editor';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {

  },
  mutations: {

  },
  actions: {

  },
  modules: {
    editor
  },
  plugins: [undoRedoPlugin]
});
