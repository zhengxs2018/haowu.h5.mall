import { createStore } from 'vuex'

import network from './modules/network'
import search from './modules/search'

const store = createStore({
  strict: import.meta.env.MODE === 'development',
  modules: { network, search }
})

if (import.meta.env.MODE === 'development') {
  // @ts-ignore
  window.store = store
}

export default store
