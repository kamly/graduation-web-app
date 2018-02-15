import {handleActions} from 'redux-actions'

export const webApp = handleActions({

  /*
   * 获取token
   */
  FETCH_GET_TOKEN_REQ: (state, action) => ({
    ...state, ...
      {
        isFetching: true,
      }
  }),
  FETCH_GET_TOKEN_RCV: (state, action) => {
    let nextState = {...state}
    nextState.isFetching = false
    return nextState
  },
  FETCH_GET_TOKEN_ERR: (state, action) => {
    // 发生错误，wpy页面进行处理，这里看后续需求添加内容
    let nextState = {...state}
    nextState.isFetching = false
    return nextState
  },

  /*
   * 小程序生成二维码的B接口
   */
  FETCH_CREATE_QRCODEB_REQ: (state, action) => ({
    ...state, ...
      {
        isFetching: true,
      }
  }),
  FETCH_CREATE_QRCODEB_RCV: (state, action) => {
    let nextState = {...state}
    nextState.isFetching = false
    return nextState
  },
  FETCH_CREATE_QRCODEB_ERR: (state, action) => {
    let nextState = {...state}
    nextState.isFetching = false
    return nextState
  },

}, {
  isFetching: false,
})
