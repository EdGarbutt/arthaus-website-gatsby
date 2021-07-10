import { firestore } from "./firebase";

const getToolKit = async () => {
    const snapshot = await firestore.collection('toolKit').orderBy('createdAt', 'desc').get()
    return snapshot.docs
}

export { getToolKit }