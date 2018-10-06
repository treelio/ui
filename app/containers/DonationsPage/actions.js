import {
  GET_DATA,
  GET_DATA_SUCCESS,
  GET_DATA_ERROR,
  SHOW_ITEM_DIALOG,
  CLOSE_ITEM_DIALOG,
} from './constants';

export function getData(search = null) {
  return {
    type: GET_DATA,
    search,
  };
}

export function dataLoaded(data) {
  return {
    type: GET_DATA_SUCCESS,
    data,
  };
}

export function dataLoadingError(err) {
  return {
    type: GET_DATA_ERROR,
    err,
  };
}

export function showItemDialog(item) {
  return {
    type: SHOW_ITEM_DIALOG,
    item,
  };
}

export function closeItemDialog() {
  return {
    type: CLOSE_ITEM_DIALOG,
  };
}
