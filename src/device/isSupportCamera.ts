/**
 * @name 是否支持摄像头
 * @return {Boolean} 是否支持摄像头
 * @example   isSupportCamera()
 */
export const isSupportCamera = (): boolean => {
  if (navigator.mediaDevices && (navigator as any).mediaDevices.getUserMedia) {
    let deviceList: any = []
    navigator.mediaDevices
      .enumerateDevices()
      .then((devices) => {
        devices.forEach((device) => {
          deviceList.push(device.kind)
        })
        if (deviceList.indexOf("videoinput") == "-1") {
          return false
        } else {
          return true
        }
      })
      .catch(function (err) {
        console.log(err.name + ": " + err.message)
      })
  }
  return false
}
