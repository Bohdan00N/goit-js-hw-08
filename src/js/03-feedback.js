var throttle = require('lodash.throttle');

const form = document.querySelector('.feedback-form');
const state = JSON.parse(localStorage.getItem('feedback-form-state'));
const email = document.querySelector('.feedback-form input');
const message = document.querySelector('.feedback-form textarea');

form.addEventListener('input', throttle(onFormData, 500));
form.addEventListener('submit', onSubmitForm);

const formData = state || {};

function onFormData(e) {
  formData[e.target.name] = e.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function onSubmitForm(e) {
  console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
  e.preventDefault();
  if (e.target.email.value === '' || e.target.message.value === '') {
    alert('Заповніть поле');
    return;
  }
  e.currentTarget.reset();
  localStorage.removeItem('feedback-form-state');
  formData.email = '';
  formData.message = '';
}

(function dataFromLocalStorage() {
  if (state) {
    email.value = state.email || '';
    message.value = state.message || '';
  }
})();
