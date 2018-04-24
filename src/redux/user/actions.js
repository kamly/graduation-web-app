import {createActions} from 'redux-actions'
import userApi from '../../interfaces/userApi'
import {isSuccess} from '../../utils/common'


export const actions = createActions({

  // 绑定
  FETCH_BINDING_EMAIL_REQ: null,
  FETCH_BINDING_EMAIL_RCV: null,
  FETCH_BINDING_EMAIL_ERR: null,

  // 解绑
  FETCH_UNBINDING_EMAIL_REQ: null,
  FETCH_UNBINDING_EMAIL_RCV: null,
  FETCH_UNBINDING_EMAIL_ERR: null,

  // 关注
  FETCH_FAN_REQ: null,
  FETCH_FAN_RCV: null,
  FETCH_FAN_ERR: null,

  // 取消关注
  FETCH_UN_FAN_REQ: null,
  FETCH_UN_FAN_RCV: null,
  FETCH_UN_FAN_ERR: null,

  // 用户文章
  FETCH_GET_POSTS_REQ: null,
  FETCH_GET_POSTS_RCV: null,
  FETCH_GET_POSTS_ERR: null,


  // 用户评论
  FETCH_GET_COMMENTS_REQ: null,
  FETCH_GET_COMMENTS_RCV: null,
  FETCH_GET_COMMENTS_ERR: null,

  // 通知
  FETCH_GET_NOTICES_REQ: null,
  FETCH_GET_NOTICES_RCV: null,
  FETCH_GET_NOTICES_ERR: null,

  // 关注
  FETCH_GET_STARS_REQ: null,
  FETCH_GET_STARS_RCV: null,
  FETCH_GET_STARS_ERR: null,

  // 粉丝
  FETCH_GET_FANS_REQ: null,
  FETCH_GET_FANS_RCV: null,
  FETCH_GET_FANS_ERR: null,

  // 获取某个用户的个人资料
  FETCH_GET_USER_INFO_REQ: null,
  FETCH_GET_USER_INFO_RCV: null,
  FETCH_GET_USER_INFO_ERR: null,

  // 更新用户信息
  FETCH_UPDATE_USER_INFO_REQ: null,
  FETCH_UPDATE_USER_INFO_RCV: null,
  FETCH_UPDATE_USER_INFO_ERR: null,

  // 个人搜索记录
  FETCH_SEARCH_REQ: null,
  FETCH_SEARCH_RCV: null,
  FETCH_SEARCH_ERR: null,

  // 个人浏览记录
  FETCH_BROWSE_REQ: null,
  FETCH_BROWSE_RCV: null,
  FETCH_BROWSE_ERR: null,
})

// 绑定 ok
// token 不使用state获取，因为已经存储在Storage里面了
export function apiFetchBindingEmailRedux(data) {

  const {token, email, password, rawData, signature, encryptedData, iv} = data;

  return async function (dispatch) {
    dispatch(actions.fetchBindingEmailReq())
    const res = await userApi.bindingEmail(token, email, password, rawData, signature, encryptedData, iv)
    if (isSuccess(res.data)) {
      dispatch(actions.fetchBindingEmailRcv({res}))
    } else {
      dispatch(actions.fetchBindingEmailErr({res}))
    }
    return res
  }
}


// 解绑 ok
export function apiFetchUnbindingEmailRedux(data) {

  const {token} = data;

  return async function (dispatch) {
    dispatch(actions.fetchUnbindingEmailReq())
    const res = await userApi.unbindingEmail(token)
    if (isSuccess(res.data)) {
      dispatch(actions.fetchUnbindingEmailRcv({res}))
    } else {
      dispatch(actions.fetchUnbindingEmailErr({res}))
    }
    return res
  }
}

// 关注 ok
export function apiFetchFanRedux(data) {

  const {token, id} = data;

  return async function (dispatch) {
    dispatch(actions.fetchFanReq())
    const res = await userApi.fan(token, id)
    if (isSuccess(res.data)) {
      dispatch(actions.fetchFanRcv({res, id: id}))
    } else {
      dispatch(actions.fetchFanErr({res}))
    }
    return res
  }
}

/**
 * 取消关注  ok
 *
 * 影响  PS:有可能没有值
 * user userStars
 *
 */
export function apiFetchUnFanRedux(data) {

  const {token, id} = data;

  return async function (dispatch) {
    dispatch(actions.fetchUnFanReq())
    const res = await userApi.unFan(token, id)
    if (isSuccess(res.data)) {
      dispatch(actions.fetchUnFanRcv({res, id: id}))
    } else {
      dispatch(actions.fetchUnFanErr({res}))
    }
    return res
  }
}

// 用户文章 ok
export function apiFetchGetPostsRedux(data) {

  const {token} = data;

  return async function (dispatch) {
    dispatch(actions.fetchGetPostsReq())
    const res = await userApi.posts(token)
    if (isSuccess(res.data)) {
      dispatch(actions.fetchGetPostsRcv({res}))
    } else {
      dispatch(actions.fetchGetPostsErr({res}))
    }
    return res
  }
}

// 用户评论 ok
export function apiFetchGetCommentsRedux(data) {

  const {token} = data;

  return async function (dispatch) {
    dispatch(actions.fetchGetCommentsReq())
    const res = await userApi.comments(token)
    if (isSuccess(res.data)) {
      dispatch(actions.fetchGetCommentsRcv({res}))
    } else {
      dispatch(actions.fetchGetCommentsErr({res}))
    }
    return res
  }
}

// 用户通知 ok
export function apiFetchGetNoticesRedux(data) {

  const {token} = data;

  return async function (dispatch) {
    dispatch(actions.fetchGetNoticesReq())
    const res = await userApi.notices(token)
    if (isSuccess(res.data)) {
      dispatch(actions.fetchGetNoticesRcv({res}))
    } else {
      dispatch(actions.fetchGetNoticesErr({res}))
    }
    return res
  }
}

// 关注 ok
export function apiFetchGetStarsRedux(data) {

  const {token} = data;

  return async function (dispatch) {
    dispatch(actions.fetchGetStarsReq())
    const res = await userApi.stars(token)
    if (isSuccess(res.data)) {
      dispatch(actions.fetchGetStarsRcv({res}))
    } else {
      dispatch(actions.fetchGetStarsErr({res}))
    }
    return res
  }
}

// 粉丝 ok
export function apiFetchGetFansRedux(data) {

  const {token} = data;

  return async function (dispatch) {
    dispatch(actions.fetchGetFansReq())
    const res = await userApi.fans(token)
    if (isSuccess(res.data)) {
      dispatch(actions.fetchGetFansRcv({res}))
    } else {
      dispatch(actions.fetchGetFansErr({res}))
    }
    return res
  }
}

// 获取某个用户的个人资料 ok
export function apiFetchGetUserInfoRedux(data) {

  const {token, id, showType} = data;

  return async function (dispatch) {
    dispatch(actions.fetchGetUserInfoReq())
    const res = await userApi.getUserInfo(token, id, showType)
    if (isSuccess(res.data)) {
      dispatch(actions.fetchGetUserInfoRcv({showType, res}))
    } else {
      dispatch(actions.fetchGetUserInfoErr({res}))
    }
    return res
  }
}


/**
 * 更新用户信息  ok
 *
 * 影响  PS:有可能没有值
 * user myInfo
 * user showInfo
 *
 */
export function apiFetchUpdateUserInfoRedux(data) {

  const {token, id, name, avatar, sex, des, note} = data;

  return async function (dispatch) {
    dispatch(actions.fetchUpdateUserInfoReq())
    const res = await userApi.updateUserInfo(token, id, name, avatar, sex, des, note)
    if (isSuccess(res.data)) {
      dispatch(actions.fetchUpdateUserInfoRcv({res}))
    } else {
      dispatch(actions.fetchUpdateUserInfoErr({res}))
    }
    return res
  }
}

// 个人搜索记录 ok
export function apiFetchSearchRedux(data) {

  const {token, num} = data;

  return async function (dispatch) {
    dispatch(actions.fetchSearchReq())
    const res = await userApi.search(token, num)
    if (isSuccess(res.data)) {
      dispatch(actions.fetchSearchRcv({res}))
    } else {
      dispatch(actions.fetchSearchErr({res}))
    }
    return res
  }
}

// 个人浏览记录 ok
export function apiFetchBrowseRedux(data) {

  const {token, num} = data;

  return async function (dispatch) {
    dispatch(actions.fetchBrowseReq())
    const res = await userApi.browse(token, num)
    if (isSuccess(res.data)) {
      dispatch(actions.fetchBrowseRcv({res}))
    } else {
      dispatch(actions.fetchBrowseErr({res}))
    }
    return res
  }
}





