class Phone {
    #storage;

    constructor(brand, storage) {
        this.brand = brand;
        this.storage = storage; 
    }

    set storage(value) {
        if (value < 0) {
            throw new Error("მეხსიერება არ შეიძლება იყოს უარყოფითი!");
        }
        this.#storage = value;
    }

    get storage() {
        return `Storage: ${this.#storage}GB`;
    }
}

// გაშვება:

console.log("===== test 5 =====")

const phone = new Phone("Samsung", "256GB");
console.log(phone.storage); // გამოიტანს: Storage: 256GB

console.log("")