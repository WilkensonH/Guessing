'use strict';

let score = 20;
let highScore = 0;

let randomNumber = Math.trunc(Math.random() * 20) + 1;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  // no guesss input
  if (!guess || guess > 20) {
    message('Enter a Correct Number (1 - 20) 🚫');
  } else if (guess === randomNumber) {
    document.querySelector('.number').textContent = randomNumber;
    message('Guess is Correct 🏆 ');
    document.querySelector('body').style.background = 'green';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
    // guess is wrong
  } else if (guess !== randomNumber) {
    if (score > 1) {
      message(guess > randomNumber ? 'Guess too high 📈' : 'Guess too low 📉 ');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      message(`You've lost the game`);
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  randomNumber = Math.trunc(Math.random() * 20) + 1;
  message('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.background = '#222222';
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
});

function message(message) {
  document.querySelector('.message').textContent = message;
}
