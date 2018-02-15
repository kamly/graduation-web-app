import {createActions} from 'redux-actions'
import webAppApi from '../../interfaces/webAppApi'
import {isSuccess} from '../../utils/common'

export const actions = createActions({
  // 获取token
  FETCH_GET_TOKEN_REQ: null,
  FETCH_GET_TOKEN_RCV: null,
  FETCH_GET_TOKEN_ERR: null,

  // 小程序生成二维码的B接口
  FETCH_CREATE_QRCODEB_REQ: null,
  FETCH_CREATE_QRCODEB_RCV: null,
  FETCH_CREATE_QRCODEB_ERR: null,
})

// 获取token ok
export function apiFetchGetTokenRedux(data) {

  const {code, rawData, signature, encryptedData, iv} = data;

  return async function (dispatch) {
    dispatch(actions.fetchGetTokenReq())
    const res = await webAppApi.getToken(code, rawData, signature, encryptedData, iv)
    if (isSuccess(res.data)) {
      dispatch(actions.fetchGetTokenRcv({res}))
    } else {
      dispatch(actions.fetchGetTokenErr({res}))
    }
    return res
  }
}

// 获取token ok
export function apiFetchCreateQrcodebRedux(data) {

  const {token, scene, page, width} = data;

  return async function (dispatch) {
    dispatch(actions.fetchCreateQrcodebReq())
    const res = await webAppApi.createQrcodeB(token, scene, page, width)
    if (isSuccess(res.data)) {
      dispatch(actions.fetchCreateQrcodebRcv({res}))
    } else {
      dispatch(actions.fetchCreateQrcodebErr({res}))
    }
    return res
  }
}

