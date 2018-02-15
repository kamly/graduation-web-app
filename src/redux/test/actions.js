import {createActions} from 'redux-actions'
import testApi from '../../interfaces/testApi'


export const actions = createActions({
  FETCH_TEST_REQ: id => id,
  FETCH_TEST_RCV: json => (json),
  FETCH_TEST_ERR: e => (e)
})

export function apiFetchTestRedux(data, success) {

  const {id} = data;

  return async function (dispatch) {
    dispatch(actions.fetchTestReq(id))
    try {
      let json = await testApi.getTest(id)
      dispatch(actions.fetchTestRcv(json))
      success && success(json)
    } catch (e) {
      dispatch(actions.fetchTestErr(e))
    }

  }
}


