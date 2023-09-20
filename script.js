var pwSpan = document.getElementById('pass-match');
var pw1 = document.getElementById('password');
var pw2 = document.getElementById('cpassword');

pw1.addEventListener('input', checkPwMatch);
pw2.addEventListener('input', checkPwMatch);

function checkPwMatch() {
  if (pw1.value === pw2.value) {
    pwSpan.style.visibility = 'hidden';
    pw1.classList.remove('pwMissmatch');
    pw2.classList.remove('pwMissmatch');
  } else {
    pwSpan.style.visibility = 'visible';
    pw1.classList.add('pwMissmatch');
    pw2.classList.add('pwMissmatch');
  }
}