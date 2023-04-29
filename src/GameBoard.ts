/**
 * @class GameBoard representing the SnakesAndLadders game board.
 *
 * @property {number} currentPosition - The current position of the token on the board.
 * @property {boolean} gameWon - Whether the game has been won or not.
 * @property {finalSquare} gameWon @readonly -  The final square on the board.
 */
export class GameBoard {
  currentPosition: number;
  gameWon: boolean;
  public readonly finalSquare: number = 100;

  /**
   * Creates an instance of GameBoard.
   */
  constructor() {
    this.currentPosition = 1;
    this.gameWon = false;
  }

  /**
   * Moves the token on the board by the specified number of squares.
   * Checks whether the move is valid and the game is finished with the specified move.
   *
   * @param numSquares The number of squares to move the token by.
   */
  moveToken(numSquares: number) {
    if (this.currentPosition + numSquares <= this.finalSquare) {
      this.currentPosition += numSquares;

      console.log(`You rolled a ${numSquares} and moved to square ${this.currentPosition}`);

      if (this.currentPosition == 100) {
        this.gameWon = true;
      }
    } else {
      console.log(
        `You rolled a ${numSquares} but the move is surpassing the final square so its not valid`
      );
    }
  }
}
