import {createActions} from 'redux-actions'
import imageApi from '../../interfaces/imageApi'
import {isSuccess} from '../../utils/common'

export const actions = createActions({
  // 获取图片
  FETCH_GET_INDEX_IMAGE_REQ: null,
  FETCH_GET_INDEX_IMAGE_RCV: null,
  FETCH_GET_INDEX_IMAGE_ERR: null,
  // 上传图片
  FETCH_UPLOAD_IMAGE_REQ: null,
  FETCH_UPLOAD_IMAGE_RCV: null,
  FETCH_UPLOAD_IMAGE_ERR: null,
})

/**
 * 获取图片 ok
 */
export function apiFetchGetIndexImageRedux(data) {

  const {token, size} = data

  return async function (dispatch) {
    dispatch(actions.fetchGetIndexImageReq())
    const res = await imageApi.getIndexImage(token, size)
    if (isSuccess(res.data)) {
      dispatch(actions.fetchGetIndexImageRcv({res}))
    } else {
      dispatch(actions.fetchGetIndexImageErr({res}))
    }
    return res
  }
}

/**
 * 上传图片  ok
 */
export function apiFetchUploadImageRedux(data) {

  const {token, filePath, type} = data

  return async function (dispatch) {
    dispatch(actions.fetchUploadImageReq())
    const res = await imageApi.uploadImage(token, filePath, type)
    if (isSuccess(res.data)) {
      dispatch(actions.fetchUploadImageRcv({res}))
    } else {
      dispatch(actions.fetchUploadImageErr({res}))
    }
    return res
  }
}
