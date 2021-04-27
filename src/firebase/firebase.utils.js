import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDxfPBrSTdZNpZAojJ4FJkJ6ePYs6RxJJs",
  authDomain: "ecomm-db-668ec.firebaseapp.com",
  projectId: "ecomm-db-668ec",
  storageBucket: "ecomm-db-668ec.appspot.com",
  messagingSenderId: "48471342001",
  appId: "1:48471342001:web:07472a6f66a24f36995b90",
  measurementId: "G-K06XY5LJ5R",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
