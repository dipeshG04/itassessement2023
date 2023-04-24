
const form = document.querySelector('form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const phoneInput = document.querySelector('#number');


form.addEventListener('submit', (event) => {
  // Prevent the form from submitting by default
  event.preventDefault();

 
  if (nameInput.value.trim() === '') {
    alert('Please enter your name.');
    return;
  }

  if (emailInput.value.trim() === '') {
    alert('Please enter your email address.');
    return;
  }

  if (!isValidEmail(emailInput.value.trim())) {
    alert('Please enter a valid email address.');
    return;
  }

  if (phoneInput.value.trim() === '') {
    alert('Please enter your phone number.');
    return;
  }

  if (!isValidPhone(phoneInput.value.trim())) {
    alert('Please enter a valid phone number.');
    return;
  }

  
  form.submit();
});


function isValidEmail(email) {
  const emailRegex = /\S+@\S+\.\S+/;
  return emailRegex.test(email);
}


function isValidPhone(phone) {
  const phoneRegex = /^\d{10}$/;
  return phoneRegex.test(phone);
}
