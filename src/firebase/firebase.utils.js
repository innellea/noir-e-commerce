import "firebase/firestore";
import "firebase/auth";

import firebase from "firebase/app";

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

  console.log({ DocumentSnapshot: snapShot });

  const collectionRef = firestore.collection(`users`);
  const collectionSnapshot = await collectionRef.get();

  console.log({
    collectionSnapshot: collectionSnapshot.docs.map((doc) => doc.data()),
  });

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

// convert collections to map
export const convertCollectionsSnapshotToMap = (collection) => {
  const transformedCollection = collection.docs.map((doc) => {
    const { title, items } = doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items,
    };
  });

  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
};

// import to firebase
export const addCollectionAndDocuments = (collectionKey, objectsToAdd) => {
  const collectionRef = firestore.collection(collectionKey);
  console.log(collectionRef);
};

// firebase.initializeApp(config);
export default firebase.apps.length === 0
  ? firebase.initializeApp(config)
  : firebase.app();
// export default firebase.app("noir-db");

export const firestore = firebase.firestore();
export const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
