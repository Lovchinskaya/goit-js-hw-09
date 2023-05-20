import Notiflix from 'notiflix';

const delay = document.querySelector(['delay']);
const step = document.querySelector(['step']);
const amount = document.querySelector(['amount']);
const refs = {
  form: document.querySelector('.form'),
};

refs.form.addEventListener('submit', createPromise);

const  createPromise = new Promise((position, delay) =>{
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
    Notiflix.Notify.success('Success');
  } else {
    // Reject
    Notiflix.Notify.failure('Failure');
  }
}, 1000)
  //  createPromise(1, 1500)
   // .then(({ position, delay }) => {
   //     console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
    //  })
    //  .catch(({ position, delay }) => {
    //    console.log(`❌ Rejected promise ${position} in ${delay}ms`);
    //  });
//}

//function createPromise(position, delay) {
 // const shouldResolve = Math.random() > 0.3;
 // for (let i = 0; i > amount.value; i = +1) {
 //   setTimeout(() => {
 //     setInterval(() => {
 //       const result = () => {
         // if (shouldResolve) {
         // Fulfill
          //  Notiflix.Notify.success('Success');
          //} else {
            // Reject
          //  Notiflix.Notify.failure('Failure');
         // }
 //       }
 //     }, step)
 //   }, delay);
 //   console.log(result);
 // }
 // return result;
//}
//}


//1. delay = timeout; step = interval; amount = i
//2. circle
//3. if / else  success/faliure
