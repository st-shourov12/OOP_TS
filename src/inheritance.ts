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