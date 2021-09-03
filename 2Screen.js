function logout()
{
    window.location="index2.html";
}
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBNSPJiWGNnnaa-OK720vcKbeUHWTwFEI0",
    authDomain: "let-s-chat-ae669.firebaseapp.com",
    databaseURL: "https://let-s-chat-ae669-default-rtdb.firebaseio.com",
    projectId: "let-s-chat-ae669",
    storageBucket: "let-s-chat-ae669.appspot.com",
    messagingSenderId: "986288149046",
    appId: "1:986288149046:web:5a3e645365a94334c0be97"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);