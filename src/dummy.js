const dummy = (board) => {
  //let board = [" ", " ", " ", " ", " ", " "," ", " ", " "];
  let result = [];
  console.log('Game Board Cretion...');
  result.push(' | | ');
  result.push('-+-+-');
  result.push(' | | ');
  result.push('-+-+-');
  result.push(' | | ');

  console.log(' | | ');
  console.log('-+-+-');
  console.log(' | | ');
  console.log('-+-+-');
  console.log(' | | ');
  console.log('Board Created.');
  console.log('The game will start with player X');
  return result;
};

module.exports = dummy;
