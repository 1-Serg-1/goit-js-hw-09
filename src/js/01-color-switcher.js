
const refs = {
  btnStart: document.querySelector('button[data-start]'),
  btnStop: document.querySelector('button[data-stop]')
};

refs.btnStart.addEventListener('click', onStart);
refs.btnStop.addEventListener('click', onStop);

let intervalId;

function onStart() {
  refs.btnStart.disabled = true;
  refs.btnStop.disabled = false;

  intervalId = setInterval(changeColorBody, 1000);
}

function onStop() {
  refs.btnStart.disabled = false;
  refs.btnStop.disabled = true;
  clearInterval(intervalId);
}

function changeColorBody() {
  const currentColor = getRandomHexColor();
  refs.btnStart.parentElement.style.background = `${currentColor}`;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

