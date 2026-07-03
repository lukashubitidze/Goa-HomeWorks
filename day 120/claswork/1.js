const person = {
    name: "Gio"
};

function sayHello(city) {
    console.log(`Hello, my name is ${this.name} and I live in ${city}`);
}

// call() მეთოდის გამოყენება
sayHello.call(person, "Tbilisi");