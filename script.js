const moves = ['rock', 'paper', 'scissors'];

function playGame(playerMove) {
  const computerMove = getRandomMove();
  const result = getResult(playerMove, computerMove);
  displayResult(result);
}

function getRandomMove() {
  const randomIndex = Math.floor(Math.random() * moves.length);
  return moves[randomIndex];
}

function getResult(playerMove, computerMove) {
  if (playerMove === computerMove) {
    return 'It\'s a tie!!';
  } else if (
    (playerMove === 'rock' && computerMove === 'scissors') ||
    (playerMove === 'paper' && computerMove === 'rock') ||
    (playerMove === 'scissors' && computerMove === 'paper')
  ) {
    return 'You win!!';
  } else {
    return 'Computer wins!!';
  }
}

function displayResult(result) {
  const resultElement = document.getElementById('result');
  resultElement.innerHTML = `${result}`;
}
const moveButtons = document.getElementsByClassName('move');
for (let i = 0; i < moveButtons.length; i++) {
  moveButtons[i].addEventListener('click', function() {
    const playerMove = this.id;
    playGame(playerMove);
  });
}
