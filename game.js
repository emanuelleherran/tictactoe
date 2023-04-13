const board = document.getElementById('tictactoe-board-table')
const currentPlayerBox = document.getElementById('current-player-box')
const currentPlayer1 = localStorage.getItem('player1')
const currentPlayer2 = localStorage.getItem('player2')
let saveMovesPlayer1 = []
let saveMovesPlayer2 = []
let turn = 0
let win
let td11, td12, td13, td21, td22, td23, td31, td32, td33

board.addEventListener('click', game)

changeCurrentPlayer()

function game(ev){
    ev.preventDefault()

    let tablePosition = ev.target.id

    const getTablePosition = document.getElementById(tablePosition)

    if(tablePosition && turn%2 !== 0){//adiciona um X no board, no campo em que o player1 fez a jogada
        const iconPlayer = getTablePosition.querySelector('.design')
        iconPlayer.innerText = 'X'
        iconPlayer.style.color = '#ee9599'
        saveMovesPlayer1.push(tablePosition)
        win = verifyWinnerPlayer1()

        changeCurrentPlayer()

        if(win){
            localStorage.setItem('winner', currentPlayer1)
            board.removeEventListener('click', game)
            setTimeout(function(){
                location.replace("/end.html")
            }, 1000)
        }

    }else if(tablePosition && turn%2 === 0){//adiciona um O no board, no campo em que o player2 fez a jogada
        const iconPlayer = getTablePosition.querySelector('.design')
        iconPlayer.innerText = 'O'
        iconPlayer.style.color = '#40a4a8'
        saveMovesPlayer2.push(tablePosition)
        win = verifyWinnerPlayer2()

        changeCurrentPlayer()

        if(win){
            localStorage.setItem('winner', currentPlayer2)
            board.removeEventListener('click', game)
            setTimeout(function(){
                location.replace("/end.html")
            }, 1000)
        }
    }
}

//Valida se o player1 fez alguma jogada vencedora e muda a cor da jogada vencedora
function verifyWinnerPlayer1(){
    td11 = saveMovesPlayer1.includes('td-1-1')
    td12 = saveMovesPlayer1.includes('td-1-2')
    td13 = saveMovesPlayer1.includes('td-1-3')
    td21 = saveMovesPlayer1.includes('td-2-1')
    td22 = saveMovesPlayer1.includes('td-2-2')
    td23 = saveMovesPlayer1.includes('td-2-3')
    td31 = saveMovesPlayer1.includes('td-3-1')
    td32 = saveMovesPlayer1.includes('td-3-2')
    td33 = saveMovesPlayer1.includes('td-3-3')

    if(td11 && td12 && td13){
        const changeColor1 = document.querySelector('#td-1-1 .design')
        changeColor1.style.color = '#203e59'
        const changeColor2 = document.querySelector('#td-1-2 .design')
        changeColor2.style.color = '#203e59'
        const changeColor3 = document.querySelector('#td-1-3 .design')
        changeColor3.style.color = '#203e59'
        return true
    }else if(td21 && td22 && td23){
        const changeColor1 = document.querySelector('#td-2-1 .design')
        changeColor1.style.color = '#203e59'
        const changeColor2 = document.querySelector('#td-2-2 .design')
        changeColor2.style.color = '#203e59'
        const changeColor3 = document.querySelector('#td-2-3 .design')
        changeColor3.style.color = '#203e59'
        return true
    }else if(td31 && td32 && td33){
        const changeColor1 = document.querySelector('#td-3-1 .design')
        changeColor1.style.color = '#203e59'
        const changeColor2 = document.querySelector('#td-3-2 .design')
        changeColor2.style.color = '#203e59'
        const changeColor3 = document.querySelector('#td-3-3 .design')
        changeColor3.style.color = '#203e59'
        return true
    }else if(td11 && td21 & td31){
        const changeColor1 = document.querySelector('#td-1-1 .design')
        changeColor1.style.color = '#203e59'
        const changeColor2 = document.querySelector('#td-2-2 .design')
        changeColor2.style.color = '#203e59'
        const changeColor3 = document.querySelector('#td-3-1 .design')
        changeColor3.style.color = '#203e59'
        return true
    }else if(td12 && td22 & td32){
        const changeColor1 = document.querySelector('#td-1-2 .design')
        changeColor1.style.color = '#203e59'
        const changeColor2 = document.querySelector('#td-2-2 .design')
        changeColor2.style.color = '#203e59'
        const changeColor3 = document.querySelector('#td-3-2 .design')
        changeColor3.style.color = '#203e59'
        return true
    }else if(td13 && td23 & td33){
        const changeColor1 = document.querySelector('#td-1-3 .design')
        changeColor1.style.color = '#203e59'
        const changeColor2 = document.querySelector('#td-2-3 .design')
        changeColor2.style.color = '#203e59'
        const changeColor3 = document.querySelector('#td-3-3 .design')
        changeColor3.style.color = '#203e59'
        return true
    }else if(td11 && td22 & td33){
        const changeColor1 = document.querySelector('#td-1-1 .design')
        changeColor1.style.color = '#203e59'
        const changeColor2 = document.querySelector('#td-2-2 .design')
        changeColor2.style.color = '#203e59'
        const changeColor3 = document.querySelector('#td-3-3 .design')
        changeColor3.style.color = '#203e59'
        return true
    }else if(td13 && td22 & td31){
        const changeColor1 = document.querySelector('#td-1-3 .design')
        changeColor1.style.color = '#203e59'
        const changeColor2 = document.querySelector('#td-2-2 .design')
        changeColor2.style.color = '#203e59'
        const changeColor3 = document.querySelector('#td-3-1 .design')
        changeColor3.style.color = '#203e59'
        return true
    }else{
        return false
    }
}

//Valida se o player2 fez alguma jogada vencedora e muda a cor da jogada vencedora
function verifyWinnerPlayer2(){
    td11 = saveMovesPlayer2.includes('td-1-1')
    td12 = saveMovesPlayer2.includes('td-1-2')
    td13 = saveMovesPlayer2.includes('td-1-3')
    td21 = saveMovesPlayer2.includes('td-2-1')
    td22 = saveMovesPlayer2.includes('td-2-2')
    td23 = saveMovesPlayer2.includes('td-2-3')
    td31 = saveMovesPlayer2.includes('td-3-1')
    td32 = saveMovesPlayer2.includes('td-3-2')
    td33 = saveMovesPlayer2.includes('td-3-3')

    if(td11 && td12 && td13){
        const changeColor1 = document.querySelector('#td-1-1 .design')
        changeColor1.style.color = '#203e59'
        const changeColor2 = document.querySelector('#td-1-2 .design')
        changeColor2.style.color = '#203e59'
        const changeColor3 = document.querySelector('#td-1-3 .design')
        changeColor3.style.color = '#203e59'
        return true
    }else if(td21 && td22 && td23){
        const changeColor1 = document.querySelector('#td-2-1 .design')
        changeColor1.style.color = '#203e59'
        const changeColor2 = document.querySelector('#td-2-2 .design')
        changeColor2.style.color = '#203e59'
        const changeColor3 = document.querySelector('#td-2-3 .design')
        changeColor3.style.color = '#203e59'
        return true
    }else if(td31 && td32 && td33){
        const changeColor1 = document.querySelector('#td-3-1 .design')
        changeColor1.style.color = '#203e59'
        const changeColor2 = document.querySelector('#td-3-2 .design')
        changeColor2.style.color = '#203e59'
        const changeColor3 = document.querySelector('#td-3-3 .design')
        changeColor3.style.color = '#203e59'
        return true
    }else if(td11 && td21 & td31){
        const changeColor1 = document.querySelector('#td-1-1 .design')
        changeColor1.style.color = '#203e59'
        const changeColor2 = document.querySelector('#td-2-2 .design')
        changeColor2.style.color = '#203e59'
        const changeColor3 = document.querySelector('#td-3-1 .design')
        changeColor3.style.color = '#203e59'
        return true
    }else if(td12 && td22 & td32){
        const changeColor1 = document.querySelector('#td-1-2 .design')
        changeColor1.style.color = '#203e59'
        const changeColor2 = document.querySelector('#td-2-2 .design')
        changeColor2.style.color = '#203e59'
        const changeColor3 = document.querySelector('#td-3-2 .design')
        changeColor3.style.color = '#203e59'
        return true
    }else if(td13 && td23 & td33){
        const changeColor1 = document.querySelector('#td-1-3 .design')
        changeColor1.style.color = '#203e59'
        const changeColor2 = document.querySelector('#td-2-3 .design')
        changeColor2.style.color = '#203e59'
        const changeColor3 = document.querySelector('#td-3-3 .design')
        changeColor3.style.color = '#203e59'
        return true
    }else if(td11 && td22 & td33){
        const changeColor1 = document.querySelector('#td-1-1 .design')
        changeColor1.style.color = '#203e59'
        const changeColor2 = document.querySelector('#td-2-2 .design')
        changeColor2.style.color = '#203e59'
        const changeColor3 = document.querySelector('#td-3-3 .design')
        changeColor3.style.color = '#203e59'
        return true
    }else if(td13 && td22 & td31){
        const changeColor1 = document.querySelector('#td-1-3 .design')
        changeColor1.style.color = '#203e59'
        const changeColor2 = document.querySelector('#td-2-2 .design')
        changeColor2.style.color = '#203e59'
        const changeColor3 = document.querySelector('#td-3-1 .design')
        changeColor3.style.color = '#203e59'
        return true
    }else{
        return false
    }
}

//função que cria o meu elemento que exibe o jogador da vez e exibe o jogador da vez, sempre começando pelo player1
function changeCurrentPlayer(){
    if(turn === 0){//Primeiro if cria os elementos, e sempre vamos passar por ele apenas uma vez
        const iconDesign = document.createElement('div')
        iconDesign.className = 'design'
        iconDesign.innerText = 'X'
        iconDesign.style.color = '#ee9599'
        iconDesign.style.fontSize = '30px'
        iconDesign.style.paddingLeft = '20px'

        const nameCurrentPlayer = document.createElement('p')
        nameCurrentPlayer.className = 'name-current-player'
        nameCurrentPlayer.id = 'name-current-player'
        nameCurrentPlayer.innerText = currentPlayer1

        currentPlayerBox.append(iconDesign, nameCurrentPlayer)

        turn++
    }else if(turn%2 !== 0){//Aqui nas jogadas de numero impar, sempre atribuiremos o icone O e o nome do player2 que é o próximo jogador da rodada
        const getIconDesign = document.querySelector('.design')
        getIconDesign.innerText = 'O'
        getIconDesign.style.color = '#40a4a8'

        const getNameCurrentPlayer = document.getElementById('name-current-player')
        getNameCurrentPlayer.innerText = currentPlayer2
        
        currentPlayerBox.append(getIconDesign, getNameCurrentPlayer)
        turn++
    }else{//Atribuindo icone X e player1 para jogadas pares como próximo jogador da rodada
        const getIconDesign = document.querySelector('.design')
        getIconDesign.innerText = 'X'
        getIconDesign.style.color = '#ee9599'

        const getNameCurrentPlayer = document.getElementById('name-current-player')
        getNameCurrentPlayer.innerText = currentPlayer1
        
        currentPlayerBox.append(getIconDesign, getNameCurrentPlayer)
        turn++     
    }
}