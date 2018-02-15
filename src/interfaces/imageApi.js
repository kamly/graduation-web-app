import wxNet from '../utils/wxNet'
import Config from '../config'

export default class API {
  /**
   * 随机图片
   */
  static getIndexImage(token, size) {
    return wxNet.sendRequest(token, `${Config.HOST.AC}/image/indexImage`, 'GET', {size})
  }

  /**
   * 上传图片
   */
  static uploadImage(token, filePath, type) {
    return wxNet.uploadFilePromise(token, `${Config.HOST.AC}/image/upload`, filePath, 'upload', {type})
  }
}
