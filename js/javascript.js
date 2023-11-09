let email = document.getElementById('email');

let btn = document.getElementById('btn');

let error = document.getElementById('error');

let main = document.querySelector('main');
let section = document.querySelector('section');

let confirm_email = document.getElementById('confirm-email');
let confirm_recu = document.getElementById('confirm-recu');

// location.reload();

btn.onclick = function(){
    const userInput = email.value;
    const isValidEmail = validateEmail(userInput);
    if (isValidEmail) {
        error.innerHTML = "";
        email.classList.remove('errorClass');
        email.style.border = 'none';
        main.classList.add('display');
        section.classList.remove('display');
        confirm_email.innerHTML = userInput;

        
    } else {
        error.innerHTML = 'Valid email required';
        email.classList.add('errorClass');
        email.style.border = "1px solid red";
    }

}
confirm_recu.onclick = function(){
    location.reload();
}


function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}







