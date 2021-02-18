import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

//  データストア
var ContentStore = new Vuex.Store({
  state: {
    contents: '',
    keep_content_id:''
  },
  getters: {
    allContents: state => {
      return state.contents
    },
    keepContentID: state => {
      return state.keep_content_id
    }
  },
  mutations: {
    keepContents (state, store_contents) {
      state.contents = store_contents
    },
    keepContentID (state, store_content_id) {
      state.keep_content_id = store_content_id
    }
  },
  actions: {
    keepContents ({ commit }, contents) {
      commit('keepContents', contents)
    },
    keepContentID ({ commit }, content_id) {
      commit('keepContentID', content_id)
    }
  }
})
export default ContentStore
