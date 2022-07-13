const { dummy, setBoard } = require('../src/ticTacToe');

describe('TicTacToe board in the setup of every game', () => {
  let board = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '];
  test('there should be an empty first column in the board', () => {
    expect(setBoard(board)[0]).toBe(' ');
  });
  test('there should be an empty second column in the board', () => {
    expect(setBoard(board)[3]).toBe(' ');
  });
  test('there should be an empty third column in the board', () => {
    expect(setBoard(board)[6]).toBe(' ');
  });
});

describe('TicTacToe board starting the game', () => {
  test('the player X puts a mark in a random position', () => {
    let emptyBoard = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '];
    let movement = Math.floor(Math.random() * 9);
    expect(dummy(emptyBoard, movement, 'X')[movement]).toContain('X');
  });
  test('the player O puts a mark in a random position', () => {
    let emptyBoard = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '];
    let movement = Math.floor(Math.random() * 9);
    expect(dummy(emptyBoard, movement, 'O')[movement]).toContain('O');
  });
});
