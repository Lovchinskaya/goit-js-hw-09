import Notiflix from 'notiflix';
const refs = document.querySelector('.form')

function  createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
          if (shouldResolve) {
            resolve({position, delay})
          } else {
           reject({position, delay})
          }
      }, delay)    
  })
};

refs.addEventListener("submit", (e)=> {
  e.preventDefault();
  const {
    elements: { delay, step, amount},
  } = e.currentTarget;
  const firstDelay = Number(delay.value);
  const delayStep = Number(step.value);
  const amountValue = Number(amount.value);
  for(let position = 1; position<=amountValue; position += 1){
    const delay = firstDelay + delayStep *(position -1);
    createPromise(position, delay)
    .then(({ position, delay }) => {
      console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
      Notiflix.Notify.success('Success');
    })
    .catch(({ position, delay }) => {
      console.log(`❌ Rejected promise ${position} in ${delay}ms`);
      Notiflix.Notify.failure('Failure');
    });
  }
});

 
 