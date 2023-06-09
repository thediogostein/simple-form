const usernameInput = document.querySelector('[name="name"]');

usernameInput.addEventListener('invalid', () => {
  usernameInput.setCustomValidity('Please enter your name.');
});
