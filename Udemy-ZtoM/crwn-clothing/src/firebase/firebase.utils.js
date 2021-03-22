import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDJDVIIrWroOzRlG_g81oKNUIPnYxHjNvA",
  authDomain: "crwn-db-c28d8.firebaseapp.com",
  projectId: "crwn-db-c28d8",
  storageBucket: "crwn-db-c28d8.appspot.com",
  messagingSenderId: "412643048543",
  appId: "1:412643048543:web:f9f998cabd1a151f1aafea",
  measurementId: "G-JV9SST9Z4Q",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
