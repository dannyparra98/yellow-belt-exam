const dummy = require('../src/dummy');

describe('TicTacToe board in the setup of every game', () => {
  let board = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '];
  test('there should be an empty first column in the board', () => {
    expect(dummy(board, '')[0]).toBe(' | | ');
  });
  test('there should be an empty second column in the board', () => {
    expect(dummy(board, '')[2]).toBe(' | | ');
  });
  test('there should be an empty third column in the board', () => {
    expect(dummy(board, '')[4]).toBe(' | | ');
  });
});

describe('TicTacToe board starting the game', () => {
  test('the player X puts a mark in the position 0', () => {
    let emptyBoard = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '];
    expect(dummy(emptyBoard, 'X')[0]).toBe('X| | ');
  });
});
