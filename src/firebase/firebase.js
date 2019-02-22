import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';
import {fbConfig} from '../config';
import '@firebase/messaging';


//Storing Firebase developement configuration(dash board)
const config = fbConfig.devConfig;

//Initialize Firebase in the application
if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

//Fire store creation
const db = firebase.firestore();

//Real time db creation
const realTime  = firebase.database();

//Storage creation
const storage = firebase.storage();

// fireStore.settings({timestampsInSnapshots: true});

navigator.serviceWorker
    .register('/my-sw.js')
    .then((registration) => {
      firebase.messaging().useServiceWorker(registration);
    });

export {realTime, db, storage};
