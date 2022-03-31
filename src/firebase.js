import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyB6K5-rvqLZDMzNJzAnfGZp00sug8xAnHY",
  authDomain: "slackersclone.firebaseapp.com",
  projectId: "slackersclone",
  storageBucket: "slackersclone.appspot.com",
  messagingSenderId: "791723687519",
  appId: "1:791723687519:web:2bec190895aa73190365ea",
  measurementId: "G-0BJV6M1G1P"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
