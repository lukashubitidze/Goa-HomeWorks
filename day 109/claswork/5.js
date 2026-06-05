// მშობელი კლასი
class Employee {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }
}

// შვილი კლასი, რომელიც მემკვიდრეობს Employee-ს
class Manager extends Employee {
    constructor(name, salary, department) {
        super(name, salary); // მშობელი კლასის კონსტრუქტორის გამოძახება
        this.department = department;
    }
}

console.log("===== task 5 =====")

// manager ობიექტის შექმნა
const myManager = new Manager("გიორგი", 5000, "IT");

// შემოწმება if statement-ის და instanceof-ის გამოყენებით
if (myManager instanceof Manager) {
    console.log("Manager panel opened");
}

console.log("")