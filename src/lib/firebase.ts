import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

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
export const app = initializeApp(firebaseConfig);
export const db = getFirestore();
export const auth = getAuth();
export const storage = getStorage();