class Animal {
    constructor(name) {
        this.name = name;
    }
}

class Dog extends Animal {
    static isDog(obj) {
        return obj instanceof Dog;
    }
}

const myDog = new Dog("რექსი");
console.log(Dog.isDog(myDog)); // true