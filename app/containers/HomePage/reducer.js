import { fromJS } from 'immutable';

import { GET_DATA, GET_DATA_SUCCESS, GET_DATA_ERROR } from './constants';

export const initialState = fromJS({
  data: [],
  loading: false,
});

function homeReducer(state = initialState, action) {
  switch (action.type) {
    case GET_DATA:
      return state.set('loading', true);
    case GET_DATA_SUCCESS:
      return state.set('data', action.data).set('loading', false);
    case GET_DATA_ERROR:
      return state.set('loading', false);
    default:
      return state;
  }
}

export default homeReducer;
