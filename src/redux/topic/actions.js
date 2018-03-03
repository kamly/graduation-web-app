import {createActions} from 'redux-actions'
import topicApi from '../../interfaces/topicApi'
import {isSuccess} from '../../utils/common'

export const actions = createActions({
  // 获取专题
  FETCH_GET_INDEX_TOPIC_REQ: null,
  FETCH_GET_INDEX_TOPIC_RCV: null,
  FETCH_GET_INDEX_TOPIC_ERR: null,

  // 清空 indexPost
  FETCH_EMPTY_INDEX_TOPIC: null,

  // 专题详情
  FETCH_GET_SHOW_TOPIC_REQ: null,
  FETCH_GET_SHOW_TOPIC_RCV: null,
  FETCH_GET_SHOW_TOPIC_ERR: null,

})


/**
 * 获取专题 ok
 */
export function apiFetchGetIndexTopicRedux(data) {

  const {token, page, size} = data;

  return async function (dispatch) {
    dispatch(actions.fetchGetIndexTopicReq())
    const res = await topicApi.getIndexTopic(token, page, size)
    if (isSuccess(res.data)) {
      dispatch(actions.fetchGetIndexTopicRcv({res}))
    } else {
      dispatch(actions.fetchGetIndexTopicErr({res}))
    }
    return res
  }
}

/**
 * 清空 indexPost ok
 */
export function apiFetchEmptyIndexTopicRedux() {
  return async function (dispatch) {
    dispatch(actions.fetchEmptyIndexTopic())
  }
}


/**
 * 专题详情 ok
 */
export function apiFetchGetShowTopicRedux(data) {

  const {token, id} = data;

  return async function (dispatch) {
    dispatch(actions.fetchGetShowTopicReq())
    const res = await topicApi.getShowTopic(token, id)
    if (isSuccess(res.data)) {
      dispatch(actions.fetchGetShowTopicRcv({res}))
    } else {
      dispatch(actions.fetchGetShowTopicErr({res}))
    }
    return res
  }
}



