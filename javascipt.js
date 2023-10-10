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

    return {getBoard};
}

//Grid represents a "square" on the board, whose value starts off undefined
//Value will change to either "X" or "O" as match progresses.
function Grid() {
    let value = undefined;
}