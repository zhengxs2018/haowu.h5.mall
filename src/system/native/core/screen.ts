const screen = window.screen
const orientation = screen.orientation || {}

if (typeof orientation.lock !== 'function') {
  // @ts-ignore
  const lockOrientation = screen['lockOrientation'] || screen['mozLockOrientation'] || screen['msLockOrientation']
  orientation.lock = function (orientation: OrientationLockType): Promise<void> {
    return lockOrientation && lockOrientation(orientation)
  }
}

if (typeof orientation.unlock !== 'function') {
  // @ts-ignore
  const unlockOrientation = screen.unlockOrientation || screen.mozUnlockOrientation || screen.msUnlockOrientation
  orientation.unlock = function (): void {
    return unlockOrientation && unlockOrientation()
  }
}

export default screen
