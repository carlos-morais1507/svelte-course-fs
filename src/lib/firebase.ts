// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDpJGQVgbjCTfautv5Ml1zsT2ds8VHOr7c",
  authDomain: "svelte-fireship-course.firebaseapp.com",
  projectId: "svelte-fireship-course",
  storageBucket: "svelte-fireship-course.appspot.com",
  messagingSenderId: "620189662979",
  appId: "1:620189662979:web:58cb8b483d633a7fcdf336",
  measurementId: "G-GJ3F91HSCP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);