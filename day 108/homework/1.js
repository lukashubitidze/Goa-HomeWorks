class Product {
    #title;
    #price;

    constructor(title, price) {
        this.title = title;
        this.price = price; 
    }

    get price() {
        return this.#price;
    }

    set price(value) {
        if (value < 0) {
            throw new Error("ფასი არ შეიძლება იყოს 0-ზე ნაკლები!");
        }
        this.#price = value;
    }
}

// გაშვება:

console.log("===== test 1 =====")

const prod = new Product("ტელევიზორი", 1500);
console.log(`პროდუქტის ფასი: ${prod.price}`); // გამოიტანს: 1500