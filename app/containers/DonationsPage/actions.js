import {
  CLOSE_DONATION_DIALOG,
  CLOSE_ITEM_DIALOG,
  DONATE_MONEY,
  DONATE_MONEY_SUCCESS,
  DONATE_MONEY_ERROR,
  GET_DATA,
  GET_DATA_SUCCESS,
  GET_DATA_ERROR,
  SHOW_DONATION_DIALOG,
  SHOW_ITEM_DIALOG,
  UPDATE_DONATE_VALUE,
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

export function donateMoney(id, value) {
  return {
    type: DONATE_MONEY,
    id,
    value,
  };
}

export function donateMoneyError(err) {
  return {
    type: DONATE_MONEY_ERROR,
    err,
  };
}

export function donateMoneySuccess() {
  return {
    type: DONATE_MONEY_SUCCESS,
  };
}

export function closeItemDialog() {
  return {
    type: CLOSE_ITEM_DIALOG,
  };
}

export function closeDonationDialog() {
  return {
    type: CLOSE_DONATION_DIALOG,
  };
}

export function showItemDialog(item) {
  return {
    type: SHOW_ITEM_DIALOG,
    item,
  };
}

export function showDonationDialog() {
  return {
    type: SHOW_DONATION_DIALOG,
  };
}

export function updateDonateValue(val) {
  return {
    type: UPDATE_DONATE_VALUE,
    val,
  };
}
