// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA30uJ1GkicND51pGdwqoPBvArX1IX8SN4",
  authDomain: "duantotnghiep-a2ff3.firebaseapp.com",
  projectId: "duantotnghiep-a2ff3",
  storageBucket: "duantotnghiep-a2ff3.appspot.com",
  messagingSenderId: "947110170246",
  appId: "1:947110170246:web:4181acc98487f4aa7b0b07",
  measurementId: "G-HEVWCJRMG2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);