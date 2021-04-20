import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAqAyEvosboTNjpAEK4le6DDz9Z3xiO41U",
    authDomain: "crwn-clothing-870ea.firebaseapp.com",
    projectId: "crwn-clothing-870ea",
    storageBucket: "crwn-clothing-870ea.appspot.com",
    messagingSenderId: "396617158772",
    appId: "1:396617158772:web:5ac7b373ae80ae6ca14121",
    measurementId: "G-9RBEKXHL0S"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);