import { initializeApp } from "firebase/app";
import {
  getAuth,
  setPersistence,
  browserLocalPersistence,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDNb9qsbJ-m1Ixb3GLmEWBx9Xrqhdy-Y4Y",
  authDomain: "job-application-tracker-3f0b3.firebaseapp.com",
  projectId: "job-application-tracker-3f0b3",
  storageBucket: "job-application-tracker-3f0b3.firebasestorage.app",
  messagingSenderId: "1096831459211",
  appId: "1:1096831459211:web:c01a1091ada857fb27998e",
  measurementId: "G-EDM094L62Q",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const db = getFirestore(app);

setPersistence(auth, browserLocalPersistence).catch((error) => {
  console.error("Error setting persistence:", error);
});
