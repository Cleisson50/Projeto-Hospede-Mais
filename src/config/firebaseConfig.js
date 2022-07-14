import  firebase from "firebase"
import 'firebase/storage';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA2y94ea04Yz_YCruLOPEPJOpp_J9U6ugM",
  authDomain: "task-bcc7b.firebaseapp.com",
  projectId: "task-bcc7b",
  storageBucket: "task-bcc7b.appspot.com",
  messagingSenderId: "933416959794",
  appId: "1:933416959794:web:f0686c1b1dbc6f33b6612b"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase