const dummy = (board, player) => {
  let result = [];
  const boardPositions = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  console.log('Game Board Cretion...');

  for (let i = 0; i < board.length; i++) {
    if (i % 3 == 0) {
      result.push(board[i] + '|' + board[i + 1] + '|' + board[i + 2]);
    }
    if (i == 0 || i == 3) {
      result.push('-+-+-');
    }
  }

  console.log(result);
  console.log('Board Created.');
  console.log('The game will start with player X');

  if (player == 'X') {
    board[boardPositions[0]] = 'X';
    boardPositions.splice(0, 1);
    result[0] = 'X| | ';
  }

  return result;
};

module.exports = dummy;
