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

getSleepingHours(person3)