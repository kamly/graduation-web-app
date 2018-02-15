/**
 * Created by kamlyli on 2017/7/22.
 */


export default class wxNet {

  // 发送请求，返回json
  static sendRequest(token, url, method, data) {
    return wxNet.requestPromise(token, url, method, data)
  }

  // 发送请求
  static requestPromise(token, url, method, data) {
    token = token || {}
    data = data || {}
    return new Promise(function (resolve, reject) {
      wx.request({
        'method': method,
        'url': url,
        'data': data,
        'header': {
          'Content-Type': 'application/json',
          'token': token
        },
        success: function (res) {
          // errorCode
          // message
          resolve(res)
        },
        fail: function (err) {
          // console.log(err)
          reject(err)
        }
      })
    })
  }

  // 上传文件
  static uploadFilePromise(token, url, filePath, name, data) {
    token = token || {}
    data = data || {}
    return new Promise(function (resolve, reject) {
      wx.uploadFile({
        'url': url,
        'filePath': filePath,
        'name': name,
        'formData': data,
        'header': {
          'token': token
        },
        success: function (res) {
          res.data = JSON.parse(res.data)
          resolve(res)
        },
        fail: function (err) {
          reject(err)
        }
      })
    })
  }

  // 下载文件
  static downloadFilePromise(url) {
    return new Promise(function (resolve, reject) {
      wx.downloadFile({
        url: url,
        success: function (res) {
          if (res.statusCode === 200) {
            resolve(res)
          }
        }
      })
    })
  }

};

