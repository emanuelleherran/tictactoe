const currentPlayer1 = localStorage.getItem('player1')
const currentPlayer2 = localStorage.getItem('player2')
const winner = localStorage.getItem('winner')

//Exibe o nome do vencedor na tela final
const boxNamePlayer = document.getElementById('winner-name-box')
boxNamePlayer.innerText = winner