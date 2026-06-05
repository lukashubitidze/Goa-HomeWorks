class Employee {
    constructor(name) {
        this.name = name;
    }

    work() {
        return `${this.name} ასრულებს სამუშაოს.`;
    }
}

class Programmer extends Employee {
    constructor(name) {
        super(name);
    }

    work() {
        return `${this.name} წერს კოდს და ასწორებს ბაგებს. 💻`;
    }

    static company() {
        return "Google";
    }
}

console.log("===== test 5 =====")

// ---- ტესტირება და გამოტანა ----
console.log(Programmer.company()); 
// გამოტანა: Google (static მეთოდის გამოძახება პირდაპირ კლასიდან)

const generalStaff = new Employee("ანა");
console.log(generalStaff.work()); 
// გამოტანა: ანა ასრულებს სამუშაოს.

const dev = new Programmer("ლაშა");
console.log(dev.work()); 
// გამოტანა: ლაშა წერს კოდს და ასწორებს ბაგებს. 💻