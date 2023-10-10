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

    let matchOver = false;

    const switchPlayerTurn = () => {
        activePlayer = activePlayer === players[0] ? players[1] : players[0];
    };

    const getActivePlayer = () => activePlayer;

    const checkMatchOver = () => matchOver;

    const checkWinner = () => {
        gameboard = board.getBoard();

        const unmarkedGridsInRow1 = gameboard[0].filter((grid) => grid.value === undefined)
        const unmarkedGridsInRow2 = gameboard[1].filter((grid) => grid.value === undefined)
        const unmarkedGridsInRow3 = gameboard[2].filter((grid) => grid.value === undefined)
    
        unmarkedGrids = unmarkedGridsInRow1.length + unmarkedGridsInRow2.length + unmarkedGridsInRow3.length

        if (gameboard[0][0].value === 'X' 
            && gameboard[0][1].value === 'X'
            && gameboard[0][2].value === 'X') {
            matchOver = true;
            playerTurnDiv.textContent = 'Player 1 Wins!!!'
        } else if (gameboard[0][0].value === 'O' 
            && gameboard[0][1].value === 'O'
            && gameboard[0][2].value === 'O') {
            matchOver = true;
            playerTurnDiv.textContent = 'Player 2 Wins!!!'
        } else if (gameboard[1][0].value === 'X' 
            && gameboard[1][1].value === 'X'
            && gameboard[1][2].value === 'X') {
            matchOver = true;
            playerTurnDiv.textContent = 'Player 1 Wins!!!'
        } else if (gameboard[1][0].value === 'O' 
            && gameboard[1][1].value === 'O'
            && gameboard[1][2].value === 'O') {
            matchOver = true;
            playerTurnDiv.textContent = 'Player 2 Wins!!!'
        } else if (gameboard[2][0].value === 'X' 
            && gameboard[2][1].value === 'X'
            && gameboard[2][2].value === 'X') {
            matchOver = true;
            playerTurnDiv.textContent = 'Player 1 Wins!!!'
        } else if (gameboard[2][0].value === 'O' 
            && gameboard[2][1].value === 'O'
            && gameboard[2][2].value === 'O') {
            matchOver = true;
            playerTurnDiv.textContent = 'Player 2 Wins!!!'
        } else if (gameboard[0][0].value === 'X' 
            && gameboard[1][0].value === 'X'
            && gameboard[2][0].value === 'X') {
            matchOver = true;
            playerTurnDiv.textContent = 'Player 1 Wins!!!'
        } else if (gameboard[0][0].value === 'O' 
            && gameboard[1][0].value === 'O'
            && gameboard[2][0].value === 'O') {
            matchOver = true;
            playerTurnDiv.textContent = 'Player 2 Wins!!!'
        } else if (gameboard[0][1].value === 'X' 
            && gameboard[1][1].value === 'X'
            && gameboard[2][1].value === 'X') {
            matchOver = true;
            playerTurnDiv.textContent = 'Player 1 Wins!!!'
        } else if (gameboard[0][1].value === 'O' 
            && gameboard[1][1].value === 'O'
            && gameboard[2][1].value === 'O') {
            matchOver = true;
            playerTurnDiv.textContent = 'Player 2 Wins!!!'
        } else if (gameboard[0][2].value === 'X' 
            && gameboard[1][2].value === 'X'
            && gameboard[2][2].value === 'X') {
            matchOver = true;
            playerTurnDiv.textContent = 'Player 1 Wins!!!'
        } else if (gameboard[0][2].value === 'O' 
            && gameboard[1][2].value === 'O'
            && gameboard[2][2].value === 'O') {
            matchOver = true;
            playerTurnDiv.textContent = 'Player 2 Wins!!!'
        } else if (gameboard[0][0].value === 'X' 
            && gameboard[1][1].value === 'X'
            && gameboard[2][2].value === 'X') {
            matchOver = true;
            playerTurnDiv.textContent = 'Player 1 Wins!!!'
        } else if (gameboard[0][0].value === 'O' 
            && gameboard[1][1].value === 'O'
            && gameboard[2][2].value === 'O') {
            matchOver = true;
            playerTurnDiv.textContent = 'Player 2 Wins!!!'
        } else if (gameboard[0][2].value === 'X' 
            && gameboard[1][1].value === 'X'
            && gameboard[2][0].value === 'X') {
            matchOver = true;
            playerTurnDiv.textContent = 'Player 1 Wins!!!'
        } else if (gameboard[0][2].value === 'O' 
            && gameboard[1][1].value === 'O'
            && gameboard[2][0].value === 'O') {
            matchOver = true;
            playerTurnDiv.textContent = 'Player 2 Wins!!!'
        } else if (unmarkedGrids === 0) {
            matchOver = true;
            playerTurnDiv.textContent = 'Tie!!!'
        }
    }

    const playRound = (row, column) => {
        board.finalizeGrid(row, column, getActivePlayer().marker); //mark grid

        checkWinner();

        if (gridMarked === true) {
            switchPlayerTurn();
        }
    }

    return {playRound, getActivePlayer, checkMatchOver, getBoard: board.getBoard};
}

function ScreenController() {
    const game = GameController();
    const playerTurnDiv = document.querySelector('.turn');
    const boardDiv = document.querySelector('.board');

    const updateScreen = () => {
        //Display player's turn
        if (game.checkMatchOver() === false) {
            playerTurnDiv.textContent = `${activePlayer.name}'s turn...`
        }

        //Render board squares
        board.forEach((row, index) => {
            row.forEach((grid, index1) => {
                const gridButton = document.createElement('button');
                gridButton.classList.add('grid');
                gridButton.dataset.row = index;
                gridButton.dataset.column = index1;
                gridButton.textContent = grid.getValue();
                boardDiv.appendChild(gridButton);
            })
        })
    }
}