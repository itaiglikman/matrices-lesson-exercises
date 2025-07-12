/**
 * Exercise 7
Create a new matrix called TicTacToe that extends from Matrix

Add a loadBoard method that generates a 3x3 matrix of all dots - . -, and replaces the original matrix.
 */

const Matrix = require('./Matrix');

class TicTacToe extends Matrix {
    constructor() {
        super();
        this.matrix = this.generateMatrix(3, 3);
        this.playerXCount = 0;
        this.playerYCount = 0;
        this.lastPlayer = 0;
    }

    loadBoard() {
        this.matrix = this.matrix
            .map(row => row.map(() => "."))
    }

    play(row, col, player) {

        /*** Extension 2
        Write some more validation inside of play that prevents a player from playing twice in a row.*/
        if (this.lastPlayer === player) {
            console.log(`Player ${player} plays against the rules! 2 plays in a row are not allowed`);
            return;
        }

        this.lastPlayer = player;

        /*** Extension 1
        write some validating code inside of play that prevents a player from playing on a position that's already been played.*/
        let playerSign = player === 1 ? "X" : "Y";

        if (this.get(row, col) !== ".") {
            console.log(`box [${row},${col}] is already taken`);
            return;
        };

        this.alter(row, col, playerSign);

        // check current col in every row for a possible win:
        let win = this.matrix.every(item => item[col] === playerSign);
        if (win) {
            console.log(`Game Over! Player ${player} wins!`);
            this.print();
            /*** Extension 3
             When the game is over, reset the board to all dots.*/
            this.loadBoard();
            this.print();
        }

    }

}

let board = new TicTacToe();
board.loadBoard();
board.print();

/**
 * Exercise 8
Add a play method to TicTacToe
It should receive three parameters: a rowNum, a columnNum, and a player - all of these are numbers.
If the player is 1, it should alter the relevant dot to be an x, otherwise it should alter it to be an o
 */


// board.play(2, 2, 1)
// board.play(0, 0, 2)
// board.print()

/**
 * Exercise 9
Modify your play method so that if there is any three-in-a-column of os or xs, it prints Congratulations Player ${num}
 */

board.play(2, 2, 1)
board.play(0, 0, 2)
board.play(0, 2, 1)
board.play(1, 0, 2)
// board.play(1, 1, 1) //prints Congratulations Player 1
board.play(1, 2, 1) //prints Congratulations Player 1

/* Do not remove the exports below */
module.exports = TicTacToe