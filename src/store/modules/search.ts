import { Module } from 'vuex'

import { RootState, SearchState } from '../types'

export default <Module<SearchState, RootState>>{
  namespaced: true,
  state() {
    return {
      hotKeywords: []
    }
  }
}
