import { fromJS } from 'immutable';

import {
  GET_DATA,
  GET_DATA_SUCCESS,
  GET_DATA_ERROR,
  SHOW_ITEM_DIALOG,
  CLOSE_ITEM_DIALOG,
} from './constants';

export const initialState = fromJS({
  data: [],
  loading: false,
  isItemDialogOpen: false,
  dialogItem: {
    itemId: null,
    photo: null,
    itemName: null,
    itemBrand: null,
  },
});

function donationsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_DATA:
      return state.set('loading', true);
    case GET_DATA_SUCCESS:
      return state.set('data', action.data).set('loading', false);
    case GET_DATA_ERROR:
      return state.set('loading', false);
    case SHOW_ITEM_DIALOG:
      return state.set('isItemDialogOpen', true).set('dialogItem', action.item);
    case CLOSE_ITEM_DIALOG:
      return state.set('isItemDialogOpen', false);
    default:
      return state;
  }
}

export default donationsReducer;
