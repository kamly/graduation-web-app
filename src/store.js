import {createStore, applyMiddleware, combineReducers} from 'redux'
import thunkMiddleware from 'redux-thunk'
import logger from 'redux-logger'

import {test} from './redux/test/test'
import {webApp} from './redux/webApp/webApp'
import {post} from './redux/post/post'
import {topic} from './redux/topic/topic'
import {image} from './redux/image/image'
import {user} from './redux/user/user'
import {comment} from './redux/comment/comment'
import {search} from './redux/search/search'

const rootReducer = combineReducers({
  test,
  webApp,
  post,
  topic,
  user,
  image,
  comment,
  search,
})

let store = createStore(rootReducer, applyMiddleware(
  thunkMiddleware,
  // logger
))

export default store





