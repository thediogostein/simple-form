const form = document.querySelector('form');

function submitForm(e) {
  e.preventDefault();

  const dialog = document.querySelector('dialog');

  document.getElementById('name-output').textContent =
    form.querySelector('#name').value;

  document.getElementById('email-output').textContent =
    form.querySelector('#email').value;

  document.getElementById('phone-output').textContent =
    form.querySelector('#phone').value;

  document.getElementById('city-output').textContent =
    form.querySelector('#city').value;

  document.getElementById('dob-output').textContent =
    form.querySelector('#date-of-birth').value;

  document.getElementById('fav-color-output').textContent =
    form.querySelector('#fav-color').value;

  document.getElementById('fav-website-output').textContent =
    form.querySelector('#fav-website').value;

  document.getElementById('fav-movie-output').textContent = form.querySelector(
    'input[name="fav-movie"'
  ).value;

  document.getElementById('fav-actor-output').textContent =
    form.querySelector('#fav-actor').value;

  let likeReading = form.querySelector('#like-reading').checked;

  if (likeReading) {
    likeReading = 'Sim';
  } else {
    likeReading = 'Não';
  }
  document.getElementById('like-reading-output').textContent = likeReading;

  document.getElementById('bio-output').textContent =
    form.querySelector('#bio').value;

  dialog.showModal();

  dialog.querySelector('button').addEventListener('click', () => {
    dialog.close();
  });
}

form.addEventListener('submit', submitForm);
