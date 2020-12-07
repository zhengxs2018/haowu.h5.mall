import type { RouteRecordRaw } from 'vue-router'

export default <RouteRecordRaw[]>[
  {
    name: 'deal-confirm',
    path: '/deal/confirm/:tradeId',
    component: () => import('../../views/deal/confirm.vue')
  },
]
