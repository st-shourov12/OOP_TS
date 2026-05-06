# 🚀 Object Oriented Programming (OOP)

> A comprehensive, hands-on TypeScript learning repository covering OOP patterns — structured as a progressive course with real code examples.

---

## 📚 Table of Contents

- [About This Repository](#about-this-repository)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Module 1: Basic Types of TypeScript](#module-1-basic-types-of-typescript)
- [Module 2: Advanced Types of TypeScript](#module-2-advanced-types-of-typescript)
- [Module 3: Object-Oriented Programming (OOP)](#module-3-object-oriented-programming-oop)
- [Project Structure](#project-structure)
- [How to Run the Code](#how-to-run-the-code)

---

## About This Repository

This repository is a structured journey through TypeScript, from your very first `hello world` program to advanced OOP concepts like polymorphism, abstraction, and design patterns. Each topic is organized into modules with focused source files so you can learn one concept at a time.



---

## Prerequisites

Before diving in, make sure you have:

- Basic knowledge of JavaScript
- Node.js installed (v14 or later recommended)
- A code editor (VS Code recommended)

---

## Getting Started

### 1. Install Node Version Manager (nvm)

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
source ~/.bashrc
```

### 2. Install Node.js

```bash
nvm install --lts
```

### 3. Install TypeScript globally

```bash
npm install -g typescript
```

### 4. Verify installations

```bash
node -v
npm -v
tsc -v
```

### 5. Clone this repository

```bash
git clone https://github.com/st-shourov12/typescript-technocrat.git
cd typescript-technocrat
```

### 6. Initialize TypeScript config

```bash
tsc --init
```

In `tsconfig.json`, configure your source and output directories:

```json
{
  "compilerOptions": {
    "rootDir": "./src",
    "outDir": "./dist"
  }
}
```

### 7. Compile TypeScript

```bash
tsc
```

### 8. Run TypeScript files directly (for development)

Install `ts-node-dev` globally:

```bash
npm install -g ts-node-dev
```

Then run any file with:

```bash
ts-node-dev --respawn --transpile-only src/module1/index.ts
```

---


## Module 3: Object-Oriented Programming (OOP)

### 3-0 · OOP Concepts Overview

TypeScript fully supports Object-Oriented Programming with four core pillars:

| Pillar | Meaning |
|---|---|
| **Encapsulation** | Bundle data and behavior; control access |
| **Inheritance** | Classes can extend other classes |
| **Polymorphism** | Same interface, different implementations |
| **Abstraction** | Hide implementation, expose what matters |

---

## 3-1 · Class and Object

### The Concept
```typescript
class Animal {
  constructor(
    public name: string,
    public species: string,
    public sound: string
  ) {}

  makeSound(): void {
    console.log(`The ${this.name} says ${this.sound}`);
  }
}

const dog = new Animal("German Shepherd", "dog", "Woof!");
const cat = new Animal("Persian", "cat", "Meow!");

dog.makeSound(); // The German Shepherd says Woof!
cat.makeSound(); // The Persian says Meow!
```
### My Practice
```typescript

class Animal {
    name : string;
    species : string ;
    sound : string;
    constructor (
        name : string,
        species : string ,
        sound : string,
    ) {
        this.name = name
        this.species = species
        this.sound = sound
    }

    makeSound ( ) {
        console.log(`${this.name} make sound: ${this.sound}`);
    }
}

const dog = new Animal("Dogesh","Dog" , "Gheu Gheu");
const cat = new Animal("Billu Mastan", "Cat", "Meaw meaw")

dog.makeSound();


class Developer {
    
    constructor(public name: string , public expertise: string, public hasWatch: boolean ){

    }
    about() {
        console.log(`${this.name} expert in ${this.expertise}`);
    }
}

const shourov = new Developer("Shourov", "Front-end" , false)

shourov.about();

```

---

## 3-2 · Inheritance

### The Concept
```typescript
class Person {
  constructor(
    public name: string,
    public age: number,
    public address: string
  ) {}

  getSleep(hours: number): void {
    console.log(`${this.name} will sleep for ${hours} hours`);
  }
}

class Student extends Person {
  constructor(name: string, age: number, address: string) {
    super(name, age, address); // call parent constructor
  }
  study(): void {
    console.log(`${this.name} is studying`);
  }
}

class Teacher extends Person {
  constructor(
    name: string,
    age: number,
    address: string,
    public designation: string
  ) {
    super(name, age, address);
  }
  takeClass(numOfClasses: number): void {
    console.log(`${this.name} will take ${numOfClasses} classes`);
  }
}

const student = new Student("Alice", 20, "Dhaka");
student.getSleep(7);  // inherited from Person
student.study();

const teacher = new Teacher("Bob", 40, "Dhaka", "Professor");
teacher.getSleep(6);
teacher.takeClass(3);
```

### My Practice 

```typescript
class Parent {
    name : string ;
    age: number;
    address : string;

    constructor(
        name : string ,
        age: number,
        address : string,
    ){
        this.name = name;
        this.age =age ;
        this.address = address
    }

    getSleep (numOfHour: number) {
      console.log(`${this.name} ${numOfHour} gonta gumay`);
    }
}



class Student extends Parent {}

const shourov = new Student("Shourov", 23, "Mirpur");

shourov.getSleep(9)

class Teacher extends Parent {
   
    constructor ( name : string ,  age : number , address : string, public designation : string, ){
        super( name, age, address)
    }

    takeClass (numOfHour: number) {
        console.log(`${this.name} ${numOfHour} gonta class ney`);
    }

}

const teacher = new Teacher('Abul' , 45, 'Andarkilla', 'Assistant teacher')
teacher.takeClass(5)
```

---

## 3-3 · Type Guards — `typeof` and `in`

Type guards help TypeScript narrow down a union type at runtime:

### The Concept 
```typescript
// typeof guard
type Alphanumeric = string | number;

const concatenateOrAdd = (a: Alphanumeric, b: Alphanumeric): Alphanumeric => {
  if (typeof a === "number" && typeof b === "number") {
    return a + b;       // numeric addition
  }
  return `${a}${b}`;  // string concatenation
};

// 'in' guard — checks if a property exists in an object
type NormalUser  = { name: string };
type AdminUser   = { name: string; role: "admin" };

const describeUser = (user: NormalUser | AdminUser): void => {
  if ("role" in user) {
    console.log(`${user.name} is an admin`);
  } else {
    console.log(`${user.name} is a regular user`);
  }
};
```

### My Practice
```typescript
// typeof Guard = type narrowing

type Alphaneumeric = number | string ;

const add = (num1 : Alphaneumeric , num2:Alphaneumeric) => {
    if (typeof num1 === "number" && typeof num2 === "number") {
        return num1 + num2
    }else {
       return num1.toString()  + num2.toString()
    }
}

console.log(add(5,9));
console.log(add(5,'9'));
console.log(add('5','9'));

```

```typescript

// in guard
type NormalUser = {
    name : string,
}

type AdminUser = {
    name : string ,
    role : 'Admin'
} 

const getUserInfo = (user : NormalUser | AdminUser) => {

    if ("role" in user) {
        console.log(`This is ${user?.name} and role is ${user?.role}`);
    }
    else{

        console.log(`This is ${user?.name} and role is normal`);
    }
}

getUserInfo({name : "Shourov" , role : "Admin"})

```

---

## 3-4 · Type Guards — `instanceof`

### The Concept
```typescript
class Dog extends Animal {
  makeBark(): void { console.log("Woof!"); }
}

class Cat extends Animal {
  makeMeow(): void { console.log("Meow!"); }
}

// Predicate function — returns animal is Dog
const isDog = (animal: Animal): animal is Dog => animal instanceof Dog;
const isCat = (animal: Animal): animal is Cat => animal instanceof Cat;

const interact = (animal: Animal): void => {
  if (isDog(animal)) {
    animal.makeBark();
  } else if (isCat(animal)) {
    animal.makeMeow();
  } else {
    animal.makeSound();
  }
};
```

### My Practice
```typescript
class Person {
    name : string ;
    constructor (name: string) {
        this.name = name
    }
    getSleep(num : number){
        console.log(`${this.name} sleep ${num} hours daily`);
    }
}

class Student extends Person {
    constructor(name : string){
        super(name)
    }
    doStudy(num : number){
        console.log(`${this.name} read ${num} hours daily`);
    }
}




class Teacher extends Person {
    takeClass(numOfHour : number) {
        console.log(`${this.name} take class ${numOfHour} hours daily`);
    }
}


const isTeacher = (user: Person) => {
    return user instanceof Teacher
}

const getUserInfo = (user : Person) =>{
    // normal practice
    if (user instanceof Student) {
        user.doStudy(4)
    }
    // best practice
    else if (isTeacher(user)) {
        user.takeClass(6)
    }else{
        user.getSleep(9)
    }
}

const student1 = new Student("Shourov");
const teacher1 = new Teacher('Abul');
const user1 = new Person('Mokbul');
getUserInfo(teacher1)
getUserInfo(user1)

```

---

## 3-5 · Access Modifiers

TypeScript provides three access modifiers to control visibility:

| Modifier | Accessible From |
|---|---|
| `public` | Anywhere (default) |
| `private` | Only inside the class |
| `protected` | Inside the class and subclasses |
| `readonly` | Readable everywhere, writable only in constructor |

### The Concept
```typescript
class BankAccount {
  public readonly id: number;
  public name: string;
  private _balance: number;

  constructor(id: number, name: string, balance: number) {
    this.id = id;
    this.name = name;
    this._balance = balance;
  }

  public deposit(amount: number): void {
    this._balance += amount;
  }

  public getBalance(): number {
    return this._balance;
  }
}

const account = new BankAccount(1, "Alice", 500);
account.deposit(200);
console.log(account.getBalance()); // 700
// account._balance = 0; // ❌ Error — private!
```

### My Practice
```typescript
class BankAccount {
    public readonly userId : number;
    public userName : string ;
    protected userBalance : number ;

    constructor (
        userId : number,
        userName : string ,
        userBalance : number ,
    ) {
        this.userId = userId ;
        this.userName = userName ; 
        this.userBalance = userBalance
    }

    addBalance(balance : number ){
        this.userBalance = this.userBalance + balance;
        return this.userBalance
    }
}

class StudentAccount extends BankAccount {
    test(){
        this.userBalance
    }
}

const shourov = new BankAccount(123,"Shourov" , 500);
// shourov.userId = 555
console.log(shourov.addBalance(120));
console.log(shourov);

```

---

## 3-6 · Getters and Setters

Use `get` and `set` to control access to private fields like a property, not a method call:

### The Concept
```typescript
class BankAccount {
  protected _balance: number;

  constructor(public readonly id: number, public name: string, balance: number) {
    this._balance = balance;
  }

  // Getter — accessed like a property: account.balance
  get balance(): number {
    return this._balance;
  }

  // Setter — used like an assignment: account.deposit = 100
  set deposit(amount: number) {
    this._balance += amount;
  }
}

const account = new BankAccount(1, "Alice", 100);
account.deposit = 50;             // calls the setter
console.log(account.balance);    // 150 — calls the getter
```
### My Practice
```typescript
// getter 
class BankAccount {
    public readonly userId : number;
    public userName : string ;
    protected userBalance : number ;

    constructor (
        userId : number,
        userName : string ,
        userBalance : number ,
    ) {
        this.userId = userId ;
        this.userName = userName ; 
        this.userBalance = userBalance
    }
    // set ballance
    // addBalance(balance : number ){
    //     this.userBalance = this.userBalance + balance;
    //     return this.userBalance
    // }

    set addBalance(amount : number){
        this.userBalance = this.userBalance + amount
    }

    // get balance
    // getBalance(){
    //     console.log(this.userBalance); 
    // }
     get getBalance (){
        return this.userBalance
     }

}

const user1 = new BankAccount(125, 'Show' ,1500);
// user1.addBalance(500);
// user1.getBalance()

user1.addBalance = 500;
console.log(user1);

```

---

## 3-7 · Static Members

Static properties and methods belong to the *class itself*, not to any instance:


### The Concept
```typescript
class Counter {
  static count: number = 0; // shared across ALL instances

  static increment(): number {
    return ++Counter.count;
  }

  static decrement(): number {
    return --Counter.count;
  }
}

console.log(Counter.increment()); // 1
console.log(Counter.increment()); // 2
console.log(Counter.decrement()); // 1
// No need to create an instance — call directly on the class
```

### My Practice
```typescript
class Counter {
    static count: number = 0;
    static increment() {
        return (Counter.count = Counter.count + 1 )
    }
    decrement() {
        return (Counter.count = Counter.count - 1 )
    }
}

console.log(Counter.increment());
console.log(Counter.increment());
console.log(Counter.increment());
console.log(Counter.increment());
console.log(Counter.increment());

```

---

## 3-8 · Polymorphism

Polymorphism allows objects of different classes to be treated through a common interface, each responding differently:

### The Concept
```typescript
class Shape {
  getArea(): number { return 0; }
}

class Circle extends Shape {
  constructor(private radius: number) { super(); }
  getArea(): number { return Math.PI * this.radius ** 2; }
}

class Rectangle extends Shape {
  constructor(private height: number, private width: number) { super(); }
  getArea(): number { return this.height * this.width; }
}

// One function handles all shape types
const printArea = (shape: Shape): void => {
  console.log(`Area: ${shape.getArea().toFixed(2)}`);
};

printArea(new Circle(10));         // Area: 314.16
printArea(new Rectangle(5, 8));    // Area: 40.00
```

### My Practice 
```typescript
class Person {
    getSleep() {
        console.log(`I Sleep for 10 hours`);
    }
}

class Student extends Person {
    getSleep() {
        console.log(`I am a student and sleep for 8 hours`);
    }
}

class Developer extends Person {
    getSleep() {
        console.log(`I am a developer and I sleep for 6 hours`);
    }
}

const getSleepingHours = (param: Person) => {
    param.getSleep()
}

const person1 = new Person();
const person2 = new Student();
const person3 = new Developer();

getSleepingHours(person3);



class Shape {
    getArea() {
        return 0;
    }
}

class Circle extends Shape {
    radius : number ;

    constructor (radius: number){
        super()
        this.radius = radius
    }

    getArea(): number {
        return Math.PI * this.radius * this.radius
    }
}

class Rectangle extends Shape {

    constructor(public height : number , public width : number){
        super()
    }

    getArea(): number {
        return this.height * this.width
    }
}


const getArea = (param : Shape) => {
    console.log(param.getArea());
}

const area1 = new Shape();
const area2 = new Circle(5);
const area3 = new Rectangle(20,40);

getArea(area2)

```

> 💡 **Why Polymorphism?** You can add a new shape (e.g., `Triangle`) without changing `printArea` at all — open for extension, closed for modification.

---

## 3-9 · Abstraction

Abstract classes define a *contract* — they can have some implementation, but subclasses **must** implement abstract methods:

### The Concept
```typescript
abstract class Vehicle {
  abstract startEngine(): void; // must be implemented by subclasses

  move(): void {
    console.log("Vehicle is moving");
  }
}

class Car extends Vehicle {
  startEngine(): void {
    console.log("Car engine: Vroom!");
  }
}

class Boat extends Vehicle {
  startEngine(): void {
    console.log("Boat engine: Chug chug!");
  }
}

const car = new Car();
car.startEngine(); // Car engine: Vroom!
car.move();        // Vehicle is moving

// const v = new Vehicle(); // ❌ Error — cannot instantiate abstract class
```

### My Practice
```typescript
// interface
interface MediaPlayer {
    play() :  void;
    pause(): void;
    stop(): void;
}

class MusicPlayer implements MediaPlayer {
    play(): void {
        console.log(`Playing Music...`);
    }
    pause(): void {
        console.log(`Music Paused...`);
    }
    stop(): void {
        console.log(`Music Stopped...`);
    }
}

const disco = new MusicPlayer();
disco.play();

// abstract class

abstract class Player {
    abstract play() :  void;
    abstract pause(): void;
    abstract stop(): void;
}

class VideoPlayer extends Player {
    play(): void {
        console.log(`Playing Video...`);
    }
    pause(): void {
        console.log(`Video Paused...`);
    }
    stop(): void {
        console.log(`Video Stopped...`);
    }
}

const shourovPlayer = new VideoPlayer();
shourovPlayer.play()

```

---

### 3-10 · Encapsulation

Encapsulation means bundling state and behavior together and restricting direct access to internal data:

# The Concept
```typescript

class Person {
  private _name: string;
  private _age: number;

  constructor(name: string, age: number) {
    this._name = name;
    this._age = age;
  }

  get name(): string { return this._name; }
  get age(): number { return this._age; }

  set age(value: number) {
    if (value < 0) throw new Error("Age cannot be negative");
    this._age = value;
  }

  introduce(): string {
    return `Hi, I'm ${this._name} and I'm ${this._age} years old.`;
  }
}

const p = new Person("Alice", 25);
console.log(p.introduce()); // Hi, I'm Alice and I'm 25 years old.
p.age = 26;                 // ✅ uses setter
// p._age = -1;             // ❌ private — cannot access
```

# My Practice
```typescript

class Animal {
    name : string;
    species : string ;
    sound : string;
    constructor (
        name : string,
        species : string ,
        sound : string,
    ) {
        this.name = name
        this.species = species
        this.sound = sound
    }

    makeSound ( ) {
        console.log(`${this.name} make sound: ${this.sound}`);
    }
}

const dog = new Animal("Dogesh","Dog" , "Gheu Gheu");
const cat = new Animal("Billu Mastan", "Cat", "Meaw meaw")

dog.makeSound();


class Developer {
    
    constructor(public name: string , public expertise: string, public hasWatch: boolean ){

    }
    about() {
        console.log(`${this.name} expert in ${this.expertise}`);
    }
}

const shourov = new Developer("Shourov", "Front-end" , false)

shourov.about();

```
---

## Project Structure

```
typescript-technocrat/
├── src/
│   ├── module1/          # Basic Types
│   │   ├── 1.3-basic-types.ts
│   │   ├── 1.4-object-optional-literal.ts
│   │   ├── 1.5-function.ts
│   │   ├── 1.6-spread-rest.ts
│   │   ├── 1.7-destructuring.ts
│   │   ├── 1.8-type-alias.ts
│   │   ├── 1.9-union-intersection.ts
│   │   ├── 1.10-ternary-optional-nullish.ts
│   │   └── 1.11-never-unknown-nullable.ts
│   ├── module2/          # Advanced Types
│   │   ├── 2.1-type-assertion.ts
│   │   ├── 2.2-interface.ts
│   │   ├── 2.3-generics.ts
│   │   ├── 2.4-generic-interface.ts
│   │   ├── 2.5-generic-function.ts
│   │   ├── 2.6-constraints.ts
│   │   ├── 2.7-keyof.ts
│   │   ├── 2.8-async-promise.ts
│   │   ├── 2.9-conditional-types.ts
│   │   ├── 2.10-mapped-types.ts
│   │   └── 2.11-utility-types.ts
│   └── module3/          # OOP with TypeScript
│       ├── 3.1-class.ts
│       ├── 3.2-inheritance.ts
│       ├── 3.3-typeGuard.ts
│       ├── 3.4-inGuard.ts
│       ├── 3.5-instanceOfGuard.ts
│       ├── 3.6-accessmodifier.ts
│       ├── 3.7-getterSetter.ts
│       ├── 3.8-static.ts
│       ├── 3.9-polymorphism.ts
│       ├── 3.10-abstraction.ts
│       └── 3.11-encapsulation.ts
├── dist/                 # Compiled JavaScript output
└── tsconfig.json
```

---

## How to Run the Code

**Compile everything:**
```bash
tsc
```

**Compile and watch for changes:**
```bash
tsc --watch
```
**Install ts-node for compiling properly:**
```bash
npm install -g ts-node
```

**Run a file directly (no compile step):**
```bash
ts-node src/file.ts
```
**Run a specific file directly (no compile step):**
```bash
ts-node-dev --respawn --transpile-only src/module1/1.3-basic-types.ts
```

**Run compiled JS:**
```bash
node dist/module1/1.3-basic-types.js
```

---

## Learning Roadmap

```
Module 1 (Basics)          Module 2 (Advanced)        Module 3 (OOP)
──────────────────         ──────────────────         ──────────────
✅ Data Types          →   ✅ Type Assertion       →  ✅ Classes
✅ Objects             →   ✅ Interfaces           →  ✅ Inheritance
✅ Functions           →   ✅ Generics             →  ✅ Type Guards
✅ Spread/Rest         →   ✅ Constraints          →  ✅ Access Modifiers
✅ Destructuring       →   ✅ keyof                →  ✅ Getters/Setters
✅ Type Aliases        →   ✅ Async/Promises       →  ✅ Static Members
✅ Union/Intersection  →   ✅ Conditional Types    →  ✅ Polymorphism
✅ Operators           →   ✅ Mapped Types         →  ✅ Abstraction
✅ Never/Unknown       →   ✅ Utility Types        →  ✅ Encapsulation
```

---

## Resources

- [TypeScript Official Docs](https://www.typescriptlang.org/docs/)
- [TypeScript Playground](https://www.typescriptlang.org/play)
- [ts-node-dev](https://www.npmjs.com/package/ts-node-dev)
- [Apollo Level 2 Web Development](https://github.com/Apollo-Level2-Web-Dev/be-a-typescript-technocrat)

---

<div align="center">

**Happy Learning! 🎯**

*Made with ❤️ for the TypeScript community*

</div>