import { put, call, takeLatest } from 'redux-saga/effects';
import { GET_DATA } from 'containers/DonationsPage/constants';
import { getDocument, getCollection } from 'utils/db';

import { dataLoaded, dataLoadingError } from './actions';

export function* getData(params) {
  try {
    const itemDonationsUrl = `itemDonations`;
    const programUrl = `programs/${params.docId}`;
    const query = {
      field: 'programId',
      operation: '==',
      data: params.docId,
    };

    const program = yield call(getDocument, programUrl);

    const itemDonationCollection = yield call(
      getCollection,
      itemDonationsUrl,
      query,
    );

    program.itemDonations = itemDonationCollection.docs.map(doc => {
      const items = doc.data();
      items.id = doc.id;
      return items;
    });

    yield put(dataLoaded({ ...program }));
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
