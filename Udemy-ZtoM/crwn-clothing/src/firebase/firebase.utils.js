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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
