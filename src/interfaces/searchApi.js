import wxNet from '../utils/wxNet'
import Config from '../config'

export default class API {

  /**
   * 热门搜索
   */
  static getIndexSearch(token, num) {
    return wxNet.sendRequest(token, `${Config.HOST.AC}/search/indexSearch`, 'GET', {num})
  }

  /**
   * 搜索
   */
  static searchPostComment(token, page, size, searchInfo) {
    return wxNet.sendRequest(token, `${Config.HOST.AC}/search/searchPostComment`, 'POST', {page, size, searchInfo})
  }

}
