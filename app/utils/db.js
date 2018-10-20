import firebase from 'firebase';
import '@firebase/firestore';

function getCollection(source, query = null) {
  try {
    const db = firebase.firestore();
    const settings = { timestampsInSnapshots: true };
    db.settings(settings);
    const result = db.collection(source);

    if (query) {
      return result.where(query.field, query.operation, query.data).get();
    }
    return result.get();
  } catch (e) {
    throw e;
  }
}

function getDocument(source) {
  try {
    const db = firebase.firestore();
    const settings = { timestampsInSnapshots: true };
    db.settings(settings);
    return db
      .doc(source)
      .get()
      .then(doc => doc.data());
  } catch (e) {
    throw e;
  }
}

export { getCollection, getDocument };
