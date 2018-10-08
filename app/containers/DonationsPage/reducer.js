import { fromJS } from 'immutable';

import {
  CLOSE_DONATION_DIALOG,
  CLOSE_ITEM_DIALOG,
  DONATE_MONEY,
  GET_DATA,
  GET_DATA_SUCCESS,
  GET_DATA_ERROR,
  SHOW_DONATION_DIALOG,
  SHOW_ITEM_DIALOG,
  UPDATE_DONATE_VALUE,
} from './constants';

export const initialState = fromJS({
  data: [],
  loading: false,
  isItemDialogOpen: false,
  isDonationDialogOpen: false,
  donateValue: 0,
  dialogItem: {
    itemId: null,
    photo: null,
    itemName: null,
    itemBrand: null,
  },
});

function donationsReducer(state = initialState, action) {
  switch (action.type) {
    case CLOSE_DONATION_DIALOG:
      return state.set('isDonationDialogOpen', false);
    case CLOSE_ITEM_DIALOG:
      return state.set('isItemDialogOpen', false);
    case DONATE_MONEY:
      return state.set('loading', true);
    case GET_DATA:
      return state.set('loading', true);
    case GET_DATA_SUCCESS:
      return state.set('data', action.data).set('loading', false);
    case GET_DATA_ERROR:
      return state.set('loading', false);
    case SHOW_DONATION_DIALOG:
      return state.set('isDonationDialogOpen', true).set('donateValue', '$0');
    case SHOW_ITEM_DIALOG:
      return state.set('isItemDialogOpen', true).set('dialogItem', action.item);
    case UPDATE_DONATE_VALUE:
      return state.set('donateValue', action.val);
    default:
      return state;
  }
}

export default donationsReducer;
