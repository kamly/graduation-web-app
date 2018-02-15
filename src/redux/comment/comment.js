import {handleActions} from 'redux-actions'

export const comment = handleActions({

  /*
   * 热门，评论创建时间排序
   */
  FETCH_GET_INDEX_COMMENT_REQ: (state, action) => ({
    ...state, ...
      {
        isFetching: true,
      }
  }),
  FETCH_GET_INDEX_COMMENT_RCV: (state, action) => {
    let nextState = {...state}
    let indexComment = action.payload.res.data.message
    if (indexComment.length !== 0) {
      const newIndex = nextState.indexComment
      newIndex.push(...indexComment)
      nextState.indexComment = newIndex
    }
    nextState.isFetching = false
    return nextState
  },
  FETCH_GET_INDEX_COMMENT_ERR: (state, action) => {
    // 发生错误，wpy页面进行处理，这里看后续需求添加内容
    let nextState = {...state}
    nextState.isFetching = false
    return nextState
  },

  /*
   * 清空 indexPost
   */
  FETCH_EMPTY_INDEX_COMMENT: (state, action) => {
    let nextState = {...state}
    nextState.indexComment = []
    return nextState
  },


  /*
   * 文章的评论
   */
  FETCH_GET_POST_COMMENTS_REQ: (state, action) => ({
    ...state, ...
      {
        isFetching: true,
      }
  }),
  FETCH_GET_POST_COMMENTS_RCV: (state, action) => {
    let nextState = {...state}
    let postComments = action.payload.res.data.message
    nextState.postComments = postComments
    nextState.isFetching = false
    return nextState
  },
  FETCH_GET_POST_COMMENTS_ERR: (state, action) => {
    // 发生错误，wpy页面进行处理，这里看后续需求添加内容
    let nextState = {...state}
    nextState.isFetching = false
    return nextState
  },

  /*
   * 具体的评论
   */
  FETCH_GET_SHOW_COMMENT_REQ: (state, action) => ({
    ...state, ...
      {
        isFetching: true,
      }
  }),
  FETCH_GET_SHOW_COMMENT_RCV: (state, action) => {
    let nextState = {...state}
    let showComment = action.payload.res.data.message
    if (action.payload.showType === 'show') {
      nextState.showComment = showComment  // 暂未使用
    } else if (action.payload.showType === 'edit') {
      nextState.showCommentDraft = showComment
    }
    nextState.isFetching = false
    return nextState
  },
  FETCH_GET_SHOW_COMMENT_ERR: (state, action) => {
    // 发生错误，wpy页面进行处理，这里看后续需求添加内容
    let nextState = {...state}
    nextState.isFetching = false
    return nextState
  },

  /*
   * 创建
   */
  FETCH_CREATE_COMMENT_REQ: (state, action) => ({
    ...state, ...
      {
        isFetching: true,
      }
  }),
  FETCH_CREATE_COMMENT_RCV: (state, action) => {
    let nextState = {...state}
    nextState.isFetching = false
    return nextState
  },
  FETCH_CREATE_COMMENT_ERR: (state, action) => {
    // 发生错误，wpy页面进行处理，这里看后续需求添加内容
    let nextState = {...state}
    nextState.isFetching = false
    return nextState
  },

  /*
   * 删除
   */
  FETCH_DELETE_COMMENT_REQ: (state, action) => ({
    ...state, ...
      {
        isFetching: true,
      }
  }),
  FETCH_DELETE_COMMENT_RCV: (state, action) => {
    let nextState = {...state}
    nextState.isFetching = false
    return nextState
  },
  FETCH_DELETE_COMMENT_ERR: (state, action) => {
    // 发生错误，wpy页面进行处理，这里看后续需求添加内容
    let nextState = {...state}
    nextState.isFetching = false
    return nextState
  },

  /*
   * 编辑
   */
  FETCH_UPDATE_COMMENT_REQ: (state, action) => ({
    ...state, ...
      {
        isFetching: true,
      }
  }),
  FETCH_UPDATE_COMMENT_RCV: (state, action) => {
    let nextState = {...state}
    nextState.isFetching = false
    return nextState
  },
  FETCH_UPDATE_COMMENT_ERR: (state, action) => {
    let nextState = {...state}
    nextState.isFetching = false
    return nextState
  },

  /*
   * 更新post 更新indexComment
   */
  FETCH_UPDATE_POST_INDEX_COMMENT: (state, action) => {
    let nextState = {...state}
    let post = action.payload.newPost
    nextState.indexComment.forEach((value, index) => {
      if (value.post.id === post.id) {
        value.post.title = post.title
        value.post.des = post.des
        value.post.content = post.content
      }
    })
    return nextState
  },

  /*
   * 删除post 更新indexComment
   */
  FETCH_DELETE_POST_INDEX_COMMENT: (state, action) => {
    let nextState = {...state}
    let id = parseInt(action.payload.id)
    let arr = nextState.indexComment
    var i = 0;
    for (; i < arr.length; i++) {
      if (arr[i].post.id === id) {
        arr.splice(i, 1);
        break;
      }
    }
    nextState.indexComment = arr
    return nextState
  },

  /*
   * 创建comment 更新indexComment
   */
  FETCH_CREATE_COMMENT_INDEX_COMMENT: (state, action) => {
    let nextState = {...state}
    let comment = action.payload.newComment
    nextState.indexComment.unshift(comment)
    return nextState
  },


  // 删除comment 更新indexComment
  FETCH_DELETE_COMMENT_INDEX_COMMENT: (state, action) => {
    let nextState = {...state}
    let id = parseInt(action.payload.id)
    let arr = nextState.indexComment
    var i = 0;
    for (; i < arr.length; i++) {
      if (arr[i].id === id) {
        arr.splice(i, 1);
        break;
      }
    }
    nextState.indexComment = arr
    return nextState
  },

  // 删除comment 更新postComments
  FETCH_DELETE_COMMENT_POST_COMMENTS: (state, action) => {
    let nextState = {...state}
    let id = parseInt(action.payload.id)
    let arr = nextState.postComments
    var i = 0;
    for (; i < arr.length; i++) {
      if (arr[i].id === id) {
        arr.splice(i, 1);
        break;
      }
    }
    nextState.postComments = arr
    return nextState
  },


  // 更新comment 更新indexComment
  FETCH_UPDATE_COMMENT_INDEX_COMMENT: (state, action) => {
    let nextState = {...state}
    let comment = action.payload.newComment
    nextState.indexComment.forEach((value, index) => {
      if (value.id === comment.id) {
        value.content = comment.content
        value.images = comment.images
        value.imagesId = comment.imagesId
      }
    })
    return nextState
  },

  // 更新comment 更新postComments
  FETCH_UPDATE_COMMENT_POST_COMMENTS: (state, action) => {
    let nextState = {...state}
    let comment = action.payload.newComment
    nextState.postComments.forEach((value, index) => {
      if (value.id === comment.id) {
        value.content = comment.content
        value.images = comment.images
        value.imagesId = comment.imagesId
      }
    })
    return nextState
  },

}, {
  isFetching: false,
  indexComment: [],
  postComments: [],
  showComment: [],
  showCommentDraft: [],
})
