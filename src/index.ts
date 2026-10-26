import { concatenation } from './concatenation.js';

const form = document.querySelector<HTMLFormElement>('#concatenation-form');
const firstInput = document.querySelector<HTMLInputElement>('#first-string');
const secondInput = document.querySelector<HTMLInputElement>('#second-string');
const result = document.querySelector<HTMLOutputElement>('#result');

if (!form || !firstInput || !secondInput || !result) {
  throw new Error('The concatenation form is missing required elements.');
}

form.addEventListener('submit', event => {
  event.preventDefault();
  result.textContent = concatenation(firstInput.value, secondInput.value);
});
