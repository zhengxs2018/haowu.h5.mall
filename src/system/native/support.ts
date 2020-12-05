import get from 'lodash-es/get'

import mediaDevices from './core/mediaDevices'

const supports = {
  mediaDevices: {
    getUserMedia: typeof mediaDevices.getUserMedia === 'function'
  }
}

export function canIUse(code: string): boolean {
  return get(supports, code) === true
}

export default supports
