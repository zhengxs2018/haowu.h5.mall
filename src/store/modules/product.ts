import { Module } from 'vuex'

import { RootState, Product } from '../types'

export interface ProductState {
  cache: Record<string, Product>
}

export default <Module<ProductState, RootState>>{
  namespaced: true,
  state() {
    return {
      cache: {}
    }
  },
  mutations: {
    addItem(state, item: Product) {
      state.cache[item.id] = item
    }
  },
  actions: {
    getById({}, id: string) {

    }
  }
}
