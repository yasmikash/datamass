import firebase from "firebase/app";

import "firebase/database"; // for database

var firebaseConfig = {
  apiKey: "AIzaSyCFH_TQ0uUa5L2SKJwJsngLuqk03RC9VZQ",
  authDomain: "datamass8343.firebaseapp.com",
  databaseURL: "https://datamass8343.firebaseio.com",
  projectId: "datamass8343",
  storageBucket: "datamass8343.appspot.com",
  messagingSenderId: "589290816967",
  appId: "1:589290816967:web:1d1e6627a8adec475b85e2",
  measurementId: "G-QYGJB882XL",
};

var firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp;
