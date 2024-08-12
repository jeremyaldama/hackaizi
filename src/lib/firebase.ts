// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCaesVB7qabmt_a9BaiSQKpHpKAmPoKJRc",
  authDomain: "hackaizi-2024-e6424.firebaseapp.com",
  databaseURL: "https://hackaizi-2024-e6424-default-rtdb.firebaseio.com",
  projectId: "hackaizi-2024-e6424",
  storageBucket: "hackaizi-2024-e6424.appspot.com",
  messagingSenderId: "387374231466",
  appId: "1:387374231466:web:9b6f55671dde403a84c5d3",
  measurementId: "G-C9TDYSLT9D",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database };
