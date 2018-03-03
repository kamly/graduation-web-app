import wxNet from '../utils/wxNet'
import Config from '../config'

export default class API {
  /**
   * 动态，文章创建时间排序
   */
  static getIndexPost(token, page, size) {
    return wxNet.sendRequest(token, `${Config.HOST.ZD}/post/indexPost`, 'GET', {page, size})
  }

  /**
   * 具体文章
   */
  static getShowPost(token, id, showType) {
    return wxNet.sendRequest(token, `${Config.HOST.ZD}/post/${id}/show?showType=${showType}`, 'GET', {})
  }

  /**
   * 具体文章分享
   */
  static getShowPostShare(id) {
    return wxNet.sendRequest({}, `${Config.HOST.ZD}/post/showShare`, 'POST', {id})
  }

  /**
   * 点赞
   */
  static zan(token, id) {
    return wxNet.sendRequest(token, `${Config.HOST.ZD}/post/${id}/zan`, 'GET', {})
  }

  /**
   * 取消点赞
   */
  static unZan(token, id) {
    return wxNet.sendRequest(token, `${Config.HOST.ZD}/post/${id}/unZan`, 'GET', {})
  }

  /**
   * 创建
   */
  static createPost(token, title, des, content, imagesId) {
    return wxNet.sendRequest(token, `${Config.HOST.ZD}/post/create`, 'POST', {token, title, des, content, imagesId})
  }

  /**
   * 删除
   */
  static deletePost(token, id) {
    return wxNet.sendRequest(token, `${Config.HOST.ZD}/post/${id}/delete`, 'DELETE', {})
  }

  /**
   * 编辑
   */
  static updatePost(token, id, title, des, content, imagesId) {
    return wxNet.sendRequest(token, `${Config.HOST.ZD}/post/${id}/update`, 'POST', {title, des, content, imagesId})
  }
}
