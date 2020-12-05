import type { RouteRecordRaw } from 'vue-router'

import Home from '/@/views/home/index.vue'

export default <RouteRecordRaw[]>[
  {
    name: 'home',
    path: '/home',
    component: Home,
    meta: {
      layout: 'home'
    }
  },
  {
    name: 'cart',
    path: '/cart',
    component: () => import('/@/views/cart/index.vue'),
    meta: {
      layout: 'home'
    }
  },
  {
    name: 'search',
    path: '/search',
    component: () => import('/@/views/search/index.vue')
  }
]
