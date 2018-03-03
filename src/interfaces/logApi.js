import wxLog from '../utils/wxLog'
import Config from '../config'

export default class API {
  /**
   * wxLog 初始化
   */
  static wxLogInit(that) {
    wxLog.init({
      url: `${Config.HOST.ZD}/webapp/logReport`,
      app: that
    })
  }
}
