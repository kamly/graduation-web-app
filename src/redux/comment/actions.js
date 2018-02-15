import {createActions} from 'redux-actions'
import commentApi from '../../interfaces/commentApi'
import {isSuccess} from '../../utils/common'
import {actions as reduxAction} from '../redux/actions'

export const actions = createActions({

  // 热门，评论创建时间排序
  FETCH_GET_INDEX_COMMENT_REQ: null,
  FETCH_GET_INDEX_COMMENT_RCV: null,
  FETCH_GET_INDEX_COMMENT_ERR: null,

  // 清空 indexPost
  FETCH_EMPTY_INDEX_COMMENT: null,

  // 文章的评论
  FETCH_GET_POST_COMMENTS_REQ: null,
  FETCH_GET_POST_COMMENTS_RCV: null,
  FETCH_GET_POST_COMMENTS_ERR: null,

  // 具体评论
  FETCH_GET_SHOW_COMMENT_REQ: null,
  FETCH_GET_SHOW_COMMENT_RCV: null,
  FETCH_GET_SHOW_COMMENT_ERR: null,

  // 创建
  FETCH_CREATE_COMMENT_REQ: null,
  FETCH_CREATE_COMMENT_RCV: null,
  FETCH_CREATE_COMMENT_ERR: null,

  // 删除
  FETCH_DELETE_COMMENT_REQ: null,
  FETCH_DELETE_COMMENT_RCV: null,
  FETCH_DELETE_COMMENT_ERR: null,

  // 更新
  FETCH_UPDATE_COMMENT_REQ: null,
  FETCH_UPDATE_COMMENT_RCV: null,
  FETCH_UPDATE_COMMENT_ERR: null,

  // 创建comment 更新indexComment
  FETCH_CREATE_COMMENT_INDEX_COMMENT: null,

  // 删除comment 更新indexComment
  FETCH_DELETE_COMMENT_INDEX_COMMENT: null,

  // 删除comment 更新postComments
  FETCH_DELETE_COMMENT_POST_COMMENTS: null,

  // 更新comment 更新indexComment
  FETCH_UPDATE_COMMENT_INDEX_COMMENT: null,

  // 更新comment 更新postComments
  FETCH_UPDATE_COMMENT_POST_COMMENTS: null,

})


/**
 * 热门，评论创建时间排序 ok
 */
export function apiFetchGetIndexCommentRedux(data) {

  const {token, page, size} = data;

  return async function (dispatch) {
    dispatch(actions.fetchGetIndexCommentReq())
    const res = await commentApi.getIndexComment(token, page, size)
    if (isSuccess(res.data)) {
      dispatch(actions.fetchGetIndexCommentRcv({res}))
    } else {
      dispatch(actions.fetchGetIndexCommentErr({res}))
    }
    return res
  }
}

/**
 * 清空 indexComment ok
 */
export function apiFetchEmptyIndexCommentRedux() {
  return async function (dispatch) {
    dispatch(actions.fetchEmptyIndexComment())
  }
}

/**
 * 文章的评论 ok
 */
export function apiFetchGetPostCommentsRedux(data) {

  const {token, postId} = data;

  return async function (dispatch) {
    dispatch(actions.fetchGetPostCommentsReq())
    const res = await commentApi.getPostComments(token, postId)
    if (isSuccess(res.data)) {
      dispatch(actions.fetchGetPostCommentsRcv({res}))
    } else {
      dispatch(actions.fetchGetPostCommentsErr({res}))
    }
    return res
  }
}

/**
 * 具体评论 ok
 */
export function apiFetchGetShowCommentRedux(data) {

  const {token, id, showType} = data;

  return async function (dispatch) {
    dispatch(actions.fetchGetShowCommentReq())
    const res = await commentApi.getShowComment(token, id, showType)
    if (isSuccess(res.data)) {
      dispatch(actions.fetchGetShowCommentRcv({res, showType}))
    } else {
      dispatch(actions.fetchGetShowCommentErr({res}))
    }
    return res
  }
}

/**
 * 创建  ok
 *
 * 影响  PS:有可能没有值
 * post showPost +1
 * post indexPost +1
 * comment indexComment add
 * user userComments add
 */
export function apiFetchCreateCommentRedux(data) {

  const {token, postId, content, imagesId} = data;

  return async function (dispatch) {
    dispatch(actions.fetchCreateCommentReq())
    const res = await commentApi.createComment(token, postId, content, imagesId)
    if (isSuccess(res.data)) {
      const newComment = res.data.message.comment
      dispatch(actions.fetchCreateCommentRcv({newComment})) // 无操作
      dispatch(actions.fetchCreateCommentIndexComment({newComment})) // indexComment
      dispatch(reduxAction.fetchCreateCommentShowPost({newComment})) // showPost
      dispatch(reduxAction.fetchCreateCommentIndexPost({newComment, postId: postId})) // indexPost
      dispatch(reduxAction.fetchCreateCommentUserComments({newComment})) // userComment
    } else {
      dispatch(actions.fetchCreateCommentErr({res}))
    }
    return res
  }
}


/**
 * 删除  ok
 *
 * 影响  PS:有可能没有值
 * post showPost -1
 * post indexPost -1
 * comment indexComment del
 * comment postComments del
 * user userComments del
 */
export function apiFetchDeteleCommentRedux(data) {

  const {token, id, postId} = data;

  return async function (dispatch) {
    dispatch(actions.fetchDeleteCommentReq())
    const res = await commentApi.deleteComment(token, id)
    if (isSuccess(res.data)) {
      dispatch(actions.fetchDeleteCommentRcv({res})) // 无操作
      dispatch(actions.fetchDeleteCommentIndexComment({res, id: id})) // indexComment
      dispatch(actions.fetchDeleteCommentPostComments({res, id: id})) // postComments
      dispatch(reduxAction.fetchDeleteCommentShowPost({res})) // showPost
      dispatch(reduxAction.fetchDeleteCommentIndexPost({res, postId: postId})) // indexPost
      dispatch(reduxAction.fetchDeleteCommentUserComments({res, id: id})) // userComment
    } else {
      dispatch(actions.fetchDeleteCommentErr(e))
    }
    return res
  }
}


/**
 * 编辑  ok
 *
 * 影响  PS:有可能没有值
 * comment postComments
 * comment indexComment update
 * user userComments update
 */
export function apiFetchUpdateCommentRedux(data) {

  const {token, id, content, imagesId} = data;

  return async function (dispatch) {
    dispatch(actions.fetchUpdateCommentReq())
    const res = await commentApi.updateComment(token, id, content, imagesId)
    if (isSuccess(res.data)) {
      const newComment = res.data.message.comment
      dispatch(actions.fetchUpdateCommentRcv({newComment})) // 无操作
      dispatch(actions.fetchUpdateCommentIndexComment({newComment})) // indexComment
      dispatch(actions.fetchUpdateCommentPostComments({newComment})) // postComments
      dispatch(reduxAction.fetchUpdateCommentUserComments({newComment})) // userComment
    } else {
      dispatch(actions.fetchUpdateCommentErr(e))
    }
    return res
  }
}




