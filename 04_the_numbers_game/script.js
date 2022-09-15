'use strict';

// Store random number from 1 - 20
const cpuNum = Math.trunc(Math.random() * 20) + 1;

// Store initial score
let playerScore = 20;

// Set guessed number placeholder
document.querySelector('.ulc-number').textContent = '?';


// Get click event on button, pass as function exp to event listener
document.querySelector('.check').addEventListener('click', function () {
    const guessNum = Number(document.querySelector('#ulc-num-input').value);

    if (!guessNum) {
        document.querySelector('#ulc-play-msg').textContent = 'No number! 😜';
    } else if (guessNum === cpuNum) {
        playerScore++
        document.querySelector('#ulc-play-msg').textContent = 'Correct Guess!!! 🥳';

        document.querySelector('body').style.backgroundColor = 'green';
        
        document.querySelector('.ulc-number').style.width = '30rem';

        document.querySelector('.ulc-number').textContent = playerScore;
    } else if (guessNum > cpuNum) {
        // Run only if playerScore is greater than zero
        if (playerScore > 1) {
            document.querySelector('#ulc-play-msg').textContent = 'Yikes!!! Too High 😬';
            // Decrease score if guess is wrong
            playerScore--
            document.querySelector('.ulc-player-score').textContent = playerScore;
        } else {
            document.querySelector('#ulc-play-msg').textContent = 'Game over! ❌';
            document.querySelector('.ulc-player-score').textContent = playerScore;
        }
    } else if (guessNum < cpuNum) {
        // Run only if playerScore is greater than zero
        if (playerScore > 1) {
            document.querySelector('#ulc-play-msg').textContent = 'Yikes!!! Too Low 🥴';
            // Decrease score if guess is wrong
            playerScore--
            document.querySelector('.ulc-player-score').textContent = playerScore;
        } else {
            playerScore--
            document.querySelector('#ulc-play-msg').textContent = 'Game over! ❌';
            document.querySelector('.ulc-player-score').textContent = playerScore;
        }
    }
});


// Reset game function
document.querySelector('.reset').addEventListener('click', function () {
    // Reset player score
    playerScore = 20;
    document.querySelector('.ulc-player-score').textContent = playerScore;
    // Set guessed number placeholder
    document.querySelector('.ulc-number').textContent = '?';
    // Reset game message
    document.querySelector('#ulc-play-msg').textContent = 'Start Guessing...';
    // Reset player input field
    document.querySelector('#ulc-num-input').textContent = '';
})