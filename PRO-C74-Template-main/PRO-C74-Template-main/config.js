import firebase from "firebase";


const firebaseConfig = {
  apiKey: "AIzaSyCA0RwEvuTDyzKnxN-awRRCvmPlPY06V6k",
  authDomain: "e-ride-fec72.firebaseapp.com",
  projectId: "e-ride-fec72",
  storageBucket: "e-ride-fec72.appspot.com",
  messagingSenderId: "46632897676",
  appId: "1:46632897676:web:50295e525805c3baa47fa9"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
