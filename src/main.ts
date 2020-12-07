import 'vant/lib/index.css'
import './components/base/index.scss'
import './assets/styles/index.scss'

import { createApp, Plugin } from 'vue'

import Vant, { Toast, Lazyload } from 'vant'

import App from './App.vue'
import BootFailed from './views/exception/boot-failed.vue'

import router from './router'
import store from './store'
import subscribes from './subscribes'

Toast.allowMultiple(true)

function main() {
  const app = createApp(App)

  app
    .use(Vant)
    .use(Lazyload as Plugin)
    .use(store)
    .use(router)

  return app
}

/**
 * 启动失败
 *
 * @todo 上报错误
 */
function bootFailed() {
  const app = createApp(BootFailed)
  app.use(Vant)
  return app
}

// 添加 mock 数据
if (import.meta.env.MODE === 'development') {
  subscribes.push(import('./mocks/index'))
}

Promise
  .all(subscribes)
  .then(main, bootFailed)
  .then(app => app.mount('#app'))


