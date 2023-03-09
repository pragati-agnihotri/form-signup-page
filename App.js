const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});

function fromValidation(){
  var name = document.forms.RegForm.FullName.value;
  var email = document.forms.RegForm.Email.value;
  var phone = document.forms.RegForm.Mobile.value;
  var state = document.forms.RegForm.State.value;
  var password = document.forms.RegForm.Password.value;

  var regEmail=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;  
  var regPhone=/^\d{10}$/;                                    
  var regName = /\d+$/g; 

  if (name == "" || regName.test(name)) {
    window.alert("Please enter your name properly.");
    name.focus();
    return false;
  }

  if (email == "" || !regEmail.test(email)) {
    window.alert("Please enter a valid e-mail address.");
    email.focus();
    return false;
  }

  if (password == "") {
    alert("Please enter your password");
    password.focus();
    return false;
  }

  if(password.length <8){
    alert("Password should be atleast 8 character long");
    password.focus();
    return false;

  }
  /if (phone == "" || !regPhone.test(phone)) {/
    if (phone.length!=0){
    alert("Please enter valid phone number.");
    phone.focus();
    return false;
  }

  if (state === "state") {
    alert("Please enter your State.");
    state.focus();
    return false;
  }

  return true;    
}