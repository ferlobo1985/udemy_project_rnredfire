import firebase from 'firebase/app';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyANknxjzvwyXUnbqVV50c4ZfW7AAfgbRO4",
    authDomain: "rn-x-2caab.firebaseapp.com",
    databaseURL: "https://rn-x-2caab.firebaseio.com",
    projectId: "rn-x-2caab",
    storageBucket: "rn-x-2caab.appspot.com",
    messagingSenderId: "1063871550716",
    appId: "1:1063871550716:web:973572ae78c95f73687379",
    measurementId: "G-WTC70EYNPV"
}

firebase.initializeApp(config);

export {
    firebase
}