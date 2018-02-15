import {createActions} from 'redux-actions'
import postApi from '../../interfaces/postApi'
import {isSuccess} from '../../utils/common'
import {actions as reduxAction} from '../redux/actions'

export const actions = createActions({
  // 动态，文章创建时间排序
  FETCH_GET_INDEX_POST_REQ: null,
  FETCH_GET_INDEX_POST_RCV: null,
  FETCH_GET_INDEX_POST_ERR: null,

  // 清空 indexPost
  FETCH_EMPTY_INDEX_POST: null,

  // 具体文章
  FETCH_GET_SHOW_POST_REQ: null,
  FETCH_GET_SHOW_POST_RCV: null,
  FETCH_GET_SHOW_POST_ERR: null,

  // 具体文章分享
  FETCH_GET_SHOW_POST_SHARE_REQ: null,
  FETCH_GET_SHOW_POST_SHARE_RCV: null,
  FETCH_GET_SHOW_POST_SHARE_ERR: null,

  // 点赞
  FETCH_ZAN_REQ: null,
  FETCH_ZAN_RCV: null,
  FETCH_ZAN_ERR: null,

  // 取消点赞
  FETCH_UN_ZAN_REQ: null,
  FETCH_UN_ZAN_RCV: null,
  FETCH_UN_ZAN_ERR: null,

  // 创建
  FETCH_CREATE_POST_REQ: null,
  FETCH_CREATE_POST_RCV: null,
  FETCH_CREATE_POST_ERR: null,

  // 删除
  FETCH_DELETE_POST_REQ: null,
  FETCH_DELETE_POST_RCV: null,
  FETCH_DELETE_POST_ERR: null,

  // 更新
  FETCH_UPDATE_POST_REQ: null,
  FETCH_UPDATE_POST_RCV: null,
  FETCH_UPDATE_POST_ERR: null,

  // 创建post 更新indexPost
  FETCH_CREATE_POST_INDEX_POST: null,

  // 删除post 更新indexPost
  FETCH_DELETE_POST_INDEX_POST: null,

  // 更新post 更新showPost
  FETCH_UPDATE_POST_SHOW_POST: null,
  // 更新post 更新indexPost
  FETCH_UPDATE_POST_INDEX_POST: null,

  // zan 更新 indexPost
  FETCH_UPDATE_ZAN_INDEX_POST: null,

  // unzan 更新 indexPost
  FETCH_UPDATE_UN_ZAN_INDEX_POST: null,
})

/**
 * 动态，文章创建时间排序  ok
 */
export function apiFetchGetIndexPostRedux(data) {

  const {token, page, size} = data;

  return async function (dispatch) {
    dispatch(actions.fetchGetIndexPostReq())
    const res = await postApi.getIndexPost(token, page, size)
    if (isSuccess(res.data)) {
      dispatch(actions.fetchGetIndexPostRcv({res}))
    } else {
      dispatch(actions.fetchGetIndexPostErr({res}))
    }
    return res
  }
}


/**
 * 清空 indexPost ok
 */
export function apiFetchEmptyIndexPostRedux() {
  return async function (dispatch) {
    dispatch(actions.fetchEmptyIndexPost())
  }
}


/**
 * 具体文章 ok
 */
export function apiFetchGetShowPostRedux(data) {

  const {token, id, showType} = data;

  return async function (dispatch) {
    dispatch(actions.fetchGetShowPostReq())
    const res = await postApi.getShowPost(token, id, showType)
    if (isSuccess(res.data)) {
      dispatch(actions.fetchGetShowPostRcv({res, showType}))
    } else {
      dispatch(actions.fetchGetShowPostErr({res}))
    }
    return res
  }
}

/**
 * 具体文章分享 ok
 */
export function apiFetchGetShowPostShareRedux(data) {

  const {id} = data;

  return async function (dispatch) {
    dispatch(actions.fetchGetShowPostShareReq())
    const res = await postApi.getShowPostShare(id)
    if (isSuccess(res.data)) {
      dispatch(actions.fetchGetShowPostShareRcv({res}))
    } else {
      dispatch(actions.fetchGetShowPostShareErr({res}))
    }
    return res
  }
}

/**
 * 点赞 ok
 *
 * 影响  PS:有可能没有值
 * post showPost
 * post indexPost
 *
 */
export function apiFetchZanRedux(data) {

  const {token, id} = data;

  return async function (dispatch) {
    dispatch(actions.fetchZanReq())
    const res = await postApi.zan(token, id)
    if (isSuccess(res.data)) {
      dispatch(actions.fetchZanRcv({res, id: id}))
      dispatch(actions.fetchUpdateZanIndexPost({res, id: id}))
    } else {
      dispatch(actions.fetchZanErr({res}))
    }
    return res
  }
}


/**
 * 取消点赞  ok
 *
 * 影响  PS:有可能没有值
 * post showPost
 * post indexPost
 *
 */
export function apiFetchUnZanRedux(data) {

  const {token, id} = data;

  return async function (dispatch) {

    dispatch(actions.fetchUnZanReq())
    const res = await postApi.unZan(token, id)
    if (isSuccess(res.data)) {
      dispatch(actions.fetchUnZanRcv({res, id: id}))
      dispatch(actions.fetchUpdateUnZanIndexPost({res, id: id}))
    } else {
      dispatch(actions.fetchUnZanErr({res}))
    }
    return res
  }
}


/**
 * 创建 ok
 *
 * 影响  PS:有可能没有值
 * post indexPost
 * user userPosts
 *
 */
export function apiFetchCreatePostRedux(data) {

  const {token, title, des, content, imagesId} = data;

  return async function (dispatch) {

    dispatch(actions.fetchCreatePostReq())
    const res = await postApi.createPost(token, title, des, content, imagesId)
    if (isSuccess(res.data)) {
      const newPost = res.data.message.post
      // 进行dispatch
      dispatch(actions.fetchCreatePostRcv({newPost})) // 无操作
      dispatch(actions.fetchCreatePostIndexPost({newPost})) // create indexPost
      dispatch(reduxAction.fetchCreatePostUserPosts({newPost})) // create userPosts
    } else {
      dispatch(actions.fetchCreatePostErr({res}))
    }
    return res
  }
}


/**
 * 删除 ok
 *
 * 影响  PS:有可能没有值
 * post indexPost
 * comment indexComment
 * user userPosts
 * user userComments
 */
export function apiFetchDetelePostRedux(data) {

  const {token, id} = data;

  return async function (dispatch) {
    dispatch(actions.fetchDeletePostReq())
    const res = await postApi.deletePost(token, id)
    if (isSuccess(res.data)) {
      // 进行dispatch
      dispatch(actions.fetchDeletePostRcv({res})) // 无操作
      dispatch(actions.fetchDeletePostIndexPost({id})) // delete indexPost
      dispatch(reduxAction.fetchDeletePostIndexComment({id})) // delete indexComment
      dispatch(reduxAction.fetchDeletePostUserPosts({id})) // delete userPosts
      dispatch(reduxAction.fetchDeletePostUserComments({id})) // delete userComments
    } else {
      dispatch(actions.fetchDeletePostErr({res}))
    }
    return res
  }
}


/**
 * 编辑 ok
 *
 * 影响  PS:有可能没有值
 * post showPost
 * post indexPost
 * comment indexComment
 * topic indexTopic
 * user userPosts
 * user userComments
 *
 */
export function apiFetchUpdatePostRedux(data) {

  const {token, id, title, des, content, imagesId} = data;

  return async function (dispatch) {
    dispatch(actions.fetchUpdatePostReq())
    const res = await postApi.updatePost(token, id, title, des, content, imagesId)
    if (isSuccess(res.data)) {
      const newPost = res.data.message.post
      // 进行dispatch
      dispatch(actions.fetchUpdatePostRcv({newPost})) // 无操作
      dispatch(actions.fetchUpdatePostShowPost({newPost})) // update showPost
      dispatch(actions.fetchUpdatePostIndexPost({newPost})) // update indexPost
      dispatch(reduxAction.fetchUpdatePostIndexComment({newPost})) // update indexComment
      dispatch(reduxAction.fetchUpdatePostIndexTopic({newPost})) // update indexTopic
      dispatch(reduxAction.fetchUpdatePostUserPosts({newPost})) // update userPosts
      dispatch(reduxAction.fetchUpdatePostUserComments({newPost})) // update userComments
    } else {
      dispatch(actions.fetchUpdatePostErr({res}))
    }
    return res
  }
}




