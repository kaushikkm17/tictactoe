let board = ['','','','','','','','',''];
let boardSquares = document.querySelectorAll('.gameboard-square')
let xo = 'X'

//get the O/X from board array, update the square in the DOM to either O/X
const updateBoard = () => {
    for (let i = 0; i <=8; i++) {
        boardSquares[i].innerHTML = board[i]     
    }
}

const endGame = (winner) => {
    const displayWinner = document.createElement('h4');
    displayWinner.innerHTML = winner + ' is the winner'
    displayWinner.id = 'declare-winner'

    const playAgainButton = document.createElement('button')
    playAgainButton.innerHTML = 'Play Again'
    playAgainButton.id = 'play-again-button'

    document.querySelector('#after-game').appendChild(displayWinner);
    document.querySelector('#after-game').appendChild(playAgainButton);

    document.querySelector('#play-again-button').addEventListener('click', () => {
        board = ['','','','','','','','',''];
        updateBoard()
        document.querySelector('#declare-winner').remove()
        document.querySelector('#play-again-button').remove()
    })
}

//check for 3 in a row
const isGameOver = () => {
    //horizontal win
    if(board[0] === board[1] && board[1] === board[2] && board[0] !== '') {
        endGame(board[0])
    } else if(board[3] === board[4] && board[4] === board[5] && board[3] !== '') {
        endGame(board[3])
    } else if(board[6] === board[7] && board[7] === board[8] && board[6] !== '') {
        endGame(board[6])
    }
    //vertical win
    else if(board[0] === board[3] && board[3] === board[6] && board[0] !== '') {
        endGame(board[0])
    } else if(board[1] === board[4] && board[4] === board[7] && board[1] !== '') {
        endGame(board[1])
    } else if(board[2] === board[5] && board[5] === board[8] && board[2] !== '') {
        endGame(board[2])
    }
    //diagonal win
    else if(board[0] === board[4] && board[4] === board[8] && board[0] !== '') {
        endGame(board[0])
    } else if(board[2] === board[4] && board[4] === board[6] && board[2] !== '') {
        endGame(board[2])
    }
}

//add event listener for each square that adds x/o to the square
//update board with x/o at correct index
for (let i = 0; i < boardSquares.length; i++) {
    boardSquares[i].addEventListener('click', () => {
        if (board[i] === '') {
            board[i] = xo;
            updateBoard()
            if(xo === 'X') {xo = 'O'}
            else{xo = 'X'}
        }
        isGameOver()
        
    })
}

