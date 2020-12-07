import type { RouteRecordRaw } from 'vue-router'

import home from './routes/home'
import product from './routes/product'
import trade from './routes/trade'
import me from './routes/me'
import security from './routes/security'
import settings from './routes/settings'

export default <RouteRecordRaw[]>[
  ...home,
  ...product,
  ...trade,
  ...me,
  ...security,
  ...settings,
]
