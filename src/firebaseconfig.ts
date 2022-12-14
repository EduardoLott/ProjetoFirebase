import firebase from "firebase";
import "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  apiKey: "AIzaSyB-u_o0jbQb5XVBOYl_LEgFMpMqANS_BCA",
  authDomain: "projetotreino-7397f.firebaseapp.com",
  projectId: "projetotreino-7397f",
  storageBucket: "projetotreino-7397f.appspot.com",
  messagingSenderId: "655293956315",
  appId: "1:655293956315:web:298ca347198426935d0cfe",
  measurementId: "G-1E7W0KGG1S"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
export const db = firebase.firestore();
