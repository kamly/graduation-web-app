
import wxNet from '../utils/wxNet'
import Config from '../config'

export default class API {
  /**
   * 测试
   */
  static getTest(data) {
    return wxNet.sendRequest({}, `${Config.HOST.AC}/index`, 'GET', {data})
  }
}
