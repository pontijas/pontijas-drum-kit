'use strict';

function playSound(e) {
  const sound = document.querySelector(`audio[data-key=77]`);
  console.log(sound);
  console.log(e.keyCode);
}

window.addEventListener('keydown', playSound);
