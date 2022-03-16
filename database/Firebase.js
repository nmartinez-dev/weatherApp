import firebase from 'firebase';
import 'firebase/database';

// Agregar config de firebase Realtime Database
const firebaseConfig = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: ""
};
  
firebase.initializeApp(firebaseConfig);

export const db = firebase.database();
export default firebase;
