import {handleActions} from 'redux-actions'

export const user = handleActions({

  /*
   * 绑定邮箱
   */
  FETCH_BINDING_EMAIL_REQ: (state, action) => ({
    ...state, ...
      {
        isFetching: true,
      }
  }),
  FETCH_BINDING_EMAIL_RCV: (state, action) => {
    let nextState = {...state}
    nextState.isFetching = false
    return nextState
  },
  FETCH_FAN_ERR: (state, action) => {
    // 发生错误，wpy页面进行处理，这里看后续需求添加内容
    let nextState = {...state}
    nextState.isFetching = false
    return nextState
  },

  /*
   * 关注
   */
  FETCH_FAN_REQ: (state, action) => ({
    ...state, ...
      {
        isFetching: true,
      }
  }),
  FETCH_FAN_RCV: (state, action) => {
    // 发生错误，wpy页面进行处理，这里看后续需求添加内容
    let nextState = {...state}
    nextState.isFetching = false
    return nextState
  },
  FETCH_UN_FAN_ERR: (state, action) => {
    // 发生错误，wpy页面进行处理，这里看后续需求添加内容
    let nextState = {...state}
    nextState.isFetching = false
    return nextState
  },

  /*
   * 取消关注   个人页面，关注页面
   */
  FETCH_UN_FAN_REQ: (state, action) => ({
    ...state, ...
      {
        isFetching: true,
      }
  }),
  FETCH_UN_FAN_RCV: (state, action) => {
    // 发生错误，wpy页面进行处理，这里看后续需求添加内容
    let nextState = {...state}
    let id = parseInt(action.payload.id)
    let arr = nextState.userStars
    var i = 0;
    for (; i < arr.length; i++) {
      if (arr[i].star_id === id) {
        arr.splice(i, 1);
        break;
      }
    }
    nextState.userStars = arr
    nextState.isFetching = false
    return nextState
  },
  FETCH_BINDING_EMAIL_ERR: (state, action) => {
    // 发生错误，wpy页面进行处理，这里看后续需求添加内容
    let nextState = {...state}
    nextState.isFetching = false
    return nextState
  },

  /*
   * 用户文章
   */
  FETCH_GET_POSTS_REQ: (state, action) => ({
    ...state, ...
      {
        isFetching: true,
      }
  }),
  FETCH_GET_POSTS_RCV: (state, action) => {
    let nextState = {...state}
    let userPosts = action.payload.res.data.message
    nextState.userPosts = userPosts
    nextState.isFetching = false
    return nextState
  },
  FETCH_GET_POSTS_ERR: (state, action) => {
    // 发生错误，wpy页面进行处理，这里看后续需求添加内容
    let nextState = {...state}
    nextState.isFetching = false
    return nextState
  },

  /*
   * 用户评论
   */
  FETCH_GET_COMMENTS_REQ: (state, action) => ({
    ...state, ...
      {
        isFetching: true,
      }
  }),
  FETCH_GET_COMMENTS_RCV: (state, action) => {
    let nextState = {...state}
    let userComments = action.payload.res.data.message
    nextState.userComments = userComments
    nextState.isFetching = false
    return nextState
  },
  FETCH_GET_COMMENTS_ERR: (state, action) => {
    // 发生错误，wpy页面进行处理，这里看后续需求添加内容
    let nextState = {...state}
    nextState.isFetching = false
    return nextState
  },


  /*
  * 通知
  */
  FETCH_GET_NOTICES_REQ: (state, action) => ({
    ...state, ...
      {
        isFetching: true,
      }
  }),
  FETCH_GET_NOTICES_RCV: (state, action) => {
    let nextState = {...state}
    let userNotices = action.payload.res.data.message
    nextState.userNotices = userNotices
    nextState.isFetching = false
    return nextState
  },
  FETCH_GET_NOTICES_ERR: (state, action) => {
    // 发生错误，wpy页面进行处理，这里看后续需求添加内容
    let nextState = {...state}
    nextState.isFetching = false
    return nextState
  },


  /*
   * 关注
   */
  FETCH_GET_STARS_REQ: (state, action) => ({
    ...state, ...
      {
        isFetching: true,
      }
  }),
  FETCH_GET_STARS_RCV: (state, action) => {
    let nextState = {...state}
    let userStars = action.payload.res.data.message
    nextState.userStars = userStars
    nextState.isFetching = false
    return nextState
  },
  FETCH_GET_STARS_ERR: (state, action) => {
    // 发生错误，wpy页面进行处理，这里看后续需求添加内容
    let nextState = {...state}
    nextState.isFetching = false
    return nextState
  },

  /*
   * 粉丝
   */
  FETCH_GET_FANS_REQ: (state, action) => ({
    ...state, ...
      {
        isFetching: true,
      }
  }),
  FETCH_GET_FANS_RCV: (state, action) => {
    let nextState = {...state}
    let userFans = action.payload.res.data.message
    nextState.userFans = userFans
    nextState.isFetching = false
    return nextState
  },
  FETCH_GET_FANS_ERR: (state, action) => {
    // 发生错误，wpy页面进行处理，这里看后续需求添加内容
    let nextState = {...state}
    nextState.isFetching = false
    return nextState
  },

  /*
   * 获取某个用户的个人资料
   */
  FETCH_GET_USER_INFO_REQ: (state, action) => ({
    ...state, ...
      {
        isFetching: true,
      }
  }),
  // 这里可以分开不同的redux
  FETCH_GET_USER_INFO_RCV: (state, action) => {
    let nextState = {...state}
    let userInfo = action.payload.res.data.message
    if (action.payload.showType === 'my') {
      nextState.myInfo = userInfo
    } else if (action.payload.showType === 'edit') {
      nextState.userInfoDraft = userInfo
    } else if (action.payload.showType === 'show') {
      nextState.showInfo = userInfo
    }
    nextState.isFetching = false
    return nextState
  },
  FETCH_GET_USER_INFO_ERR: (state, action) => {
    // 发生错误，wpy页面进行处理，这里看后续需求添加内容
    let nextState = {...state}
    nextState.isFetching = false
    return nextState
  },

  /*
   * 更新用户信息
   */
  FETCH_UPDATE_USER_INFO_REQ: (state, action) => ({
    ...state, ...
      {
        isFetching: true,
      }
  }),
  FETCH_UPDATE_USER_INFO_RCV: (state, action) => {
    let nextState = {...state}
    let user = action.payload.res.data.message.user
    // showInfo
    nextState.showInfo.name = user.name
    nextState.showInfo.des = user.des
    nextState.showInfo.avatar = user.avatar
    nextState.showInfo.note = user.note
    nextState.showInfo.html = user.html
    nextState.showInfo.sex = user.sex
    // myInfo
    nextState.myInfo.name = user.name
    nextState.myInfo.des = user.des
    nextState.myInfo.avatar = user.avatar
    nextState.myInfo.note = user.note
    nextState.myInfo.html = user.html
    nextState.myInfo.sex = user.sex
    nextState.isFetching = false
    return nextState
  },
  FETCH_UPDATE_USER_INFO_ERR: (state, action) => {
    // 发生错误，wpy页面进行处理，这里看后续需求添加内容
    let nextState = {...state}
    nextState.isFetching = false
    return nextState
  },

  /*
   * 个人搜索记录
   */
  FETCH_SEARCH_REQ: (state, action) => ({
    ...state, ...
      {
        isFetching: true,
      }
  }),
  FETCH_SEARCH_RCV: (state, action) => {
    let nextState = {...state}
    let userSearch = action.payload.res.data.message
    nextState.userSearch = userSearch
    nextState.isFetching = false
    return nextState
  },
  FETCH_SEARCH_ERR: (state, action) => {
    // 发生错误，wpy页面进行处理，这里看后续需求添加内容
    let nextState = {...state}
    nextState.isFetching = false
    return nextState
  },

  /*
   * 个人浏览记录
   */
  FETCH_BROWSE_REQ: (state, action) => ({
    ...state, ...
      {
        isFetching: true,
      }
  }),
  FETCH_BROWSE_RCV: (state, action) => {
    let nextState = {...state}
    let userBrowse = action.payload.res.data.message
    nextState.userBrowse = userBrowse
    nextState.isFetching = false
    return nextState
  },
  FETCH_BROWSE_ERR: (state, action) => {
    // 发生错误，wpy页面进行处理，这里看后续需求添加内容
    let nextState = {...state}
    nextState.isFetching = false
    return nextState
  },

  /*
   * 更新post 更新userPosts
   */
  FETCH_UPDATE_POST_USER_POSTS: (state, action) => {
    let nextState = {...state}
    let post = action.payload.newPost
    if (nextState.userPosts.length > 0) {
      nextState.userPosts.forEach((value, index) => {
        if (value.id === post.id) {
          value.title = post.title
          value.des = post.des
          value.content = post.content
        }
      })
    }
    return nextState
  },


  /*
   * 更新post 更新userComment
   */
  FETCH_UPDATE_POST_USER_COMMENTS: (state, action) => {
    let nextState = {...state}
    let post = action.payload.newPost
    if (nextState.userComments.length > 0) {
      nextState.userComments.forEach((value, index) => {
        if (value.post.id === post.id) {
          value.post.title = post.title
          value.post.des = post.des
          value.post.content = post.content
        }
      })
    }
    return nextState
  },

  /*
   * 创建post 更新userPost
   */
  FETCH_CREATE_POST_USER_POSTS: (state, action) => {
    let nextState = {...state}
    let post = action.payload.newPost
    if (nextState.userPosts.length > 0) {
      nextState.userPosts.unshift(post)
    }
    return nextState
  },

  /*
   * 删除post 更新userPosts
   */
  FETCH_DELETE_POST_USER_POSTS: (state, action) => {
    let nextState = {...state}
    let id = parseInt(action.payload.id)
    if (nextState.userPosts.length > 0) {
      let arr = nextState.userPosts
      var i = 0;
      for (; i < arr.length; i++) {
        if (arr[i].id === id) {
          arr.splice(i, 1);
          break;
        }
      }
      nextState.userPosts = arr
    }
    return nextState
  },

  /*
   * 删除post 更新userComments
   */
  FETCH_DELETE_POST_USER_COMMENTS: (state, action) => {
    let nextState = {...state}
    let id = parseInt(action.payload.id)
    if (nextState.userComments.length > 0) {
      let arr = nextState.userComments
      var i = 0;
      for (; i < arr.length; i++) {
        if (arr[i].post.id === id) {
          arr.splice(i, 1);
          break;
        }
      }
      nextState.userComments = arr
    }
    return nextState
  },

  /*
   * 创建comment 更新userComment
   */
  FETCH_CREATE_COMMENT_USER_COMMENTS: (state, action) => {
    let nextState = {...state}
    let comment = action.payload.newComment
    if (nextState.userComments.length > 0) {
      nextState.userComments.unshift(comment)
    }
    return nextState
  },

  /*
   * 删除comment 更新userComments
   */
  FETCH_DELETE_COMMENT_USER_COMMENTS: (state, action) => {
    let nextState = {...state}
    let id = parseInt(action.payload.id)
    if (nextState.userComments.length > 0) {
      let arr = nextState.userComments
      var i = 0;
      for (; i < arr.length; i++) {
        if (arr[i].id === id) {
          arr.splice(i, 1);
          break;
        }
      }
      nextState.userComments = arr
    }
    return nextState
  },

  /*
   * 更新comment 更新userComments
   */
  FETCH_UPDATE_COMMENT_USER_COMMENTS: (state, action) => {
    let nextState = {...state}
    let comment = action.payload.newComment
    if (nextState.userComments.length > 0) {
      nextState.userComments.forEach((value, index) => {
        if (value.id === comment.id) {
          value.content = comment.content
          value.images = comment.images
          value.imagesId = comment.imagesId
        }
      })
    }
    return nextState
  },

}, {
  isFetching: false,
  userPosts: [],
  userComments: [],
  userNotices: [],
  userStars: [],
  userFans: [],
  myInfo: [], // 个人
  userInfoDraft: [],
  showInfo: [], // 展示
  userSearch: [],
  userBrowse: [],
})
