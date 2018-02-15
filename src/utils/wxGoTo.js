

// 保留当前页面，跳转到应用内的某个页面，使用wx.navigateBack可以返回到原页面。
function navigateTo(url) {
  return new Promise(function (resolve, reject) {
    wx.navigateTo({
      url: url
    })
  })
}

// 关闭当前页面，跳转到应用内的某个页面。
function redirectTo(url) {
  return new Promise(function (resolve, reject) {
    wx.redirectTo({
      url: url
    })
  })
}



// 关闭当前页面，跳转到应用内的某个页面。
function switchTab(url) {
  return new Promise(function (resolve, reject) {
    wx.switchTab({
      url: url
    })
  })
}

// 关闭当前页面，跳转到应用内的某个页面。
function navigateBack(num) {
  return new Promise(function (resolve, reject) {
    wx.navigateBack({
      delta: num
    })
  })
}



module.exports = {
  navigateTo,
  redirectTo,
  switchTab,
  navigateBack
}
