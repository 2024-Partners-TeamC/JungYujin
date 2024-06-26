import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDtwlJFlDAJUJ0xE6z3a0Zzc9mObti6V4Y",
  authDomain: "nwitter-reloaded-2bdf6.firebaseapp.com",
  projectId: "nwitter-reloaded-2bdf6",
  storageBucket: "nwitter-reloaded-2bdf6.appspot.com",
  messagingSenderId: "354077899730",
  appId: "1:354077899730:web:7404dbf0d62fcd4070e60b",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const storage = getStorage(app);

export const db = getFirestore(app);
