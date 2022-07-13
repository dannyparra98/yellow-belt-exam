let result = [];

const dummy = (board, move, player) => {
  let turns = 9;
  const boardPositions = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  console.log('Game Board Cretion...');
  result.splice(0, result.length);
  setBoard(board);

  console.log(result);
  console.log('Board Created.');
  console.log('The game will start with player X');

  if (move > -1 && player == 'X') {
    console.log('Player X:');
    board[boardPositions[move]] = 'X';
    boardPositions.splice(move, 1);
    result.splice(move, result.length);
    setBoard(board);
    console.log(result);
  } else if (move > -1 && player == 'O') {
    console.log('Player O:');
    board[boardPositions[move]] = 'O';
    boardPositions.splice(move, 1);
    result.splice(move, result.length);
    setBoard(board);
    console.log(result);
  }

  return board;
};

function setBoard(board) {
  for (let i = 0; i < board.length; i++) {
    if (i % 3 == 0) {
      result.push(board[i] + '|' + board[i + 1] + '|' + board[i + 2]);
    }
    if (i == 0 || i == 3) {
      result.push('-+-+-');
    }
  }
  return board;
}
module.exports = { dummy, setBoard };
