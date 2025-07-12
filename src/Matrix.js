/**
 * Exercise 1
For starters, let's collect all our bits of code from through this lesson and create a proper Matrix data structure.

Fork this repo, clone it, and run npm install. You should write your Matrix class in the Matrix.js file which can be found in the src folder.

Your constructor should invoke the generateMatrix method, using parameters received from the instance.
 */

/**
 * Exercise 2
Add a findCoordinate method to your Matrix that:

Receives a value
Returns an object {x: colNum, y: rowNum} of the first occurrence of valueUse the following to test your code:
 */

class Matrix {
    constructor(row, col) {
        this.matrix = this.generateMatrix(row, col);
    }

    generateMatrix(row, col) {
        let matrix = [];
        let counter = 1;
        for (let y = 0; y < row; y++) {
            let row = [];
            for (let x = 0; x < col; x++) {
                row.push(counter++);
            }
            matrix.push(row);
        }
        return matrix;
    }

    print() {
        for (let i = 0; i < this.matrix.length; i++) {
            let row = "";
            for (let j = 0; j < this.matrix[i].length; j++) {
                row += this.matrix[i][j] + "\t";
            }
            console.log(row);
        }
        console.log("-----------------------------------");
    }

    get(row, col) {
        return this.matrix[row][col];
    }

    alter(row, col, num) {
        this.matrix[row][col] = num;
    }

    printCol(col) {
        for (let i = 0; i < this.matrix.length; i++) {
            console.log(this.matrix[i][col]);
        }
        console.log("-----------------------------------");
    }

    printRow(row) {
        for (const item of this.matrix[row]) {
            console.log(item);
        }
        console.log("-----------------------------------");
    }

    findCoordinate(value) {
        for (let y = 0; y < this.matrix.length; y++) {
            const row = this.matrix[y]
            for (let x = 0; x < row.length; x++) {
                if (row[x] === value) return { x, y };
            }
        }

        return { x: -1, y: -1 };
    }

}

function ex1() {
    let m = new Matrix(3, 4);
    // m.print();
    // m.alter(0, 0, m.get(1, 1));
    // m.printCol(0);
    // m.printRow(0);
    
}
ex1();

function ex2() {
    ex1();
    console.log(m.findCoordinate(20));
}
// ex2()

/* Do not remove the exports below */
module.exports = Matrix