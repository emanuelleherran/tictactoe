let namePlayer1 = document.getElementById('name1')
let namePlayer2 = document.getElementById('name2')
const startGameBtn = document.getElementById('start-game')

startGameBtn.addEventListener('click', startGame)

function startGame(ev){
    ev.preventDefault()
    
    //Verifica se os nomes dos players estão preenchido, se sim, continua. Se não, pede pra preencher
    if(namePlayer1.value === '' || namePlayer2.value === ''){
        alert("Enter player's names")
    }else{
        namePlayer1 = namePlayer1.value
        namePlayer2 = namePlayer2.value
        localStorage.setItem('player1', namePlayer1)
        localStorage.setItem('player2', namePlayer2)
        location.replace("/game.html")
    }
}

