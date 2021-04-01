// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyD-6ynMVHg_NJyq2UCQUSA79CgJ0M82F8c",
    authDomain: "kwitter-3c26a.firebaseapp.com",
    databaseURL: "https://kwitter-3c26a-default-rtdb.firebaseio.com",
    projectId: "kwitter-3c26a",
    storageBucket: "kwitter-3c26a.appspot.com",
    messagingSenderId: "1025817082546",
    appId: "1:1025817082546:web:e0a71818dded11b12467ab"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS
function adduser()
{
var user_name=document.getElementById("user_name").value;
//firebase.database().ref("/").child(user_name).update({
 //purpose : "adding user" });
 var playersRef = firebase.database().ref("user_name/");

playersRef.set ({
   John: {
      number: 1,
      age: 30
   },
	
   Amanda: {
      number: 2,
      age: 20
   }
});
}