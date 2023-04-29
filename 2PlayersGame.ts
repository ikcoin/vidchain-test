import { GameBoard } from "./src/GameBoard";
import { Dice } from "./src/Dice";

import * as readline from "readline";

/**
 * Create an instance of the readline interface to read input from the console
 * @const rl - An instance of the readline interface
 */
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

/**
 * Asks the player to roll the dice by prompting the user to press the enter key
 * @returns {Promise} - A promise that resolves when the user presses the enter key
 */
function askPlayerToRollTheDice() {
  return new Promise((resolve) => {
    rl.question("Press enter key to roll the dice...", (answer) => {
      resolve(answer);
    });
  });
}

async function main() {
  // Create instances of the GameBoard and Dice classes
  const gameBoardPlayer1 = new GameBoard();
  const gameBoardPlayer2 = new GameBoard();
  const dice = new Dice();

  // Set the first player as player 1
  let currentPlayer = 1;

  // Loop until one of the players has won the game
  while (!gameBoardPlayer1.gameWon && !gameBoardPlayer2.gameWon) {
    console.log(`\n It's Player ${currentPlayer}'s turn.`);

    // Prompt the user to roll the dice
    await askPlayerToRollTheDice();

    // Roll the dice and move the token of the current player's board
    const numSquares = dice.roll();

    if (currentPlayer === 1) {
      gameBoardPlayer1.moveToken(numSquares);
      console.log(`Player 1 moved to square ${gameBoardPlayer1.currentPosition}`);
      currentPlayer = 2;
    } else {
      gameBoardPlayer2.moveToken(numSquares);
      console.log(`Player 2 moved to square ${gameBoardPlayer2.currentPosition}`);
      currentPlayer = 1;
    }
  }

  // Announce the winner of the game
  gameBoardPlayer1.gameWon === true
    ? console.log(`Congratulations, Player 1 has won the game!`)
    : console.log(`Congratulations, Player 2 has won the game!`);
}

main();
