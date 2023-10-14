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

    const clearBoard = () => {
        for (let i = 0; i < rows; i++) {
            board[i] = [];
            for (let j = 0; j < columns; j++) {
                board[i].push(Grid());
            }
        }
    }

    return {getBoard, finalizeGrid, clearBoard};
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
function GameController(playerOneName, playerTwoName) {
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
            playerTurnDiv.textContent = `${playerOneName} Wins!!!`
        } else if (gameboard[0][0].value === 'O' 
            && gameboard[0][1].value === 'O'
            && gameboard[0][2].value === 'O') {
            matchOver = true;
            playerTurnDiv.textContent = `${playerTwoName} Wins!!!`
        } else if (gameboard[1][0].value === 'X' 
            && gameboard[1][1].value === 'X'
            && gameboard[1][2].value === 'X') {
            matchOver = true;
            playerTurnDiv.textContent = `${playerOneName} Wins!!!`
        } else if (gameboard[1][0].value === 'O' 
            && gameboard[1][1].value === 'O'
            && gameboard[1][2].value === 'O') {
            matchOver = true;
            playerTurnDiv.textContent = `${playerTwoName} Wins!!!`
        } else if (gameboard[2][0].value === 'X' 
            && gameboard[2][1].value === 'X'
            && gameboard[2][2].value === 'X') {
            matchOver = true;
            playerTurnDiv.textContent = `${playerOneName} Wins!!!`
        } else if (gameboard[2][0].value === 'O' 
            && gameboard[2][1].value === 'O'
            && gameboard[2][2].value === 'O') {
            matchOver = true;
            playerTurnDiv.textContent = `${playerTwoName} Wins!!!`
        } else if (gameboard[0][0].value === 'X' 
            && gameboard[1][0].value === 'X'
            && gameboard[2][0].value === 'X') {
            matchOver = true;
            playerTurnDiv.textContent = `${playerOneName} Wins!!!`
        } else if (gameboard[0][0].value === 'O' 
            && gameboard[1][0].value === 'O'
            && gameboard[2][0].value === 'O') {
            matchOver = true;
            playerTurnDiv.textContent = `${playerTwoName} Wins!!!`
        } else if (gameboard[0][1].value === 'X' 
            && gameboard[1][1].value === 'X'
            && gameboard[2][1].value === 'X') {
            matchOver = true;
            playerTurnDiv.textContent = `${playerOneName} Wins!!!`
        } else if (gameboard[0][1].value === 'O' 
            && gameboard[1][1].value === 'O'
            && gameboard[2][1].value === 'O') {
            matchOver = true;
            playerTurnDiv.textContent = `${playerTwoName} Wins!!!`
        } else if (gameboard[0][2].value === 'X' 
            && gameboard[1][2].value === 'X'
            && gameboard[2][2].value === 'X') {
            matchOver = true;
            playerTurnDiv.textContent = `${playerOneName} Wins!!!`
        } else if (gameboard[0][2].value === 'O' 
            && gameboard[1][2].value === 'O'
            && gameboard[2][2].value === 'O') {
            matchOver = true;
            playerTurnDiv.textContent = `${playerTwoName} Wins!!!`
        } else if (gameboard[0][0].value === 'X' 
            && gameboard[1][1].value === 'X'
            && gameboard[2][2].value === 'X') {
            matchOver = true;
            playerTurnDiv.textContent = `${playerOneName} Wins!!!`
        } else if (gameboard[0][0].value === 'O' 
            && gameboard[1][1].value === 'O'
            && gameboard[2][2].value === 'O') {
            matchOver = true;
            playerTurnDiv.textContent = `${playerTwoName} Wins!!!`
        } else if (gameboard[0][2].value === 'X' 
            && gameboard[1][1].value === 'X'
            && gameboard[2][0].value === 'X') {
            matchOver = true;
            playerTurnDiv.textContent = `${playerOneName} Wins!!!`
        } else if (gameboard[0][2].value === 'O' 
            && gameboard[1][1].value === 'O'
            && gameboard[2][0].value === 'O') {
            matchOver = true;
            playerTurnDiv.textContent = `${playerTwoName} Wins!!!`
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

    const resetGameValues = () => {
        matchOver = false;
        board.clearBoard();
        activePlayer = players[0];
    }

    return {playRound, getActivePlayer, checkMatchOver, getBoard: board.getBoard, resetGameValues};
}

function ScreenController(playerOneName, playerTwoName) {
    const game = GameController(playerOneName, playerTwoName);
    const playerTurnDiv = document.querySelector('.turn');
    const boardDiv = document.querySelector('.board');
    const startBtn = document.querySelector('.start');

    const updateScreen = () => {
        //clear the board
        boardDiv.textContent = '';

        //get the newest version of the board and player turn
        const board = game.getBoard();
        const activePlayer = game.getActivePlayer();

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

    const newMatch = () => {
        game.resetGameValues();
        updateScreen();
    }

    //Add event listener for the board
    function clickHandlerBoard(e) {
        const selectedRow = e.target.dataset.row;
        //Make sure grid is clicked and not the gaps in between
        if (!selectedRow) return;

        const selectedColumn = e.target.dataset.column;
        if (!selectedColumn) return;

        if (game.checkMatchOver() === false) {
            game.playRound(selectedRow, selectedColumn);
            updateScreen();
        }
    }
    boardDiv.addEventListener('click', clickHandlerBoard);

    startBtn.addEventListener('click', newMatch);

    return {newMatch}
}

function nameGetter() {
    const startBtn = document.querySelector('.start');
    startBtn.addEventListener('click', getNameMessage)

    const submitBtn = document.querySelector('.form-button');
    submitBtn.addEventListener('click', () => {
        const form = document.querySelector('.form');
        form.addEventListener('submit', event => event.preventDefault());

        if (document.getElementById('p1Name').value === '') {
            alert("Please input player 1's name.");
        } else if (document.getElementById('p2Name').value === '') {
            alert("Please input player 2's name.");
        } else {
            playerOneName = document.getElementById('p1Name').value;
            playerTwoName = document.getElementById('p2Name').value;

            form.remove();
            startBtn.removeEventListener('click', getNameMessage);
        }
        const screen = ScreenController(playerOneName, playerTwoName);
        screen.newMatch();
    })

    function getNameMessage() {
        alert('Please submit player names first.');
    }
}

nameGetter();