import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getAuth, onAuthStateChanged, type User } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { writable } from "svelte/store";

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

function userStore() {
  let unsubscribe: () => void

  if(!auth || !globalThis.window) {
    console.warn('Auth is not initializaed or not in browser');
    const { subscribe } = writable<User | null>(null);
    return {
      subscribe,
    }
  }

  const { subscribe } = writable(auth?.currentUser ?? null, (set) => {
    onAuthStateChanged(auth, (user) => {
      set(user);
    });

    return () => unsubscribe();
  });

  return {
    subscribe,
  }
}

export const user = userStore();