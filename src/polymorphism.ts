// npm install -g ts-node
// ts-node ./src/polymorphism.ts

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

