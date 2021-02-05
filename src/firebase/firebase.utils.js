import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCHTmCPVcFV85fh0P2ByzvYsNHCA7EQkgA",
  authDomain: "crwn-db-74862.firebaseapp.com",
  projectId: "crwn-db-74862",
  storageBucket: "crwn-db-74862.appspot.com",
  messagingSenderId: "845127511347",
  appId: "1:845127511347:web:4c41139a82373b5be12246",
  measurementId: "G-MRFCR3FJPF",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
