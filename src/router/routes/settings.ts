import type { RouteRecordRaw } from 'vue-router'

export default <RouteRecordRaw[]>[
  {
    name: 'settings',
    path: '/settings',
    component: () => import('/@/views/settings/index.vue')
  },
]
