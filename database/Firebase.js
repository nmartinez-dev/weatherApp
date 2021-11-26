import firebase from 'firebase';
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyCvSzleZV5eM8gyIl8PLgta5mXNiOGWKTA",
    authDomain: "weatherapp-ibm.firebaseapp.com",
    databaseURL: "https://weatherapp-ibm-default-rtdb.firebaseio.com",
    projectId: "weatherapp-ibm",
    storageBucket: "weatherapp-ibm.appspot.com",
    messagingSenderId: "394447721770",
    appId: "1:394447721770:web:760d82e5b7b975a1477a53"
};
  
firebase.initializeApp(firebaseConfig);

export const db = firebase.database();
export const storage = firebase.storage();
export default firebase;
