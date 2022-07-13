const dummy = require('../src/dummy');

describe('TicTacToe board', () => {
  test('at the end of every game, there should be an empty board', () => {
    let board = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '];
    expect(dummy(board)[0]).toBe(' | | ');
  });
});
