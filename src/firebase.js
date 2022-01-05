import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDNKp_AOIRf3xi_6VPAAoFn8fdOwwdOltc",
    authDomain: "crud-udemy-react-d6582.firebaseapp.com",
    projectId: "crud-udemy-react-d6582",
    storageBucket: "crud-udemy-react-d6582.appspot.com",
    messagingSenderId: "564317408342",
    appId: "1:564317408342:web:519dee3564f3c6222f7ff7"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore()
const auth = firebase.auth();

export {db, auth}