
import { initializeApp } from "firebase/app";
import { getAuth, RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyDTiCRh90pYfMwtE9EORRlkBETJnPcwT9E",
  authDomain: "phone-auth-5cb6f.firebaseapp.com",
  projectId: "phone-auth-5cb6f",
  storageBucket: "phone-auth-5cb6f.firebasestorage.app",
  messagingSenderId: "155957139394",
  appId: "1:155957139394:web:74d442ef64124e0424685b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export { RecaptchaVerifier, signInWithPhoneNumber };