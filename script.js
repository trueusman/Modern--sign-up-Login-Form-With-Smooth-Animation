const card = document.getElementById('card');
const showSignUp = document.getElementById('showSignUp');
const showLogin = document.getElementById('showLogin');

showSignUp.addEventListener('click', () => {
  card.classList.add('flip');
});

showLogin.addEventListener('click', () => {
  card.classList.remove('flip');
});
