import firebase from 'firebase';
import constant from "./constant";

export const firebaseApp = firebase.initializeApp(constant.firebaseConfig);
export const firebaseDb = firebaseApp.database()
