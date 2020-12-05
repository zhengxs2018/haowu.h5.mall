import 'vant/lib/index.css'
import './components/base/index.scss'
import './assets/styles/index.scss'

import { createApp } from 'vue'

import Vant, { Toast } from 'vant'

import App from './App.vue'
import router from './router'
import store from './store'
import subscribes from './subscribes'

Toast.allowMultiple(true)

// 添加 mock 数据
if (import.meta.env.MODE === 'development') {
  subscribes.push(import('./mocks/index'))
}

function main() {
  // 创建应用
  createApp(App)
    .use(Vant)
    // @ts-ignore
    .use(Vant.Lazyload)
    .use(store)
    .use(router)
    .mount('#app')
}

Promise
  .all(subscribes)
  .then(main)

