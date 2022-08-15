// Import the functions you need from the SDKs you need
// import React, { useState, useEffect, useContext, createContext } from "react";
import firebase, { initializeApp } from "firebase/app";
// import "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

// const AuthContext = createContext();

// export const useAuth = () => {
//   return useContext(AuthContext);
// };

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const [isAuthenticating, setIsAuthenticating] = useState(true);

//   const sendSignInLinkToEmail = (email) => {
//     return firebase
//       .auth()
//       .sendSignInLinkToEmail(email, {
//         url: "http://localhost:3000/confirm",
//         handleCodeInApp: true,
//       })
//       .then(() => {
//         return true;
//       });
//   };

//   const signInWithEmailLink = (email, code) => {
//     return firebase
//       .auth()
//       .signInWithEmailLink(email, code)
//       .then((result) => {
//         setUser(result.user);
//         return true;
//       });
//   };

//   const logout = () => {
//     return firebase
//       .auth()
//       .signOut()
//       .then(() => {
//         setUser(null);
//       });
//   };

//   useEffect(() => {
//     const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
//       setUser(user);
//       setIsAuthenticating(false);
//     });

//     return () => unsubscribe();
//   }, []);

//   const values = {
//     user,
//     isAuthenticating,
//     sendSignInLinkToEmail,
//     signInWithEmailLink,
//     logout,
//   };

//   return (
//     <AuthContext.Provider value={values}>
//       {!isAuthenticating && children}
//     </AuthContext.Provider>
//   );
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const storage = getStorage(app);
