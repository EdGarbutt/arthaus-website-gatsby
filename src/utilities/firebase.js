import firebase from 'firebase/app';
import 'firebase/firestore'

const config = {
    apiKey: "AIzaSyB2j71GYXE-0SROU8exujIpJwiIqWfMotM",
    authDomain: "arthaus-website-social-post.firebaseapp.com",
    databaseURL: "https://arthaus-website-social-post.firebaseio.com",
    projectId: "arthaus-website-social-post",
    storageBucket: "arthaus-website-social-post.appspot.com",
    messagingSenderId: "754703857474",
    appId: "1:754703857474:web:3a89fc5c1be755e53f7adb",
    measurementId: "G-GVKRQ8164X"
}

if (!firebase.apps.length) {
    firebase.initializeApp(config)
}

const firestore = firebase.firestore()

export { firestore }