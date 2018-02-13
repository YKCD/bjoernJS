const ticTacToeBoard = [[1, 1, 2], [1, 0, 2], [2, 1, 2]];

function isWinner(board, player) {
    const winsRows = isWinnerRows(board, player);
    const winsColumns = isWinnerColumns(board, player);
    const winsDiagonals = isWinnerDiagonals(board, player);
    return winsRows || winsColumns || winsDiagonals;
}

function isWinnerRows(board, player) {
    return board.findIndex((row) => isWinnerRow(row, player)) > 0;
}

function isWinnerRow(row, player) {
    return row.findIndex((element) => element !== player) < 0;
}

function isWinnerColumns(board, player) {
    const columns = board[0].length;
    for (let columnIndex = 0; columnIndex < columns; columnIndex++) {
        const column = board.map((row) => row[columnIndex]);
        if (isWinnerRow(column, player)) {
            return true;
        }
    }
    return false;
}

function isWinnerDiagonals(board, player) {
    for (let rowIndex = 0; rowIndex < board.length; rowIndex++) {
        const row = board[rowIndex];
        if (row[rowIndex] !== player && row[row.length - rowIndex - 1] !== player) {
            return false;
        }
    }
    return true;
}

function isBoardFull(board) {
    return board.findIndex((row) => row.findIndex((marker) => marker === 0) >= 0) < 0;
}

function canMakeMove(board, rowIndex, colIndex) {
    return board[rowIndex][colIndex] === 0;
}

console.log(isWinner(ticTacToeBoard, 1));
console.log(canMakeMove(ticTacToeBoard, 0, 0));
console.log(isBoardFull(ticTacToeBoard));

// TODO Game play logic
// board = [[0,0,0], [0,0,0], [0,0,0]];
// currentPlayer = 1;
//
// let move = ask_for_move(currentPlayer); // returns valid move or undefined
// while (!move) { // if there is no move ask again
//    console.log('You cannot move there');
//    move = ask_for_move(currentPlayer);
// }
// perform_move(board, player, move);
//
// while (!isBoardFull(board) && !isWinner(board, currentPlayer)) {
//    currentPlayer = currentPlayer === 1 ? 2 : 1;
//    move = ask_for_move(currentPlayer);
//
//    while (!move) { // if there is no move ask again
//       console.log('You cannot move there');
//       move = ask_for_move(currentPlayer);
//    }
//    perform_move(board, player, move);
// }
//
// if (isWinner(board, currentPlayer)) {
//   print "GLueckwunsch " + currentPlayer;
// } else {
//   print "unentschieden";
// }
