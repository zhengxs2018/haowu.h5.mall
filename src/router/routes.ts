import type { RouteRecordRaw } from 'vue-router'

import home from './routes/home'
import product from './routes/product'
import deal from './routes/deal'
import me from './routes/me'
import security from './routes/security'
import settings from './routes/settings'

export default <RouteRecordRaw[]>[
  ...home,
  ...product,
  ...deal,
  ...me,
  ...security,
  ...settings,
]
