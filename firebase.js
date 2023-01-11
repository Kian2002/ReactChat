import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: JSON.stringify(import.meta.env.VITE_API_KEY),
  authDomain: JSON.stringify(import.meta.env.VITE_AUTH_DOMAIN),
  projectId: JSON.stringify(import.meta.env.VITE_PROJECT_ID),
  storageBucket: JSON.stringify(import.meta.env.VITE_STORAGE_BUCKET),
  messagingSenderId: JSON.stringify(import.meta.env.VITE_MESSAGING_SENDER_ID),
  appId: JSON.stringify(import.meta.env.VITE_APP_ID),
};

const URL = JSON.stringify(import.meta.env.VITE_URL);

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();

export { auth, provider, URL, app };
