import { put, takeLatest } from 'redux-saga/effects';
import { GET_DATA } from 'containers/HomePage/constants';
// import firebase from 'firebase';
import '@firebase/firestore';
// import ReduxSagaFirebase from 'redux-saga-firebase';
import { dataLoaded, dataLoadingError } from './actions';

export function* getData() {
  try {
    /* TODO: firebase integration */
    yield put(dataLoaded({}));
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
