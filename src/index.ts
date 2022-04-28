// Basic Types
let id: number = 5;
let company: string = "Google";
let isWorking: boolean = true;
let x: any = 'Hello';
let y: any = 5;

let arr: any[] = [id, company, isWorking, x, y];

// Tuple
let worker: [number, string, boolean, any, any] = [id, company, isWorking, x, y];

// Tupple Array
let employee: [number, string, boolean][]
employee = [
    [1, 'Google', true],
    [2, 'Microsoft', false],
    [3, 'Apple', true]
]

// Union
let pid: string | number // You can have multiple types
pid = '123';

// Enum -- String
enum StringCompany {
    Google = 'Google',
    Microsoft = 'Microsoft',
    Apple = 'Apple',
    Amazon = 'Amazon'
}

// Enum -- Index
enum Company {
    Google = 1, // Index to 1
    Microsoft,
    Apple,
    Amazon
}

// Objects
type User = {
    name: string,
    age: number,
    isWorking: boolean,
    company: string
}

const user: User = {
    name: 'John',
    age: 30,
    isWorking: true,
    company: 'Google'
}

// Type Assertion
let animeName: any = "Naruto";
let anime = animeName as string; // Method 1
let anime2 = <string>animeName; // Method 2

// Function
function addNum(x: number, y: number): number {
    return x + y;
}

// Void Function
function sayHello(message: string | number): void { // Void means nothing
    console.log(message);
}

sayHello(addNum(1, 2));

// Interfaces
interface UserInterface {
    readonly id: number, // Readonly
    name: string,
    age: number,
    isWorking?: boolean, // Optional
}

const UserI: UserInterface = {
    id: 1,
    name: 'John',
    age: 30
}

interface MathFunc {
    (x: number, y: number): number
}

const add: MathFunc = (x: number, y: number): number => x + y;
const sub: MathFunc = (x: number, y: number): number => x - y;

// Class
interface PersonInterface {
    id: number,
    name: string,
    getPerson(): string
}

class Person {
    protected id: number
    name: string

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
        console.log('Person Created');
    }

    getPerson() {
        return `${this.name} is registered with id ${this.id}`;
    }
}

class Person2 implements PersonInterface {
    id: number
    name: string

    constructor(id: number, name: string) {
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
    position: string

    constructor(id: number, name: string, position: string) {
      super(id, name)
      this.position = position;
    }
}

const dafa = new Person(1, "Dafa");
const emp = new Employee(2, "John", "Developer");

// Generics
function getArray<T>(items: T[]): T[] {
    return new Array().concat(items);
}

let numArray = getArray<number>([1, 2, 3]);
let strArray = getArray<string>(['a', 'b', 'c']);
numArray.push(4);
strArray.push('d');