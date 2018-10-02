import firebase from 'firebase';
import '@firebase/firestore';

function getCollection(source) {
  try {
    const db = firebase.firestore();
    const settings = { timestampsInSnapshots: true };
    db.settings(settings);
    return db
      .doc(source)
      .get()
      .then(doc => doc.data().donations[0]);
  } catch (e) {
    throw e;
  }
}

export { getCollection };
