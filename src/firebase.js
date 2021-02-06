import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCSevPmouKsDD3NNN66g7reN5UOOxLbRAU",
  authDomain: "student-management-22092.firebaseapp.com",
  projectId: "student-management-22092",
  storageBucket: "student-management-22092.appspot.com",
  messagingSenderId: "400543788782",
  appId: "1:400543788782:web:9e13663384d45b50148dff",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
