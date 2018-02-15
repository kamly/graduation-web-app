import {handleActions} from 'redux-actions'

export const topic = handleActions({
  // 获取专题
  FETCH_GET_INDEX_TOPIC_REQ: (state, action) => ({
    ...state, ...
      {
        isFetching: true,
      }
  }),
  FETCH_GET_INDEX_TOPIC_RCV: (state, action) => {
    let nextState = {...state}
    let indexTopic = action.payload.res.data.message
    if (indexTopic.length !== 0) {
      const newIndex = nextState.indexTopic
      newIndex.push(...indexTopic)
      nextState.indexTopic = newIndex
    }
    nextState.isFetching = false
    return nextState
  },
  FETCH_GET_INDEX_TOPIC_ERR: (state, action) => {
    // 发生错误，wpy页面进行处理，这里看后续需求添加内容
    let nextState = {...state}
    nextState.isFetching = false
    return nextState
  },

  /*
   * 清空 indexTopic
   */
  FETCH_EMPTY_INDEX_TOPIC: (state, action) => {
    let nextState = {...state}
    nextState.indexTopic = []
    return nextState
  },


  // 专题详情
  FETCH_GET_SHOW_TOPIC_REQ: (state, action) => ({
    ...state, ...
      {
        isFetching: true,
      }
  }),
  FETCH_GET_SHOW_TOPIC_RCV: (state, action) => {
    let nextState = {...state}
    let showTopic = action.payload.res.data.message
    nextState.showTopic = showTopic
    nextState.isFetching = false
    return nextState
  },
  FETCH_GET_SHOW_TOPIC_ERR: (state, action) => {
    // 发生错误，wpy页面进行处理，这里看后续需求添加内容
    let nextState = {...state}
    nextState.isFetching = false
    return nextState
  },

  // 获取专题文章
  FETCH_GET_TOPIC_POST_REQ: (state, action) => ({
    ...state, ...
      {
        isFetching: true,
      }
  }),
  FETCH_GET_TOPIC_POST_RCV: (state, action) => {
    let nextState = {...state}
    let topicPost = action.payload.res.data.message
    nextState.topicPost = topicPost
    nextState.isFetching = false
    return nextState
  },
  FETCH_GET_TOPIC_POST_ERR: (state, action) => {
    // 发生错误，wpy页面进行处理，这里看后续需求添加内容
    let nextState = {...state}
    nextState.isFetching = false
    return nextState
  },

  /*
   * 更新post 更新indexTopic
   */
  FETCH_UPDATE_POST_INDEX_TOPIC: (state, action) => {
    let nextState = {...state}
    let post = action.payload.newPost
    nextState.indexTopic.forEach((value, index) => {
      if (value.posts.id === post.id) {
        value.posts.title = post.title
        value.posts.des = post.des
        value.posts.content = post.content
      }
    })
    return nextState
  }

}, {
  isFetching: false,
  indexTopic: [],
  showTopic: [],
  topicPost: [],
})
