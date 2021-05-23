import firebase from "firebase"
const firebaseConfig = {
    apiKey: "AIzaSyCuA_30v_vIvBqe_zOlWwVJA9xD2h7kTaU",
    authDomain: "linkedin-clone-6c435.firebaseapp.com",
    projectId: "linkedin-clone-6c435",
    storageBucket: "linkedin-clone-6c435.appspot.com",
    messagingSenderId: "64250053300",
    appId: "1:64250053300:web:77b909e8faf94709d50de1"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  const auth = firebase.auth();
  export {db, auth};