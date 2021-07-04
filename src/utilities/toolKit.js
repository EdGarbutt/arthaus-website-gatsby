import { firestore } from "./firebase";

const getToolKit = async (filter) => {
    console.log("You 50! ", filter)
    let snapshot;
    if (filter) {
        snapshot = await firestore.collection('toolKit').where('type', '==', filter).get()
    } else {
        snapshot = await firestore.collection('toolKit').get()
    }
   // const snapshot = await firestore.collection('toolKit').get()
    return snapshot.docs
}

export { getToolKit }