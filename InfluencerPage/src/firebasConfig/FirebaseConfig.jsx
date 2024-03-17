// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getStorage, ref } from "firebase/storage"
const firebaseConfig = {
  apiKey: "AIzaSyB92nm_sk9Ipg1siXFICF79uDhX_qq1JaY",
  authDomain: "influencerweb-505b9.firebaseapp.com",
  projectId: "influencerweb-505b9",
  storageBucket: "influencerweb-505b9.appspot.com",
  messagingSenderId: "528028317927",
  appId: "1:528028317927:web:0031385f21cdddf3298a42"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const fireDB=getFirestore(app)
export const storage = getStorage(app);
