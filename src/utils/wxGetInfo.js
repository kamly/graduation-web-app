// 登录
function loginPromise() {
  return new Promise(function (resolve, reject) {
    wx.login({
      success: function (res) {
        // console.log(res)
        resolve(res)
      },
      fail: function (res) {
        // console.log(res)
        resolve(res)
      }
    })
  })
}

// 获取用户信息
function getUserInfoPromise() {
  return new Promise(function (resolve, reject) {
    wx.getUserInfo({
      success: function (res) {
        // console.log(res)
        resolve(res)
      },
      fail: function (res) {
        // console.log(res)
        reject(res)
      }
    })
  })
}

// 获取系统信息
function getSystemInfoPromise() {
  return new Promise(function (resolve, reject) {
    wx.getSystemInfo({
      success: function (res) {
        resolve(res)
      },
      fail: function (res) {
        reject(res)
      }
    })
  })
}


// 获取图片
function chooseImagePromise() {
  return new Promise(function (resolve, reject) {
    wx.chooseImage({
      success: function (res) {
        resolve(res)
      },
      fail: function (res) {
        reject(res)
      }
    })
  })
}


// 预览图片
function previewImagePromise(path) {
  return new Promise(function (resolve, reject) {
    wx.previewImage({
      urls: [path]
    })
  })
}

// 保存本地
function canvasToTempFilePathPromise(canvasId) {
  return new Promise(function (resolve, reject) {
    wx.canvasToTempFilePath({
      canvasId: canvasId,
      success: resolve,
      fail: reject,
    })
  })
}

function showShareMenuPromise(canvasId) {
  return new Promise(function (resolve, reject) {
    wx.showShareMenu({
      withShareTicket: true
    })
  })
}






module.exports = {
  loginPromise,
  getUserInfoPromise,
  getSystemInfoPromise,
  chooseImagePromise,
  previewImagePromise,
  canvasToTempFilePathPromise,
  showShareMenuPromise,
}
