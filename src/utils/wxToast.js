export default class wxToast {

  // loading
  static loading(time, title) {
    wx.showToast({
      title: title || '正在加载....',
      icon: 'loading',
      duration: time * 1
    })
  }

  // success
  static success(time, title) {
    wx.showToast({
      title: title || '提交成功....',
      icon: 'success',
      duration: time * 1
    })
  }

  // 二次确认
  static showModal(title, content, showCancel) {
    return new Promise(function (resolve, reject) {
      wx.showModal({
        title: title,
        content: content,
        showCancel: showCancel,
        success: function (res) {
          if (res.confirm) {
            resolve(1)
          } else if (res.cancel) {
            resolve(0)
          }
        }
      })
    })
  }

  // 菜单栏
  static showActionSheet(list) {
    return new Promise(function (resolve, reject) {
      wx.showActionSheet({
        itemList: list,
        success: function (res) {
          resolve(res.tapIndex)
        },
        fail: function (res) {
          resolve(-1)
        }
      })
    })
  }
}
