import wxNet from '../utils/wxNet'
import Config from '../config'

export default class API {
  /**
   * 获取token
   */
  static getToken(code, rawData, signature, encryptedData, iv) {
    return wxNet.sendRequest({}, `${Config.HOST.AC}/webapp/token`, 'POST', {code, rawData, signature, encryptedData, iv})
  }

  /**
   * 获取二维码B接口
   */
  static createQrcodeB(token, scene, page, width) {
    return wxNet.sendRequest(token, `${Config.HOST.AC}/webapp/createQrcodeB`, 'POST', {scene, page, width})
  }
}
