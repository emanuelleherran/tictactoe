const currentPlayer1 = localStorage.getItem('player1')
const currentPlayer2 = localStorage.getItem('player2')
const winner = localStorage.getItem('winner')
const tie = localStorage.getItem('tie')

//Exibe o nome do vencedor na tela final ou empate
if(tie === 'false'){
    const boxNamePlayer = document.getElementById('winner-name-box')
    boxNamePlayer.innerText = winner

    const boxMessage = document.getElementById('winner-box')
    boxMessage.innerText = 'You Win!!!'
}else{
    const boxMessage = document.getElementById('winner-box')
    boxMessage.innerText = 'It\'s a tie!!'
}

