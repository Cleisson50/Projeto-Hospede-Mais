import  firebase from "firebase"
import 'firebase/storage';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAdlBOtrkRMQ98GH05bA28oKB7vlCtftLM",
  authDomain: "porta-iot.firebaseapp.com",
  databaseURL: "https://porta-iot-default-rtdb.firebaseio.com",
  projectId: "porta-iot",
  storageBucket: "porta-iot.appspot.com",
  messagingSenderId: "667915849162",
  appId: "1:667915849162:web:ebc77985dbad6eebac9333"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase