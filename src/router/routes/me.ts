import type { RouteRecordRaw } from 'vue-router'

export default <RouteRecordRaw[]>[
  {
    name: 'me',
    path: '/me/index',
    component: () => import('/@/views/me/index.vue'),
    meta: {
      layout: 'home'
    }
  },
  {
    name: 'personal',
    path: '/me/personal',
    component: () => import('/@/views/me/personal.vue')
  },
]
