const signinBtn = document.querySelector('#signinBtn');
const signupBtn = document.querySelector('#signupBtn');
const nameField = document.querySelector('#nameField');
const formHeader = document.querySelector('.form-header');
const nameBox = document.querySelector('#name');
const emailBox = document.querySelector('#email');
const passBox = document.querySelector('#password');

signinBtn.addEventListener('click', function(){
  formHeader.innerText="Sign In";
  signinBtn.classList.remove('disable');
  signupBtn.classList.add('disable');
  nameField.style.display="none";
})

signupBtn.addEventListener('click', function(){
  formHeader.innerText="Sign Up";
  signinBtn.classList.add('disable');
  signupBtn.classList.remove('disable');
  nameField.style.display="flex";
  
  if(nameBox.value=="Sima"||nameBox.value=="sima"){
    formHeader.innerText="Hello Angel!";
  }
})