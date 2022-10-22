'use strict';

// Set current score
let currentScore = 0;

// Store total scores
const totalScores = [0, 0];

// Set current player
let activePlayer = 0;

// Check game play progress
let isGameActive = true;

// Select elements
const score0 = document.getElementById('score--0');
const score1 = document.getElementById('score--1');
const gameDice = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const player0currScore = document.getElementById('current--0');
const player1currScore = document.getElementById('current--1');
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');

// Set initial score and dice value/state
const setInitScore = () => {
    score0.textContent = 0;
    score1.textContent = 0;
    gameDice.classList.add('hidden');
};

window.onload = function () {
    setInitScore();
};

// Reset Game
const newGame = function() {
    setInitScore();
    currentScore = 0;
    player0currScore.textContent = 0;
    player1currScore.textContent = 0;
    document.querySelector(`.player--${activePlayer}`).classList.remove('player--winner');
    document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
    activePlayer = 0;
    isGameActive = true;
    gameDice.classList.add('hidden');
}

// Switch player
const switchPlayer = function () {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    currentScore = 0;
    player0.classList.toggle('player--active');
    player1.classList.toggle('player--active');
};

// Check winner
const checkWinner = function () {
    if (totalScores[activePlayer] >= 100) {
        isGameActive = false;
        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
        document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
        gameDice.classList.add('hidden');
    } else {
        switchPlayer();
    }
};

// Roll button function
btnRoll.addEventListener('click', function () {
    if (isGameActive) {
        // Generate number from 1 to 6
        const dice = Math.trunc(Math.random() * 6) + 1;
        console.log(`Player rolled ${dice}`);
        // Show dice roll
        gameDice.classList.remove('hidden');
        gameDice.src = `dice-${dice}.png`;

        // Check dice roll and switch player
        if (dice !== 1) {
            // Add to current score
            currentScore += dice;
            document.getElementById(`current--${activePlayer}`).textContent =
                currentScore;
        } else {
            //Switch player
            switchPlayer();
        }
    }
});

btnHold.addEventListener('click', function () {
    if (isGameActive) {
        // Add current score to active player's score
        totalScores[activePlayer] += currentScore;
        // Modify current score active player
        document.getElementById(`score--${activePlayer}`).textContent =
            totalScores[activePlayer];
        // Check game winner
        checkWinner();
    }
});

btnNew.addEventListener('click', function() {
    newGame();
})