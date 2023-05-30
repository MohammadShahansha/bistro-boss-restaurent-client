// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_apiKey,
  authDomain:import.meta.env.VITE_authDomain,
  projectId: import.meta.env.VITE_projectId,
  storageBucket: import.meta.env.VITE_storageBucket,
  messagingSenderId: import.meta.env.VITE_messagingSenderId,
  appId: import.meta.env.VITE_appId
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);


// apiKey: "AIzaSyD1-1nOO9S39ECtyFZgMlffhetZ7oHixJA",
//   authDomain: "bistro-boss-9ea1a.firebaseapp.com",
//   projectId: "bistro-boss-9ea1a",
//   storageBucket: "bistro-boss-9ea1a.appspot.com",
//   messagingSenderId: "267586561984",
//   appId: "1:267586561984:web:8acbb2c5fd8fa4e8ac0a25"