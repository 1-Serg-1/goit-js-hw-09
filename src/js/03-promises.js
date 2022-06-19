import Notiflix from 'notiflix';

const refs = {  
  form: document.querySelector('form'),
  delay: document.querySelector('[name="delay"]'),
  step: document.querySelector('[name="step"]'),
  amount: document.querySelector('[name="amount"]'),
}

refs.form.addEventListener('submit', (event) => {
  event.preventDefault();

let delayParse = parseInt(refs.delay.value);
const stepParse = parseInt(refs.step.value);
const amountParse = parseInt(refs.amount.value);
  for (let i = 1; i <= amountParse; i++) {
    createPromise(i, delayParse)
      .then(value => {
        Notiflix.Notify.success(value);
      })
      .catch(error => {
        Notiflix.Notify.failure(error);
      });
    delayParse += stepParse;
  }
});

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;

    return new Promise((resolve, reject) =>{
      setTimeout(() => {
        if (shouldResolve) {
          resolve(`✅ Fulfilled promise ${position} in ${delay}ms`);          
        } else {
          reject(`❌ Rejected promise ${position} in ${delay}ms`);
        }
      }, delay);
    });
}