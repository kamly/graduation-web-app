import {createActions} from 'redux-actions'
import searchApi from '../../interfaces/searchApi'
import {isSuccess} from '../../utils/common'

export const actions = createActions({
  // 热门搜索 一条
  FETCH_GET_INDEX_SEARCH_REQ: null,
  FETCH_GET_INDEX_SEARCH_RCV: null,
  FETCH_GET_INDEX_SEARCH_ERR: null,

  // 热门搜索 多条
  FETCH_GET_INDEX_SEARCH_MORE_REQ: null,
  FETCH_GET_INDEX_SEARCH_MORE_RCV: null,
  FETCH_GET_INDEX_SEARCH_MORE_ERR: null,

  // 搜索
  FETCH_SEARCH_POST_COMMENT_REQ: null,
  FETCH_SEARCH_POST_COMMENT_RCV: null,
  FETCH_SEARCH_POST_COMMENT_ERR: null,

})

/**
 * 热门搜索 一条 ok
 */
export function apiFetchGetIndexSearchRedux(data) {

  const {token, num} = data;

  return async function (dispatch) {
    dispatch(actions.fetchGetIndexSearchReq())
    const res = await searchApi.getIndexSearch(token, num)
    if (isSuccess(res.data)) {
      dispatch(actions.fetchGetIndexSearchRcv({res}))
    } else {
      dispatch(actions.fetchGetIndexSearchErr({res}))
    }
    return res
  }
}


/**
 * 热门搜索 多条 ok
 */
export function apiFetchGetIndexSearchMoreRedux(data) {

  const {token, num} = data;

  return async function (dispatch) {
    dispatch(actions.fetchGetIndexSearchMoreReq())
    const res = await searchApi.getIndexSearch(token, num)
    if (isSuccess(res.data)) {
      dispatch(actions.fetchGetIndexSearchMoreRcv({res}))
    } else {
      dispatch(actions.fetchGetIndexSearchMoreErr({res}))
    }
    return res
  }
}


/**
 * 搜索  ok
 */
export function apiFetchSearchPostCommentRedux(data) {

  const {token, page, size, searchInfo} = data;

  return async function (dispatch) {
    dispatch(actions.fetchSearchPostCommentReq())
    const res = await searchApi.searchPostComment(token, page, size, searchInfo)
    if (isSuccess(res.data)) {
      dispatch(actions.fetchSearchPostCommentRcv({res}))
    } else {
      dispatch(actions.fetchSearchPostCommentErr({res}))
    }
    return res
  }
}


