const loader = document.getElementById('loader');
const mein = document.getElementById('mein');
const days = document.getElementById('days');
const hours = document.getElementById('hour');
const minuts = document.getElementById('min');
const second = document.getElementById('sec');

const countdown = () => {
   const currentDate = new Date().getTime();
   const ramadan = new Date('1 March 2025').getTime();
   const calculate = ramadan - currentDate;

   const dy = Math.floor(calculate / (1000 * 60 * 60 * 24));
   const hr = Math.floor(calculate % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
   const min = Math.floor(calculate % (1000 * 60 * 60) / (1000 * 60));
   const sec = Math.floor(calculate % (1000 * 60) / (1000));

   days.textContent = dy;
   hours.textContent = hr;
   minuts.textContent = min;
   second.textContent = sec;
};

setInterval(countdown, 1000);

const load = () => {
   setTimeout(() => {
      loader.style.display = 'none';
      mein.style.display = 'block';
   },300)
};

window.addEventListener('load', load)

