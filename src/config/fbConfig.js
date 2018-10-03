import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'


// Initialize Firebase

var config = {
    apiKey: "AIzaSyA5fnXhxk2mV3LgCqR94LZ-iI-nNqkdCQ0",
    authDomain: "net-ninja-app.firebaseapp.com",
    databaseURL: "https://net-ninja-app.firebaseio.com",
    projectId: "net-ninja-app",
    storageBucket: "net-ninja-app.appspot.com",
    messagingSenderId: "358855190141"
  };


  firebase.initializeApp(config);
  firebase.firestore().settings ({
    timestampsInSnapshots: true
  })

  export default firebase