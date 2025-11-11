import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBy2wScPQyX0uDNBZKRY3cOkj4vWkySwq8",
  authDomain: "undangan-digital-89474.firebaseapp.com",
  projectId: "undangan-digital-89474",
  storageBucket: "undangan-digital-89474.firebasestorage.app",
  messagingSenderId: "172491326195",
  appId: "1:172491326195:web:c62a95fae15b6334d06d86"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
