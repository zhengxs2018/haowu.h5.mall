import type { RouteRecordRaw } from 'vue-router'

import home from './routes/home'
import me from './routes/me'
import security from './routes/security'
import settings from './routes/settings'

export default <RouteRecordRaw[]>[
  ...home,
  ...me,
  ...security,
  ...settings,
]
