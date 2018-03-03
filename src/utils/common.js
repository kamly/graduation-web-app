// 判断是不是空
function isEmpty(data) {
  if (data === null || data === undefined || data === "" || data === []) {
    return true
  }
  return false
}


// 暂停
function sleepPromise(s) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('promise resolved')
    }, s * 1000)
  })
}

// 随机
function random(range) {
  let min = Math.min(range[0], range[1])
  let max = Math.max(range[0], range[1])
  let diff = max - min
  return Math.round(Math.random() * diff) + min
}


// 判断返回值是否有误
function isSuccess(data) {
  if (data.errorCode === 0) {
    return true
  }
  return false
}


// 是否成功 默认跳转首页
function isSuccessPromise(data, redirect = true) {
  return new Promise(function (resolve, reject) {
    if (data.errorCode === 0) {
      // 没有错误，直接返回
      resolve(true)
    } else {
      // 提示
      wx.showModal({
        title: '提示',
        content: data.message + ',请联系客服',
        showCancel: false,
        success: function (res) {
          if (redirect) {
            if (data.errorCode === 10003) {
              wx.removeStorageSync('token')
            }
            // 跳转
            wx.switchTab({
              url: 'index'
            })
          } else {
            resolve(false)
          }
        }
      })
    }
  })
}

// 检查有沒有token
function checkTokenPromise() {
  return new Promise(function (resolve, reject) {
    const token = wepy.getStorageSync('token')
    if (token) {
      resolve(true)
    } else {
      wx.showModal({
        title: '提示',
        content: '请先绑定',
        showCancel: false,
        success: function (res) {
          // 跳转
          wx.switchTab({
            url: 'register'
          })
        }
      })
    }
  })
}


module.exports = {
  isEmpty,
  isSuccess,
  sleepPromise,
  random,
  isSuccessPromise,
  checkTokenPromise,
}
