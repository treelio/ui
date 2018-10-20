import { GET_DATA, GET_DATA_SUCCESS, GET_DATA_ERROR } from './constants';

export function getData() {
  return {
    type: GET_DATA,
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
