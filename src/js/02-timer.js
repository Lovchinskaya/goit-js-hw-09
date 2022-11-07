import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const dayTimer = document.querySelector('#datetime-picker');

const refs = {
  btnStart: document.querySelector('[data-start]'),
  days: document.querySelector('[data-days]'),
  hours: document.querySelector('[data-hours]'),
  minutes: document.querySelector('[data-minutes]'),
  seconds: document.querySelector('[data-seconds]'),
};

const timer = {
  isActive: false,
  start() {
    if (this.isActive) {
      return;
    }
    this.isActive = true;
  },
};

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,

  onClose(selectedDates) {
    let intervalId = null;
    const currentTime = Date.now();

    if (selectedDates[0] < currentTime) {
      Notiflix.Notify.failure('Please choose a date in the future');
    }
    intervalId = setInterval(() => {
      const inputTime = selectedDates[0].getTime() - Date.now();

      const time = convertMs(inputTime);

      if (inputTime < 0) {
        return;
      } else {
        const { days, hours, minutes, seconds } = time;
        refs.days.textContent = `${days}`;
        refs.hours.textContent = `${hours}`;
        refs.minutes.textContent = `${minutes}`;
        refs.seconds.textContent = `${seconds}`;
      }

      if (time === 0) {
        clearInterval(intervalId);
      }
    }, 1000);
  },
};

refs.btnStart.addEventListener('click', startTimer);

flatpickr(dayTimer, options);

function pad(value) {
  return String(value).padStart(2, '0');
}

function convertMs(ms) {

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;


  const days = pad(Math.floor(ms / day));
  const hours = pad(Math.floor((ms % day) / hour));
  const minutes = pad(Math.floor(((ms % day) % hour) / minute));
  const seconds = pad(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}

function startTimer() {
  timer.start();
}