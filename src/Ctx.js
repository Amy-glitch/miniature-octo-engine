import React from 'react'
import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

var  firebaseConfig = {
    apiKey: "AIzaSyDVVaZwG02sPbWFdRFYQYoqw-nsbw3Tw4E",
    authDomain: "writerate-75721.firebaseapp.com",
    projectId: "writerate-75721",
    storageBucket: "writerate-75721.appspot.com",
    messagingSenderId: "139649824422",
    appId: "1:139649824422:web:bc83ff1cad98aea0746667",
    measurementId: "G-QC7M3LR2FW"
  };
  
firebase.initializeApp(firebaseConfig);
let db = firebase.firestore();



const dbContext = React.createContext();
export const DbProvider = ({children}) => {return <dbContext.Provider value={db}>{children}</dbContext.Provider>}
export const DbConsumer = dbContext.Consumer
export default dbContext
React.createContext(true)


