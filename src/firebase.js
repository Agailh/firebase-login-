// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCXlTzY-0Lj5kub3fgIsOUqlde51T6C6eE",
  authDomain: "fir-app-2-205b7.firebaseapp.com",
  projectId: "fir-app-2-205b7",
  storageBucket: "fir-app-2-205b7.appspot.com",
  messagingSenderId: "59547451230",
  appId: "1:59547451230:web:529ef87925a00b4d3b99cf"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app


