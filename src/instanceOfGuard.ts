// npm install -g ts-node
// ts-node ./src/instanceOfGuard.ts

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