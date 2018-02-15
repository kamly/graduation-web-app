import {handleActions} from 'redux-actions'


export const post = handleActions({
  /*
   * 动态，文章创建时间排序
   */
  FETCH_GET_INDEX_POST_REQ: (state, action) => ({
    ...state, ...
      {
        isFetching: true,
      }
  }),
  FETCH_GET_INDEX_POST_RCV: (state, action) => {
    let nextState = {...state}
    let indexPost = action.payload.res.data.message
    if (indexPost.length !== 0) {
      const newIndex = nextState.indexPost
      newIndex.push(...indexPost)
      nextState.indexPost = newIndex
    }
    nextState.isFetching = false
    return nextState
  },
  FETCH_GET_INDEX_POST_ERR: (state, action) => {
    // 发生错误，wpy页面进行处理，这里看后续需求添加内容
    let nextState = {...state}
    nextState.isFetching = false
    return nextState
  },

  /*
   * 清空 indexPost
   */
  FETCH_EMPTY_INDEX_POST: (state, action) => {
    let nextState = {...state}
    nextState.indexPost = []
    return nextState
  },

  /*
   * 具体文章
   */
  FETCH_GET_SHOW_POST_REQ: (state, action) => ({
    ...state, ...
      {
        isFetching: true,
      }
  }),
  // 这里可以分开不同的redux
  FETCH_GET_SHOW_POST_RCV: (state, action) => {
    let nextState = {...state}
    let showPost = action.payload.res.data.message
    if (action.payload.showType === 'show') {
      nextState.showPost = showPost
    } else if (action.payload.showType === 'edit') {
      nextState.showPostDraft = showPost
    }
    nextState.isFetching = false
    return nextState
  },
  FETCH_GET_SHOW_POST_ERR: (state, action) => {
    // 发生错误，wpy页面进行处理，这里看后续需求添加内容
    let nextState = {...state}
    nextState.isFetching = false
    return nextState
  },

  /*
  * 具体文章分享
  */
  FETCH_GET_SHOW_POST_SHARE_REQ: (state, action) => ({
    ...state, ...
      {
        isFetching: true,
      }
  }),
  FETCH_GET_SHOW_POST_SHARE_RCV: (state, action) => {
    let nextState = {...state}
    let showPostShare = action.payload.res.data.message
    nextState.showPostShare = showPostShare
    nextState.isFetching = false
    return nextState
  },
  FETCH_GET_SHOW_POST_SHARE_ERR: (state, action) => {
    // 发生错误，wpy页面进行处理，这里看后续需求添加内容
    let nextState = {...state}
    nextState.isFetching = false
    return nextState
  },

  /*
   * 点赞
   */
  FETCH_ZAN_REQ: (state, action) => ({
    ...state, ...
      {
        isFetching: true,
      }
  }),
  FETCH_ZAN_RCV: (state, action) => {
    let nextState = {...state}
    nextState.showPost.isZan = true
    nextState.showPost.zans_count = nextState.showPost.zans_count + 1;
    nextState.isFetching = false
    return nextState
  },
  FETCH_ZAN_ERR: (state, action) => {
    // 发生错误，wpy页面进行处理，这里看后续需求添加内容
    let nextState = {...state}
    nextState.isFetching = false
    return nextState
  },


  /*
   * 取消点赞
   */
  FETCH_UN_ZAN_REQ: (state, action) => ({
    ...state, ...
      {
        isFetching: true,
      }
  }),
  FETCH_UN_ZAN_RCV: (state, action) => {
    let nextState = {...state}
    nextState.showPost.isZan = false
    nextState.showPost.zans_count = nextState.showPost.zans_count - 1;
    return nextState
  },
  FETCH_UN_ZAN_ERR: (state, action) => {
    // 发生错误，wpy页面进行处理，这里看后续需求添加内容
    let nextState = {...state}
    nextState.isFetching = false
    return nextState
  },

  /*
   * 创建
   */
  FETCH_cret_POST_REQ: (state, action) => ({
    ...state, ...
      {
        isFetching: true,
      }
  }),
  FETCH_CRETE_POST_RCV: (state, action) => {
    // 发生错误，wpy页面进行处理，这里看后续需求添加内容
    let nextState = {...state}
    nextState.isFetching = false
    return nextState
  },
  FETCH_CRETE_POST_ERR: (state, action) => {
    // 发生错误，wpy页面进行处理，这里看后续需求添加内容
    let nextState = {...state}
    nextState.isFetching = false
    return nextState
  },

  /*
   * 删除
   */
  FETCH_DELETE_POST_REQ: (state, action) => ({
    ...state, ...
      {
        isFetching: true,
      }
  }),
  FETCH_DELETE_POST_RCV: (state, action) => {
    let nextState = {...state}
    nextState.isFetching = false
    return nextState
  },
  FETCH_DELETE_POST_ERR: (state, action) => {
    let nextState = {...state}
    nextState.isFetching = false
    return nextState
  },

  /*
   * 编辑
   */
  FETCH_UPDATE_POST_REQ: (state, action) => ({
    ...state, ...
      {
        isFetching: true,
      }
  }),
  FETCH_UPDATE_POST_RCV: (state, action) => {
    let nextState = {...state}
    nextState.isFetching = false
    return nextState
  },
  FETCH_UPDATE_POST_ERR: (state, action) => {
    // 发生错误，wpy页面进行处理，这里看后续需求添加内容
    let nextState = {...state}
    nextState.isFetching = false
    return nextState
  },

  /*
   * 创建post 更新indexPost
   */
  FETCH_CREATE_POST_INDEX_POST: (state, action) => {
    let nextState = {...state}
    let post = action.payload.newPost
    nextState.indexPost.unshift(post)
    return nextState
  },

  /*
   * 删除post 更新indexPost
   */
  FETCH_DELETE_POST_INDEX_POST: (state, action) => {
    let nextState = {...state}
    let id = parseInt(action.payload.id)
    let arr = nextState.indexPost
    var i = 0;
    for (; i < arr.length; i++) {
      if (arr[i].id === id) {
        arr.splice(i, 1);
        break;
      }
    }
    nextState.indexPost = arr
    return nextState
  },

  /*
   * 更新post 更新showPost
   */
  FETCH_UPDATE_POST_SHOW_POST: (state, action) => {
    let nextState = {...state}
    let post = action.payload.newPost
    nextState.showPost = post
    return nextState
  },

  /*
   * 更新post 更新indexPost
   */
  FETCH_UPDATE_POST_INDEX_POST: (state, action) => {
    let nextState = {...state}
    let post = action.payload.newPost
    nextState.indexPost.forEach((value, index) => {
      if (value.id === post.id) {
        value.title = post.title
        value.des = post.des
        value.content = post.content
        value.images = post.images
        value.imagesId = post.imagesId
      }
    })
    return nextState
  },

  /*
   * zan 更新 indexPost
   */
  FETCH_UPDATE_ZAN_INDEX_POST: (state, action) => {
    let nextState = {...state}
    let id = parseInt(action.payload.id)
    nextState.indexPost.forEach((value, index) => {
      if (value.id === id) {
        value.zans_count = value.zans_count + 1
      }
    })
    return nextState
  },

  /*
   * unzan 更新 indexPost
   */
  FETCH_UPDATE_UN_ZAN_INDEX_POST: (state, action) => {
    let nextState = {...state}
    let id = parseInt(action.payload.id)
    nextState.indexPost.forEach((value, index) => {
      if (value.id === id) {
        value.zans_count = value.zans_count - 1
      }
    })
    return nextState
  },


  /*
   * 创建comment 更新showPost
   */
  FETCH_CREATE_COMMENT_SHOW_POST: (state, action) => {
    let nextState = {...state}
    nextState.showPost.comments_count = nextState.showPost.comments_count + 1
    return nextState
  },


  /*
   * 创建comment 更新indexPost
   */
  FETCH_CREATE_COMMENT_INDEX_POST: (state, action) => {
    let nextState = {...state}
    let postId = parseInt(action.payload.postId)
    nextState.indexPost.forEach((value, index) => {
      if (value.id === postId) {
        value.comments_count = value.comments_count + 1
      }
    })
    return nextState
  },

  /*
   * 删除comment 更新showPost
   */
  FETCH_DELETE_COMMENT_SHOW_POST: (state, action) => {
    let nextState = {...state}
    nextState.showPost.comments_count = nextState.showPost.comments_count - 1
    return nextState
  },


  /*
   * 删除comment 更新indexPost
   */
  FETCH_DELETE_COMMENT_INDEX_POST: (state, action) => {
    let nextState = {...state}
    let postId = parseInt(action.payload.postId)
    nextState.indexPost.forEach((value, index) => {
      if (value.id === postId) {
        value.comments_count = value.comments_count - 1
      }
    })
    return nextState
  },


}, {
  isFetching: false,
  indexPost: [],
  showPost: [],
  showPostDraft: [],
  showPostShare: [],
})
