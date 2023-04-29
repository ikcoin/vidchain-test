/**
 * @class Dice represents a standard six-sided die.
 */
export class Dice {
  /**
   * Rolls the dice and returns a random number from 1 to 6.
   *
   * @returns {number} The number rolled on the die.
   */
  roll(): number {
    return Math.floor(Math.random() * 6) + 1;
  }
}
