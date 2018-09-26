import { GET_DATA, GET_DATA_SUCCESS, GET_DATA_ERROR } from './constants';

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
