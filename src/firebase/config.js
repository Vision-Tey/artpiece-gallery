import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"
import { getAuth } from "firebase/auth"
import { addDoc, collection, doc, getDoc, serverTimestamp, updateDoc } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyD6kBeerUcF9SAqrfj-TRCjZdudli-GmHU",
  authDomain: "art-gram-e6fdc.firebaseapp.com",
  projectId: "art-gram-e6fdc",
  storageBucket: "art-gram-e6fdc.appspot.com",
  messagingSenderId: "408643188249",
  appId: "1:408643188249:web:7309e37ff985b5e5c75c88"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const projectFirestore = getFirestore(app)
const projectStorage = getStorage(app)
const timestamp = serverTimestamp()


export { auth, projectFirestore, projectStorage, timestamp};