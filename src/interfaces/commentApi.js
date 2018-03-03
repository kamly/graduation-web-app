import wxNet from '../utils/wxNet'
import Config from '../config'

export default class API {

  /**
   * 热门，评论创建时间排序
   */
  static getIndexComment(token, page, size) {
    return wxNet.sendRequest(token, `${Config.HOST.ZD}/comment/indexComment`, 'GET', {page, size})
  }

  /**
   * 文章的评论
   */
  static getPostComments(token, postId) {
    return wxNet.sendRequest(token, `${Config.HOST.ZD}/comment/${postId}/postComments`, 'GET', {})
  }


  /**
   * 具体评论
   */
  static getShowComment(token, id, showType) {
    return wxNet.sendRequest(token, `${Config.HOST.ZD}/comment/${id}/show?showType=${showType}`, 'GET', {})
  }

  /**
   * 创建
   */
  static createComment(token, postId, content, imagesId) {
    return wxNet.sendRequest(token, `${Config.HOST.ZD}/comment/${postId}/create`, 'POST', {content, imagesId})
  }


  /**
   * 删除
   */
  static deleteComment(token, id) {
    return wxNet.sendRequest(token, `${Config.HOST.ZD}/comment/${id}/delete`, 'DELETE', {})
  }

  /**
   * 更新
   */
  static updateComment(token, id, content, imagesId) {
    return wxNet.sendRequest(token, `${Config.HOST.ZD}/comment/${id}/update`, 'POST', {content, imagesId})
  }
}
