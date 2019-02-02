import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const NEWS_LIST = 'NEWS_LIST'
export const SAVE_NEWS_LIST = 'SAVE_NEWS_LIST'
export const NEWS_DETAIL = 'NEWS_DETAIL'
export const SAVE_NEWS_DETAIL = 'SAVE_NEWS_DETAIL'

const state = {
  [NEWS_LIST]: [],
  [NEWS_DETAIL]: {}
}

const getters = {
  [NEWS_LIST]: state => state[NEWS_LIST],
  [NEWS_DETAIL]: state => state[NEWS_DETAIL]
}

const mutations = {
  [SAVE_NEWS_LIST](state, list) {
    state[NEWS_LIST] = list
  },
  [SAVE_NEWS_DETAIL](state, detail) {
    state[NEWS_DETAIL] = detail
  }
}

export default new Vuex.Store({ state, getters, mutations })
