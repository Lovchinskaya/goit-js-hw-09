
const start = document.querySelector('[data-start]');
const stop = document.querySelector('[data-stop]');
let intervalID;
start.addEventListener('click', changeBGC);
stop.addEventListener('click', deleteInterval);

function getRandomHexColor() {
   let rgb = Math.floor(Math.random() * 16777215).toString(16);
    return `#${rgb}`;
}

function changeBGC() {
    start.disabled = true;
    stop.disabled = false;
    intervalID = setInterval(() => {
        console.log(getRandomHexColor());
        document.body.style.backgroundColor = `${getRandomHexColor()}`;

    }, 1000); 
}

function deleteInterval() {
    clearInterval(intervalID);
    start.disabled = false;
    stop.disabled = true;
}