"use strict";
// Basic Types
let id = 5;
let company = "Google";
let isWorking = true;
let x = 'Hello';
let y = 5;
let arr = [id, company, isWorking, x, y];
// Tuple
let worker = [id, company, isWorking, x, y];
// Tupple Array
let employee;
employee = [
    [1, 'Google', true],
    [2, 'Microsoft', false],
    [3, 'Apple', true]
];
// Union
let pid; // You can have multiple types
pid = '123';
// Enum -- String
var StringCompany;
(function (StringCompany) {
    StringCompany["Google"] = "Google";
    StringCompany["Microsoft"] = "Microsoft";
    StringCompany["Apple"] = "Apple";
    StringCompany["Amazon"] = "Amazon";
})(StringCompany || (StringCompany = {}));
// Enum -- Index
var Company;
(function (Company) {
    Company[Company["Google"] = 1] = "Google";
    Company[Company["Microsoft"] = 2] = "Microsoft";
    Company[Company["Apple"] = 3] = "Apple";
    Company[Company["Amazon"] = 4] = "Amazon";
})(Company || (Company = {}));
const user = {
    name: 'John',
    age: 30,
    isWorking: true,
    company: 'Google'
};
// Type Assertion
let animeName = "Naruto";
let anime = animeName; // Method 1
let anime2 = animeName; // Method 2
// Function
function addNum(x, y) {
    return x + y;
}
// Void Function
function sayHello(message) {
    console.log(message);
}
sayHello(addNum(1, 2));
const UserI = {
    id: 1,
    name: 'John',
    age: 30
};
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        console.log('Person Created');
    }
    getPerson() {
        return `${this.name} is registered with id ${this.id}`;
    }
}
class Person2 {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        console.log('Person Created');
    }
    getPerson() {
        return `${this.name} is registered with id ${this.id}`;
    }
}
// Subclasses
class Employee extends Person2 {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const dafa = new Person(1, "Dafa");
const emp = new Employee(2, "John", "Developer");
// Generics
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3]);
let strArray = getArray(['a', 'b', 'c']);
numArray.push(4);
strArray.push('d');
