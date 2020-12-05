import { listenNetworkStatus } from './network'

const tasks: Promise<unknown>[] = [
  Promise.resolve(listenNetworkStatus())
]

export default tasks
