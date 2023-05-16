// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyCJvfG38LH3FPCODrSMubwrC1UNnDjSHo8",

  authDomain: "chat-prototype-6f0ba.firebaseapp.com",

  projectId: "chat-prototype-6f0ba",

  storageBucket: "chat-prototype-6f0ba.appspot.com",

  messagingSenderId: "346637168309",

  appId: "1:346637168309:web:c481fe3f98228e09e818fc",

  measurementId: "G-6ZPPY1MTJG",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const analytics = getAnalytics(app);

export { db };
