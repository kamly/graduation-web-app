import wxNet from '../utils/wxNet'
import Config from '../config'

export default class API {
  /**
   * 获取token
   */
  static getToken(code) {
    return wxNet.sendRequest({}, `${Config.HOST.ZD}/webapp/token`, 'POST', {code})
  }

  /**
   * 获取二维码B接口
   */
  static createQrcodeB(token, scene, page, width) {
    return wxNet.sendRequest(token, `${Config.HOST.ZD}/webapp/createQrcodeB`, 'POST', {scene, page, width})
  }
}
