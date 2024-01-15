// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCh9_M2en47ZyK9N2UDNpvxsyqrljbzZiQ",
  authDomain: "miniblog-5d5d1.firebaseapp.com",
  projectId: "miniblog-5d5d1",
  storageBucket: "miniblog-5d5d1.appspot.com",
  messagingSenderId: "310371885859",
  appId: "1:310371885859:web:67ed4d8ac4253fe7ffe296",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
