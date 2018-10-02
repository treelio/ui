import { put, call, takeLatest } from 'redux-saga/effects';
import { GET_DATA } from 'containers/DonationsPage/constants';
import { getCollection } from 'utils/db';

import { dataLoaded, dataLoadingError } from './actions';

export function* getData() {
  try {
    const collection = yield call(getCollection, 'treelio/listing');
    yield put(dataLoaded(collection));
  } catch (err) {
    yield put(dataLoadingError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* treelioData() {
  yield takeLatest(GET_DATA, getData);
}
