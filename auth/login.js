
function login(){

  var userEmail = document.getElementById("email").value;
  var userPass = document.getElementById("pass").value;

  firebase.auth().signInWithEmailAndPassword(userEmail, userPass).then(function(){
  	window.location.href="chat.html";
  }).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;

    window.alert("Error : " + errorMessage)
    
    
  });
  }