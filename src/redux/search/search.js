import {handleActions} from 'redux-actions'

export const search = handleActions({

  /*
   * 热门搜索 一条
   */
  FETCH_GET_INDEX_SEARCH_REQ: (state, action) => ({
    ...state, ...
      {
        isFetching: true,
      }
  }),
  FETCH_GET_INDEX_SEARCH_RCV: (state, action) => {
    let nextState = {...state}
    let indexSearch = action.payload.res.data.message
    nextState.indexSearch = indexSearch
    nextState.isFetching = false
    return nextState
  },
  FETCH_GET_INDEX_SEARCH_ERR: (state, action) => {
    // 发生错误，wpy页面进行处理，这里看后续需求添加内容
    let nextState = {...state}
    nextState.isFetching = false
    return nextState
  },

  /*
   * 热门搜索 多条
   */
  FETCH_GET_INDEX_SEARCH_MORE_REQ: (state, action) => ({
    ...state, ...
      {
        isFetching: true,
      }
  }),
  FETCH_GET_INDEX_SEARCH_MORE_RCV: (state, action) => {
    let nextState = {...state}
    let indexSearchMore = action.payload.res.data.message
    nextState.indexSearchMore = indexSearchMore
    nextState.isFetching = false
    return nextState
  },
  FETCH_GET_INDEX_SEARCH_MORE_ERR: (state, action) => {
    // 发生错误，wpy页面进行处理，这里看后续需求添加内容
    let nextState = {...state}
    nextState.isFetching = false
    return nextState
  },

  /*
  * 搜索
  */
  FETCH_SEARCH_POST_COMMENT_REQ: (state, action) => ({
    ...state, ...
      {
        isFetching: true,
      }
  }),
  FETCH_SEARCH_POST_COMMENT_RCV: (state, action) => {
    let nextState = {...state}
    nextState.isFetching = false
    return nextState
  },

  FETCH_SEARCH_POST_COMMENT_ERR: (state, action) => {
    // 发生错误，wpy页面进行处理，这里看后续需求添加内容
    let nextState = {...state}
    nextState.isFetching = false
    return nextState
  },


}, {
  isFetching: false,
  indexSearch: [],
  indexSearchMore: [],
  searchPostComment: {}
})
