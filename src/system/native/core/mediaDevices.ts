const mediaDevices = navigator.mediaDevices || {}

if (mediaDevices.getUserMedia === undefined) {
  // @ts-ignore
  const getUserMedia = navigator.getUserMedia || navigator['webkitGetUserMedia'] || navigator['mozGetUserMedia']

  if (typeof getUserMedia === 'function') {
    mediaDevices.getUserMedia = function (constraints: MediaStreamConstraints) {
      return new Promise((resolve, reject) => {
        getUserMedia.call(navigator, constraints, resolve, reject);
      });
    }
  }
}

export default mediaDevices
