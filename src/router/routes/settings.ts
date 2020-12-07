import type { RouteRecordRaw } from 'vue-router'

export default <RouteRecordRaw[]>[
  {
    name: 'settings',
    path: '/settings/index',
    component: () => import('/@/views/settings/index.vue')
  },
  {
    name: 'address',
    path: '/settings/address',
    component: () => import('/@/views/settings/address.vue')
  },
]
