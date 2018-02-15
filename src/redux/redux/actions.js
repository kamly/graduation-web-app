import {createActions} from 'redux-actions'


export const actions = createActions({

  //----  post

  // 更新post 更新indexComment
  FETCH_UPDATE_POST_INDEX_COMMENT: null,  // comment

  // 删除post 更新indexComment
  FETCH_DELETE_POST_INDEX_COMMENT: null,  // comment

  // 更新post 更新indexTopic
  FETCH_UPDATE_POST_INDEX_TOPIC: null, // topic

  // 创建post 更新userPost
  FETCH_CREATE_POST_USER_POSTS: null, // user

  // 更新post 更新userPosts
  FETCH_UPDATE_POST_USER_POSTS: null, // user
  // 更新post 更新userComments
  FETCH_UPDATE_POST_USER_COMMENTS: null, // user

  // 删除post 更新userPosts
  FETCH_DELETE_POST_USER_POSTS: null, // user
  // 删除post 更新userComments
  FETCH_DELETE_POST_USER_COMMENTS: null, // user

  //----- comment

  // 创建comment 更新showPost
  FETCH_CREATE_COMMENT_SHOW_POST: null, // post
  // 创建comment 更新indexPost
  FETCH_CREATE_COMMENT_INDEX_POST: null, //  post

  // 创建comment 更新userComment
  FETCH_CREATE_COMMENT_USER_COMMENTS: null, // user

  // 删除comment 更新showPost
  FETCH_DELETE_COMMENT_SHOW_POST: null, // post
  // 删除comment 更新indexPost
  FETCH_DELETE_COMMENT_INDEX_POST: null, // post

  // 删除comment 更新indexPost
  FETCH_DELETE_COMMENT_USER_COMMENTS: null, // user

  // 更新comment 更新userComments
  FETCH_UPDATE_COMMENT_USER_COMMENTS: null, // user
})
