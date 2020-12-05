import type { RouteRecordRaw } from 'vue-router'

export default <RouteRecordRaw[]>[
  {
    name: 'me',
    path: '/me',
    component: () => import('/@/views/me/index.vue'),
    meta: {
      layout: 'home'
    }
  },
  {
    name: 'me-personal',
    path: '/me/personal',
    component: () => import('/@/views/me/personal.vue')
  },
  {
    name: 'me-address',
    path: '/me/address',
    component: () => import('/@/views/me/address.vue')
  },
]
