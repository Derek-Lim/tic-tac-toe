//Gameboard controls the state of the board
function Gameboard() {
    const rows = 3;
    const columns = 3;
    const board = [];

    //2d array represents the state of the board
    for (let i = 0; i < rows; i++) {
        board[i] = [];
        for (let j = 0; j < columns; j++) {
            board[i].push(Grid());
        }
    }

    const getBoard = () => board;

    const finalizeGrid = (row, column, playerMarker) => {
        //make sure selected grid is empty, then mark grid
        if (board[row][column].value === undefined) {
            board[row][column].markGrid(playerMarker);
            board[row][column].value = playerMarker;
            gridMarked = true;
        } else {
            alert('Pick a different square.');
            gridMarked = false;
        }
    };

    return {getBoard, finalizeGrid};
}

//Grid represents a "square" on the board, whose value starts off undefined
//Value will change to either "X" or "O" as match progresses.
function Grid() {
    let value = undefined;

    //Accept a player's marker to change the value of the grid
    const markGrid = (playerMarker) => {
        value = playerMarker;
    };

    const getValue = () => value;

    return {markGrid, getValue};
}

//GameController controls the state of the game
function GameController(
    playerOneName = 'Player One',
    playerTwoName = 'Player Two'
) {
    const playerTurnDiv = document.querySelector('.turn');
    
    const board = Gameboard();

    const players = [
        {
            name: playerOneName,
            marker: 'X'
        },
        {
            name: playerTwoName,
            marker: 'O'
        }
    ];

    let activePlayer = players[0];

    const switchPlayerTurn = () => {
        activePlayer = activePlayer === players[0] ? players[1] : players[0];
    };

    const getActivePlayer = () => activePlayer;

    const checkWinner = () => {
        gameboard = board.getBoard();

        if (gameboard[0][0].value === 'X' 
            && gameboard[0][1].value === 'X'
            && gameboard[0][2].value === 'X') {
            playerTurnDiv.textContent = 'Player 1 Wins!!!'
        } else if (gameboard[0][0].value === 'O' 
            && gameboard[0][1].value === 'O'
            && gameboard[0][2].value === 'O') {
            playerTurnDiv.textContent = 'Player 2 Wins!!!'
        } else if (gameboard[1][0].value === 'X' 
            && gameboard[1][1].value === 'X'
            && gameboard[1][2].value === 'X') {
            playerTurnDiv.textContent = 'Player 1 Wins!!!'
        } else if (gameboard[1][0].value === 'O' 
            && gameboard[1][1].value === 'O'
            && gameboard[1][2].value === 'O') {
            playerTurnDiv.textContent = 'Player 2 Wins!!!'
        } else if (gameboard[2][0].value === 'X' 
            && gameboard[2][1].value === 'X'
            && gameboard[2][2].value === 'X') {
            playerTurnDiv.textContent = 'Player 1 Wins!!!'
        } else if (gameboard[2][0].value === 'O' 
            && gameboard[2][1].value === 'O'
            && gameboard[2][2].value === 'O') {
            playerTurnDiv.textContent = 'Player 2 Wins!!!'
        } else if (gameboard[0][0].value === 'X' 
            && gameboard[1][0].value === 'X'
            && gameboard[2][0].value === 'X') {
            playerTurnDiv.textContent = 'Player 1 Wins!!!'
        } else if (gameboard[0][0].value === 'O' 
            && gameboard[1][0].value === 'O'
            && gameboard[2][0].value === 'O') {
            playerTurnDiv.textContent = 'Player 2 Wins!!!'
        } else if (gameboard[0][1].value === 'X' 
            && gameboard[1][1].value === 'X'
            && gameboard[2][1].value === 'X') {
            playerTurnDiv.textContent = 'Player 1 Wins!!!'
        } else if (gameboard[0][1].value === 'O' 
            && gameboard[1][1].value === 'O'
            && gameboard[2][1].value === 'O') {
            playerTurnDiv.textContent = 'Player 2 Wins!!!'
        } else if (gameboard[0][2].value === 'X' 
            && gameboard[1][2].value === 'X'
            && gameboard[2][2].value === 'X') {
            playerTurnDiv.textContent = 'Player 1 Wins!!!'
        } else if (gameboard[0][2].value === 'O' 
            && gameboard[1][2].value === 'O'
            && gameboard[2][2].value === 'O') {
            playerTurnDiv.textContent = 'Player 2 Wins!!!'
        } else if (gameboard[0][0].value === 'X' 
            && gameboard[1][1].value === 'X'
            && gameboard[2][2].value === 'X') {
            playerTurnDiv.textContent = 'Player 1 Wins!!!'
        } else if (gameboard[0][0].value === 'O' 
            && gameboard[1][1].value === 'O'
            && gameboard[2][2].value === 'O') {
            playerTurnDiv.textContent = 'Player 2 Wins!!!'
        } else if (gameboard[0][2].value === 'X' 
            && gameboard[1][1].value === 'X'
            && gameboard[2][0].value === 'X') {
            playerTurnDiv.textContent = 'Player 1 Wins!!!'
        } else if (gameboard[0][2].value === 'O' 
            && gameboard[1][1].value === 'O'
            && gameboard[2][0].value === 'O') {
            playerTurnDiv.textContent = 'Player 2 Wins!!!'
        }
    }

    const playRound = (row, column) => {
        board.finalizeGrid(row, column, getActivePlayer().marker); //mark grid

        checkWinner();

        if (gridMarked === true) {
            switchPlayerTurn();
        }
    }

    return {playRound, getActivePlayer, getBoard: board.getBoard};
}