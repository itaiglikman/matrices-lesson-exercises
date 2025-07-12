/**
 * Exercise 3
Navigate to the EmployeeMatrix.js file (which is in the src folder).

Create a new matrix called EmployeeMatrix that inherits from Matrix (don't forget to require the Matrix)

Add a loadData method to EmployeeMatrix. The method should:

Receive an array of objects called salaryData
Generate a matrix where
Each object represents the next row in the matrix
Each object key represents a column in the matrix
Replace the instance's matrix with this new matrix
Hint: don't rush to write a double for-loop for this. You're receiving an array of data. There is a certain method you can use to make your life easier.
 */

const Matrix = require('./Matrix');

class EmployeeMatrix extends Matrix {
    constructor(data) {
        super();
        this.matrix = this.loadData(data)
    }

    loadData(data) {
        // create an array from each object in data.
        // create an array from all objects arrays and return it.
        return data.map(employee => Object.values(employee));
    }

    getEmployees(department) {
        return this.matrix
            .filter(e => e[2] === department)  //get only the department employees
            .map(e => e[1]); //return the name of each employee
    }

    getTotalSalary(department) {
        return this.matrix
            .filter(e => e[2] === department) //get only the department employees
            .reduce((sum, e) => sum += e[3], 0) //calc and return the salaries
    }

    findRichest() {
        const richest = this.matrix
            .reduce((maxEmployee, employee) => {
                return employee[3] > maxEmployee[3] ? employee : maxEmployee
            }, this.matrix[0]);
        return richest[1];
    }
}

let data = [
    { _id: "e10021", name: "Gillian", department: "Finance", salary: 2000 },
    { _id: "e10725", name: "Tibor", department: "Design", salary: 1200 },
    { _id: "e10041", name: "Anisha", department: "Finance", salary: 2300 },
    { _id: "e10411", name: "Jakub", department: "Design", salary: 1600 },
    { _id: "e11995", name: "Mar", department: "Design", salary: 1300 },
    { _id: "e10732", name: "Nisha", department: "Design", salary: 1200 }
]

let m = new EmployeeMatrix(data)

m.print();

/**
 * Exercise 4
Add a getEmployees method to your EmployeeMatrix class.
This method should receive one parameter, department - a string, and it should return an array of all the employee names that work in that department.
This method should run in O( n ).
 */
// console.log(m.getEmployees("Finance")) //prints [ 'Gillian', 'Anisha' ]
// console.log(m.getEmployees("Design")) //prints [ 'Tibor', 'Jakub', 'Mar', 'Nisha' ]

/**
 * Exercise 5
Keeping with the EmployeeMatrix example, write a method called getTotalSalary
This method should receive one parameter, department - a string, and it should return the sum of the salaries for that department.
This method should run in O( n ).
*/

// console.log(m.getTotalSalary("Finance")) //prints 4300
// console.log(m.getTotalSalary("Design")) //prints 5300

/**
 * Exercise 6
Keeping with the EmployeeMatrix example, write a method called findRichest
The method should return the name of the employee with the highest salary.
This method should run in O( n ), and exactly *O( n )** - that means if you've achieved a complexity of O(2n) - you've written redundant code.
*You can, of course, ignore O( 1 ) operations
Use the following to test your code:
*/

console.log(m.findRichest()) //prints Anisha

/* Do not remove the exports below */
module.exports = EmployeeMatrix