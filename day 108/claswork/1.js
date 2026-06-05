class Person {
    constructor(name, age) {
        this._name = name;
        this._age = age;
    }

    // getter სახელისთვის
    get name() {
        return this._name;
    }

      get age() {
        return this._age;
    }

    // setter ასაკისთვის (არ უშვებს უარყოფითს)
    set age(value) {
        if (value < 0) {
            console.log("ასაკი არ შეიძლება იყოს უარყოფითი!");
        }
        this._age = value;
    }
}

// გამოპრინტვა და ტესტირება:
console.log("===== test 1 =====")
const person = new Person("ანი", 20);
console.log(`სახელი: ${person.name}`); // გამოიტანს: ანი
console.log(`ასაკი: ${person.age}`);   // გამოიტანს: 20
console.log("")