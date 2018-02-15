import {handleActions} from 'redux-actions'

export const image = handleActions({

  // 获取图片
  FETCH_GET_INDEX_IMAGE_REQ: (state, action) => ({
    ...state, ...
      {
        isFetching: true,
      }
  }),
  FETCH_GET_INDEX_IMAGE_RCV: (state, action) => {
    let nextState = {...state}
    let indexImage = action.payload.res.data.message
    nextState.indexImage = indexImage
    nextState.isFetching = false
    return nextState
  },
  FETCH_GET_INDEX_IMAGE_ERR: (state, action) => {
    // 发生错误，wpy页面进行处理，这里看后续需求添加内容
    let nextState = {...state}
    nextState.isFetching = false
    return nextState
  },

  // 上传图片
  FETCH_UPLOAD_IMAGE_REQ: (state, action) => ({
    ...state, ...
      {
        isFetching: true,
      }
  }),
  FETCH_UPLOAD_IMAGE_RCV: (state, action) => {
    let nextState = {...state}
    nextState.isFetching = false
    return nextState
  },
  FETCH_UPLOAD_IMAGE_ERR: (state, action) => {
    // 发生错误，wpy页面进行处理，这里看后续需求添加内容
    let nextState = {...state}
    nextState.isFetching = false
    return nextState
  },
}, {
  isFetching: false,
  indexImage: [],
})
