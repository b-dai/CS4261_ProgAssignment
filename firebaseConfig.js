import { initializeApp } from 'firebase/app';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDpUoB0VnQqABt51Qc3eSQMo1EVv8mYK0E",
  authDomain: "cs4261progassignment.firebaseapp.com",
  projectId: "cs4261progassignment",
  storageBucket: "cs4261progassignment.firebasestorage.app",
  messagingSenderId: "618076972550",
  appId: "1:618076972550:web:dbb836a7d2d7fe9f934587",
  measurementId: "G-7KJNM48EVL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage),
});
const db = getFirestore(app);

export { auth, db };
