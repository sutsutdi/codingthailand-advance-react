
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyBDh53Yxt1AfC5Nbmn7xqGCMZNMScReykc",
  authDomain: "sut-ct-advance-redux-app.firebaseapp.com",
  projectId: "sut-ct-advance-redux-app",
  storageBucket: "sut-ct-advance-redux-app.appspot.com",
  messagingSenderId: "78492529914",
  appId: "1:78492529914:web:9b86788227c88346d04543",
  measurementId: "G-ZHVRYEDEM4"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
