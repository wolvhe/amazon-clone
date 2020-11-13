import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyB7Hzy8CujV3wRDGFUk5JxvNPvOuX1UjW8",
    authDomain: "clone-a86b9.firebaseapp.com",
    databaseURL: "https://clone-a86b9.firebaseio.com",
    projectId: "clone-a86b9",
    storageBucket: "clone-a86b9.appspot.com",
    messagingSenderId: "517930263891",
    appId: "1:517930263891:web:15c92d37ad16334da5eda6",
    measurementId: "G-0RTDPBRLHY"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };

