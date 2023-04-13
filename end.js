const currentPlayer1 = localStorage.getItem('player1')
const currentPlayer2 = localStorage.getItem('player2')
const winner = localStorage.getItem('winner')

const boxNamePlayer = document.getElementById('winner-name-box')
boxNamePlayer.innerText = winner