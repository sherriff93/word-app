import * as firebase from 'firebase/app'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyCpfQxeakq7J1aGKkg8rxzmH3KqVItnYqE",
    authDomain: "word-app-7d570.firebaseapp.com",
    databaseURL: "https://word-app-7d570.firebaseio.com",
    projectId: "word-app-7d570",
    storageBucket: "word-app-7d570.appspot.com",
    messagingSenderId: "150918338866"
};

if (!firebase.apps.length) {
    firebase.initializeApp(config);
}

const auth = firebase.auth();

export {
    auth,
};