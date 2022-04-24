import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
  apiKey: "AIzaSyA1H6Xik5QX1pARxPddhpmLdxr5ImDv2ac",
  authDomain: "mediz-clothings.firebaseapp.com",
  projectId: "mediz-clothings",
  storageBucket: "mediz-clothings.appspot.com",
  messagingSenderId: "1055045098565",
  appId: "1:1055045098565:web:125cd6cb10ba7f68c2d72c",
  measurementId: "G-YS64ZX8H90"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
