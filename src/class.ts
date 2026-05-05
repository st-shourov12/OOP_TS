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

