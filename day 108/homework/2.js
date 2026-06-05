class Animal {
    #name;
    #weight;

    constructor(name, weight) {
        this.#name = name;
        this.weight = weight; 
    }

    get name() {
        return this.#name;
    }

    set weight(value) {
        if (value <= 0) {
            throw new Error("წონა უნდა იყოს დადებითი რიცხვი!");
        }
        this.#weight = value;
    }
}

// გაშვება:

console.log("===== test 2 =====")

const dog = new Animal("ბობი", 12);
console.log(`ცხოველის სახელი: ${dog.name}`); // გამოიტანს: ბობი