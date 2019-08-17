
import firebase from 'firebase';
const config = {
    apiKey: "AIzaSyA8-A_2GAZ_JHvUhIHNYMeDfUck4Sn1iz8",
    authDomain: "pruebabq-ae2d4.firebaseapp.com",
    databaseURL: "https://pruebabq-ae2d4.firebaseio.com",
    projectId: "pruebabq-ae2d4",
    storageBucket: "pruebabq-ae2d4.appspot.com",
    messagingSenderId: "718628605575",
    appId: "1:718628605575:web:90b011452c88e81f"
};
firebase.initializeApp(config);
let db=firebase.firestore();

export default db ;

