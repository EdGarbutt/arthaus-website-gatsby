import { firestore } from "./firebase";

const getToolKit = async (filter) => {
    let snapshot;
    if (filter) {
        snapshot = await firestore.collection('toolKit').where('type', '==', filter).orderBy('createdAt', 'desc').get()
    } else {
        snapshot = await firestore.collection('toolKit').orderBy('createdAt', 'desc').get()
    }
   // const snapshot = await firestore.collection('toolKit').get()
    return snapshot.docs
}

export { getToolKit }