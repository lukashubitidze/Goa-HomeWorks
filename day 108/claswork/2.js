class Car {
    constructor(brand) {
        this.brand = brand; // აქ იძახებს სეტერს
    }

    // getter აბრუნებს ბრენდს
    get brand() {
        return this._brand;
    }

    // setter ცვლის ბრენდს მხოლოდ მაშინ, თუ ცარიელი ტექსტი არ არის
    set brand(value) {
        if (!value || value.trim() === "") {
            throw new Error("ბრენდის სახელი არ შეიძლება იყოს ცარიელი!");
        }
        this._brand = value;
    }
}

// გამოპრინტვა და ტესტირება:
console.log("===== test 2 =====")
const myCar = new Car("Mercedes");
console.log(`მანქანის ბრენდი: ${myCar.brand}`); // გამოიტანს: Mercedes
console.log("")