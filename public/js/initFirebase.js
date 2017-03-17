
var config = {
  apiKey: "AIzaSyC7_b-cPhb0zjN3zuEFnrNYNJjMkO_y7Ho",
  authDomain: "pomelo-293a6.firebaseapp.com",
  databaseURL: "https://pomelo-293a6.firebaseio.com",
  storageBucket: "pomelo-293a6.appspot.com",
  messagingSenderId: "50576168803"
};
// firebase.initializeApp(config);
// Initialize the default app
var app = firebase.initializeApp(config);
// You can retrieve services via the defaultApp variable...
var defaultDatabase = app.database();
