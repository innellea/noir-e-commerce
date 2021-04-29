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

// storing user data in firebase database
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
