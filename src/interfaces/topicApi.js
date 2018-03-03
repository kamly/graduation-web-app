import wxNet from '../utils/wxNet'
import Config from '../config'

export default class API {
  /**
   * 专题，投稿数量排序
   */
  static getIndexTopic(token, page, size) {
    return wxNet.sendRequest(token, `${Config.HOST.ZD}/topic/indexTopic`, 'GET', {page, size})
  }

  /**
   * 专题详情
   */
  static getShowTopic(token, id) {
    return wxNet.sendRequest(token, `${Config.HOST.ZD}/topic/${id}/show`, 'GET', {})
  }
}
