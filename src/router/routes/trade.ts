import type { RouteRecordRaw } from 'vue-router'

export default <RouteRecordRaw[]>[
  {
    name: 'trade-confirm',
    path: '/trade/confirm/:tradeId',
    component: () => import('../../views/trade/confirm.vue')
  },
]
