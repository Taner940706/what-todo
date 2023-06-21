import {initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyB8L7-ViKO4cyi1M9h-GrlR0hBNrc6u74k",
    authDomain: "whattodo-84301.firebaseapp.com",
    projectId: "whattodo-84301",
    storageBucket: "whattodo-84301.appspot.com",
    messagingSenderId: "593637765545",
    appId: "1:593637765545:web:0ba388b6ab2662835b94b8"
  };


  // init firebase

  initializeApp(firebaseConfig)

  // init firestore

  const db = getFirestore()

  export {db}