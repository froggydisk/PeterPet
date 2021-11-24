//import * as firebase from 'firebase/app';
import firebase from "firebase/app";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCP_A0NJVYzm1iQQG-kIkpYVag6gOesLgA",
  authDomain: "peterpet-df45b.firebaseapp.com",
  databaseURL: "https://peterpet-df45b-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "peterpet-df45b",
  storageBucket: "peterpet-df45b.appspot.com",
  messagingSenderId: "890280173344",
  appId: "1:890280173344:web:da21cbc580ab321a324145",
  measurementId: "G-80LDK8BQZL"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const firebase_db = firebase.database();

