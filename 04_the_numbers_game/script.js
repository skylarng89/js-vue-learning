'use strict'

const gameVersion = '1.2'
console.log(`Version: ${gameVersion}`)

// Store random number from 1 - 20 in cpu
let cpuNum = Math.trunc(Math.random() * 30) + 1

// Store initial score
let playerScore = 20
const printScore = () =>
  (document.getElementsByClassName('ulc-player-score')[0].textContent =
    playerScore)
printScore()

// Set highscore
let highScore = 0

// Set guessed number placeholder
const guessPlaceholder = () => (document.getElementsByClassName('ulc-number')[0].textContent = '?')

// Set messages
const correctGuessMsg = () => (document.getElementById('ulc-play-msg').textContent = 'Correct Guess!!! 🥳')
const emptyNumMsg = () => (document.getElementById('ulc-play-msg').textContent = 'No number! 😜')
const lowNumMsg = () => (document.getElementById('ulc-play-msg').textContent = 'Yikes!!! Too Low 🥴')
const highNumMsg = () => (document.getElementById('ulc-play-msg').textContent = 'Yikes!!! Too High 😬')
const gameOverMsg = () => (document.getElementById('ulc-play-msg').textContent = 'Game over! ❌')

// Set game background colour on correct guess
const correctGuessBg = function () {
  document.getElementsByTagName('body')[0].style.backgroundColor = '#20e7a7'
  document.getElementsByTagName('body')[0].style.color = '#ffffff'
}

const normalBgColor = function () {
  document.getElementsByTagName('body')[0].style.backgroundColor = 'var(--black-l2)'
  document.getElementsByTagName('body')[0].style.color = '#ffffff'
}

// Increment||Decrement player score on correct guess
const addScore = () => (playerScore++)
const subScore = () => (playerScore--)

// Disable/Enable Check button
const disableCheckBtn = function () {
  document.querySelectorAll('button.check')[0].disabled = true
  document.querySelectorAll('button.check')[0].style.backgroundColor =
    '#f5f5f5'
  document.querySelectorAll('button.check')[0].style.color =
    '#a5a5a5'
}
const enableCheckBtn = function () {
  document.querySelectorAll('button.check')[0].disabled = false
  document.querySelectorAll('button.check')[0].style.backgroundColor =
    'var(--blue)'
  document.querySelectorAll('button.check')[0].style.color =
    'var(--white-l1)'
}

const correctSound = new Audio('./media/audio/correct.mp3')
// correctSound.play();

const wrongSound = new Audio('./media/audio/wrong.mp3')
// wrongSound.play();

// Get click event on button, pass as function exp to event listener
document
  .getElementsByClassName('check')[0]
  .addEventListener('click', function () {
    // Read player input
    let guessNum = Number(document.getElementById('ulc-num-input').value)
    if (!guessNum) {
      wrongSound.play()
      emptyNumMsg()
      printScore()
    } else if (playerScore === 0 && guessNum !== cpuNum) {
      wrongSound.play()
      gameOverMsg()
      disableCheckBtn()
    } else if (guessNum < cpuNum) {
      wrongSound.play()
      subScore()
      printScore()
      lowNumMsg()
      guessNum = Number(document.getElementById('ulc-num-input').value)
    } else if (guessNum > cpuNum) {
      wrongSound.play()
      subScore()
      printScore()
      highNumMsg()
      guessNum = Number(document.getElementById('ulc-num-input').value)
    } else if (guessNum === cpuNum) {
      correctSound.play()
      disableCheckBtn()
      guessPlaceholder()
      addScore()
      printScore()
      correctGuessMsg()
      correctGuessBg()
      setTimeout(() => {
        normalBgColor()
        enableCheckBtn()
      }, 3500)
      if (playerScore > highScore) {
        highScore = playerScore
        document.getElementById('ulc-player-highscore').textContent = highScore
      }
      cpuNum = Math.trunc(Math.random() * 20) + 1
      // guessNum = Number(document.getElementById("ulc-num-input").value);
      document.getElementById('ulc-num-input').value = ''
    }
  })

// Reset game function
document.querySelector('.reset').addEventListener('click', function () {
  // Reset player score
  playerScore = 20
  highScore = 0
  document.getElementsByClassName('ulc-player-score')[0].textContent =
    playerScore
  // Set guessed number placeholder
  guessPlaceholder()
  // Reset game message
  document.getElementById('ulc-play-msg').textContent = 'Start guessing...'
  // Reset player input field
  document.getElementById('ulc-num-input').value = ''
  // Reset Check button
  enableCheckBtn()
})
