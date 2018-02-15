import wxNet from '../utils/wxNet'
import Config from '../config'

export default class API {
  /**
   * 绑定邮箱
   */
  static bindingEmail(userInfo, email, password) {
    return wxNet.sendRequest({}, `${Config.HOST.AC}/user/bindingEmail`, 'POST', {userInfo, email, password})
  }

  /**
   * 关注
   */
  static fan(token, id) {
    return wxNet.sendRequest(token, `${Config.HOST.AC}/user/${id}/fan`, 'GET', {})
  }

  /**
   * 取消关注
   */
  static unFan(token, id) {
    return wxNet.sendRequest(token, `${Config.HOST.AC}/user/${id}/unFan`, 'GET', {})
  }

  /**
   * 用户文章
   */
  static posts(token) {
    return wxNet.sendRequest(token, `${Config.HOST.AC}/user/posts`, 'GET', {})
  }

  /**
   * 用户评论
   */
  static comments(token) {
    return wxNet.sendRequest(token, `${Config.HOST.AC}/user/comments`, 'GET', {})
  }

  /**
   * 用户通知
   */
  static notices(token) {
    return wxNet.sendRequest(token, `${Config.HOST.AC}/user/notices`, 'GET', {})
  }

  /**
   * 关注
   */
  static stars(token) {
    return wxNet.sendRequest(token, `${Config.HOST.AC}/user/stars`, 'GET', {})
  }

  /**
   * 粉丝
   */
  static fans(token) {
    return wxNet.sendRequest(token, `${Config.HOST.AC}/user/fans`, 'GET', {})
  }

  /**
   * 获取某个用户的个人资料
   */
  static getUserInfo(token, id, showType) {
    return wxNet.sendRequest(token, `${Config.HOST.AC}/user/${id}/index`, 'GET', {showType})
  }


  /**
   * 更新用户信息
   */
  static updateUserInfo(token, id, name, avatar, sex, des, note) {
    return wxNet.sendRequest(token, `${Config.HOST.AC}/user/${id}/update`, 'POST', {name, avatar, sex, des, note})
  }

  /**
   * 个人搜索记录
   */
  static search(token, num) {
    return wxNet.sendRequest(token, `${Config.HOST.AC}/user/search`, 'GET', {num})
  }

  /**
   * 个人浏览记录
   */
  static browse(token, num) {
    return wxNet.sendRequest(token, `${Config.HOST.AC}/user/browses`, 'GET', {num})
  }
}
