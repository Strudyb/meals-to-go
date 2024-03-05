import { initializeApp } from 'firebase/app';
import {
  // getAuth,
  getReactNativePersistence,
  initializeAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from 'firebase/auth';

import AsyncStorage from '@react-native-async-storage/async-storage';

// Initialize Firebase
const firebaseConfig = {
  apiKey: 'AIzaSyDbp6LgCxdas6Vd5J6_nOrhWOYeIqDyzCk',
  authDomain: 'mealstogo-6d1e2.firebaseapp.com',
  projectId: 'mealstogo-6d1e2',
  storageBucket: 'mealstogo-6d1e2.appspot.com',
  messagingSenderId: '429926708363',
  appId: '1:429926708363:web:3fff8caaa0bf7ee697d08e',
};

const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

// const auth = getAuth(app);

export const loginRequest = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const registerRequest = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

export const checkAuthentication = (callback) => {
  return onAuthStateChanged(auth, callback);
};

export const logout = () => {
  return signOut(auth);
};
