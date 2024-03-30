import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyDmT17Skc_qgjJZTW7yKbuui8Rp3lLyJYs",
  authDomain: "olx-clone-96237.firebaseapp.com",
  projectId: "olx-clone-96237",
  storageBucket: "olx-clone-96237.appspot.com",
  messagingSenderId: "223450205099",
  appId: "1:223450205099:web:bef2d63214e7bddfcba0ee"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider()