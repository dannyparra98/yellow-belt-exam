const dummy = require('../src/dummy');

describe('TicTacToe board in the setup of every game', () => {
  let board = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '];
  test('there should be an empty first column in the board', () => {
    expect(dummy(board, -1)[0]).toBe(' ');
  });
  test('there should be an empty second column in the board', () => {
    expect(dummy(board, -1)[2]).toBe(' ');
  });
  test('there should be an empty third column in the board', () => {
    expect(dummy(board, -1)[4]).toBe(' ');
  });
});

describe('TicTacToe board starting the game', () => {
  test('the player X puts a mark in a random position', () => {
    let emptyBoard = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '];
    let movement = Math.floor(Math.random() * 9);
    expect(dummy(emptyBoard, movement)[movement]).toContain('X');
  });
});
