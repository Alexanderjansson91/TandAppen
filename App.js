import React, { Component } from 'react';
import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';
import MainNavigation from './navigation/MainNavigation';
import FirebaseApp from './Firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "",
  authDomain: "tandappen-80969.firebaseapp.com",
  projectId: "tandappen-80969",
  storageBucket: "tandappen-80969.appspot.com",
  messagingSenderId: "888373589985",
  appId: "1:888373589985:web:2b063baf3e09ddd52404a0",
  measurementId: "G-ZFL204L6NY"
};

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

export class App extends Component {
  render() {
    return (
    <MainNavigation />
    );
  }
}
export default App;
