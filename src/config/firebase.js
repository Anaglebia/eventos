// import firebase from 'firebase';
import { initializeApp } from "firebase/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyBxHCSfNP6vXFes5cchapjKLpLfTlmT8u8",
  authDomain: "eventos-2870f.firebaseapp.com",
  projectId: "eventos-2870f",
  storageBucket: "eventos-2870f.appspot.com",
  messagingSenderId: "319029538462",
  appId: "1:319029538462:web:8fd9d197f01c4d756c158f"
};



const app = initializeApp(firebaseConfig);


export default app;

