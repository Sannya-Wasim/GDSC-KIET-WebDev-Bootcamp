// Sign Up Modal
var signup_modal = document.getElementById("SignUp_Modal");
var signup_btn = document.getElementById("signup_btn");
var close = document.getElementsByClassName("signup_close")[0];

signup_btn.onclick = function() {
  signup_modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
close.onclick = function() {
  signup_modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == signup_modal) {
    signup_modal.style.display = "none";
  }
}

