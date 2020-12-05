import path from 'path'

import type { UserConfig } from 'vite'

export default <UserConfig>{
  alias: {
    '/@/': path.resolve(__dirname, 'src')
  },
  optimizeDeps: {
    exclude: ['lodash-es']
  },
  port: 3000,
}
