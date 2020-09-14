import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCBtjie78fsxQXpZ_8cHmL8k1Z_UAtWkOw",
  authDomain: "challenge-1c2a3.firebaseapp.com",
  databaseURL: "https://challenge-1c2a3.firebaseio.com",
  projectId: "challenge-1c2a3",
  storageBucket: "challenge-1c2a3.appspot.com",
  messagingSenderId: "21783335578",
  appId: "1:21783335578:web:5a9097d4dc2b8ed1578523",
  measurementId: "G-6KKYMLBNN1",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export { db, auth };