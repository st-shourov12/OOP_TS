// npm install -g typescript
// tsc --init
// tsc


// npm install -g ts-node
// ts-node ./src/class.ts

// Class 

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

shourov.about()

