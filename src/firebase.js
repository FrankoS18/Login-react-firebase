// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDNKp_AOIRf3xi_6VPAAoFn8fdOwwdOltc",
  authDomain: "crud-udemy-react-d6582.firebaseapp.com",
  projectId: "crud-udemy-react-d6582",
  storageBucket: "crud-udemy-react-d6582.appspot.com",
  messagingSenderId: "564317408342",
  appId: "1:564317408342:web:519dee3564f3c6222f7ff7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);