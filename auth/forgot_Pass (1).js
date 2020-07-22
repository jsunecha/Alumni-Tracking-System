function forgot_password(){

var emailAddress ="ajithande1835@gmail.com";

firebase.auth().sendPasswordResetEmail(emailAddress).then(function() {
  window.alert("Mail is sent ");
}).catch(function(error) {
  window.alert("Something went wrong");
   
});
}