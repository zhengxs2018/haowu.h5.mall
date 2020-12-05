import { Module } from 'vuex'

import { Toast } from 'vant'

import { RootState, NetworkState } from '../types'

const tips = createTips()



export default <Module<NetworkState, RootState>>{
  namespaced: true,
  state() {
    return {
      online: false
    }
  },
  mutations: {
    setOnlineStatus(state, online: boolean) {
      state.online = online
      tips.toggle(!online)
    }
  },
  actions: {
    ping() {
      // pass
    }
  }
}


function createTips() {
  let toast: Toast | null = null

  function show() {
    toast = Toast({
      className: 'network-error-toast',
      message: '网络请求失败，请检查您的网络设置',
      duration: 0,
    }) as unknown as Toast
  }

  function hide() {
    if (toast) {
      toast.clear()
      toast = null
    }
  }

  function toggle(state: boolean) {
    if (state) {
      show()
    } else {
      hide()
    }
  }

  return {
    toggle,
    show,
    hide
  }
}
