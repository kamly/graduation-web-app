import {handleActions} from 'redux-actions'

export const test = handleActions({
  FETCH_TEST_REQ: (state, action) => ({
    ...state, ...
      {
        isFetching: true,
      }
  }),
  FETCH_TEST_RCV: (state, action) => ({
    ...state, ...
      {
        isFetching: false,
        data: action.payload.data
      }
  }),
  FETCH_TEST_ERR: (state, action) => ({
    ...state, ...
      {
        isFetching: false,
      }
  }),
}, {
  isFetching: false,
  data: {}
})
