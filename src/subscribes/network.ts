import store from '/@/store'

const { commit } = store

export function listenNetworkStatus() {
  const currentStatus = window.navigator.onLine
  commit('network/setOnlineStatus', currentStatus)

  window.addEventListener("offline", function (e) {
    console.log(e)
    commit('network/setOnlineStatus', false)
  })

  window.addEventListener("online", () => {
    commit('network/setOnlineStatus', true)
  })
}
