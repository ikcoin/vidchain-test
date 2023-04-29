# VIDchain-test

### Install Dependencies

```
npm install
```

### Run a 2 players game

Simple script to play a 2 players game waiting for a `enter` key input to roll the dice on each turn.

```
npm run play
```

### Run tests

```
npm test
```

## SnakesAndLadders Implementation

The solution consists of two classes: `GameBoard` and `Dice`.

### GameBoard

`GameBoard` represents the game board.

`GameBoard` properties:

- `currentPosition`: The current position of the player's token on the board.
- `gameWon`: Whether the game has been won or not.
- `finalSquare`: The final square on the board (square 100).

`GameBoard` methods:

- `constructor()`: Initializes currentPosition to 1 and gameWon to false.
- `moveToken(numSquares: number)`: Moves the player's token by the specified number of squares. Checks whether the move is valid and the game has been won with the specified move.

### Dice

`Dice` represents a standard six-sided die.

`Dice` methods:

- `roll(): number`: Rolls the dice and returns a random number from 1 to 6.
