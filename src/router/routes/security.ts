import type { RouteRecordRaw } from 'vue-router'

export default <RouteRecordRaw[]>[
  {
    name: 'security',
    path: '/security/index',
    component: () => import('/@/views/security/index.vue')
  }
]
