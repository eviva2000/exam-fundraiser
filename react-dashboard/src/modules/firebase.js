var config = {
  apiKey: "AIzaSyDZF_8LaoZJR39cfBIDwwxXvQrSs3Orvvs",
  authDomain: "exam-fundraiser.firebaseapp.com",
  databaseURL: "https://exam-fundraiser.firebaseio.com",
  projectId: "exam-fundraiser",
  storageBucket: "exam-fundraiser.appspot.com",
  messagingSenderId: "606073999439"
};
const firebase = window.firebase;
firebase.initializeApp(config);
// Initialize Cloud Firestore through Firebase
const db = firebase.firestore();
// Disable deprecated features
db.settings({
  timestampsInSnapshots: true
});
export default firebase;
