import { GameBoard } from "../src/GameBoard";
import { Dice } from "../src/Dice";

import { expect } from "chai";
import "jest";

describe("US 1 - Token Can Move Across the Board", () => {
  it("UAT1", () => {
    const gameBoard = new GameBoard();
    /*
    Given the game is started
    When the token is placed on the board
    Then the token is on square 1
    */
    expect(gameBoard.currentPosition).to.be.equal(1);
  });

  it("UAT2", () => {
    const gameBoard = new GameBoard();
    /*
    Given the token is on square 1
    When the token is moved 3 spaces
    Then the token is on square 4
    */
    const move = 3;
    gameBoard.moveToken(move);
    expect(gameBoard.currentPosition).to.be.equal(4);
  });

  it("UAT3", () => {
    const gameBoard = new GameBoard();
    /*
    Given the token is on square 1
    When the token is moved 3 spaces
    And then it is moved 4 spaces
    Then the token is on square 8
    */
    const move1 = 3;
    gameBoard.moveToken(move1);
    const move2 = 4;
    gameBoard.moveToken(move2);
    expect(gameBoard.currentPosition).to.be.equal(8);
  });
});

describe("US 2 - Player Can Win the Game", () => {
  it("UAT2", () => {
    const gameBoard = new GameBoard();
    gameBoard.moveToken(96);
    /*
    Given the token is on square 97
    When the token is moved 3 spaces
    Then the token is on square 100
    And the player has won the game
    */
    const move = 3;
    gameBoard.moveToken(move);
    expect(gameBoard.currentPosition).to.be.equal(gameBoard.finalSquare);
    expect(gameBoard.gameWon).to.be.true;
  });

  it("UAT2", () => {
    const gameBoard = new GameBoard();
    gameBoard.moveToken(96);
    /*
    Given the token is on square 97
    When the token is moved 4 spaces
    Then the token is on square 97
    And the player has not won the game
    */
    const move = 4;
    gameBoard.moveToken(move);
    expect(gameBoard.currentPosition).to.be.equal(97);
    expect(gameBoard.gameWon).to.be.false;
  });
});

describe("US 3 - Moves Are Determined By Dice Rolls", () => {
  it("UAT1", () => {
    const gameBoard = new GameBoard();
    const dice = new Dice();
    /*
    Given the game is started
    When the player rolls a dice
    Then the result should be between 1-6 inclusive
    */
    const rollResult = dice.roll();
    expect(rollResult).to.be.gt(0);
    expect(rollResult).to.be.lt(7);
  });

  it("UAT2", () => {
    const gameBoard = new GameBoard();
    const dice = new Dice();
    /*
    Given the player rolls a 4
    When they move their token
    Then the token should move 4 spaces
    */
    let rollResult;
    while (rollResult != 4) {
      rollResult = dice.roll();
    }

    gameBoard.moveToken(rollResult);
    expect(gameBoard.currentPosition).to.be.equal(5);
  });
});
