// Import functions from lib
import { half, multiply, doSomething, flag, touch } from './lib.js';
console.log("Result after division is :", half(35));

console.log("Multiplication answer is :",multiply(16, 4))

console.log("String is :",doSomething())

console.log(flag)
touch();
console.log(flag)


// Class
class Vehicle 
{
    constructor(wheels) 
    {
        this.wheels = wheels;
    }
    toString() {
        return this.wheels;
    }
}
class Car extends Vehicle {
    constructor(color) 
    {
        super(4);
        this.color = color;
    }
    toString() {
        return super.toString()+ ' Wheels and' + ' color is ' + this.color;
    }
}
let car = new Car('black');
let wheels = new Vehicle('8');

console.log("Car has",car.toString());
console.log("Vehicle has", wheels + " Wheels.")

console.log(car instanceof Car);
console.log(car instanceof Vehicle);


// ARROW
const author = 
{
    fullName: "William Shakespeare",
    books: ['Works','As You Like It', 'Measure for Measure'],
    printBooks() {
        this.books.forEach(book => console.log(book + ' by ' + this.fullName));
    }
};
console.log(author.printBooks())

// VAR, LET, CONST
import { varExample, letExample } from './lib.js';
console.log("VAR")
varExample();

console.log("LET")
letExample();

// DEFAULT, REST, SPREAD
import { addition, userFriends, bestFriends } from './lib.js';
console.log("Addition with default is : ", addition(35))
console.log("Addition is : ", addition(12,5));

console.log(userFriends('Isha', 'Nirali', 'Krunal'));
console.log(bestFriends(...['Milan', 'Shrusti', 'Michelle']));
