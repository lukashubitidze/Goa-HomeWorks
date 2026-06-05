class Worker {
    #salary;

    constructor(name, salary) {
        this.name = name;
        this.salary = salary; 
    }

    set salary(value) {
        if (value < 0) {
            throw new Error("ხელფასი არ შეიძლება იყოს უარყოფითი!");
        }
        this.#salary = value;
    }

    get salary() {
        return `Salary: ${this.#salary}`;
    }
}

// გაშვება:

console.log("===== test 6 =====")

const worker = new Worker("გიორგი", 3000);
console.log(worker.salary); // გამოიტანს: Salary: 3000