import * as firebase from 'firebase/app'
import 'firebase/auth'

const prodConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: "word-app-prod.firebaseapp.com",
    databaseURL: "https://word-app-prod.firebaseio.com",
    projectId: "word-app-prod",
    storageBucket: "word-app-prod.appspot.com",
    messagingSenderId: "653407271697"
};

const devConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: "word-app-7d570.firebaseapp.com",
    databaseURL: "https://word-app-7d570.firebaseio.com",
    projectId: "word-app-7d570",
    storageBucket: "word-app-7d570.appspot.com",
    messagingSenderId: "150918338866"
};

const config = process.env.NODE_ENV === 'production'
    ? prodConfig
    : devConfig;

if (!firebase.apps.length) {
    firebase.initializeApp(config);
}

const auth = firebase.auth();

export {
    auth,
};