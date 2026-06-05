class Student {
    constructor(score) {
        this.score = score; // აქ იძახებს სეტერს
    }

    // getter აბრუნებს სტატუსს ქულის მიხედვით
    get score() {
        if (this._score < 50) {
            return "Failed";
        } else {
            return "Passed";
        }
    }

    // setter ამოწმებს, რომ ქულა იყოს 0-დან 100-მდე
    set score(value) {
        if (value < 0 || value > 100) {
            throw new Error("ქულა უნდა იყოს 0-დან 100-მდე დიაპაზონში!");
        }
        this._score = value;
    }
}

// გამოპრინტვა და ტესტირება:
console.log("===== test 3 =====")
const student1 = new Student(75);
console.log(`სტუდენტი 1-ის შედეგი: ${student1.score}`); // გამოიტანს: Passed

const student2 = new Student(35);
console.log(`სტუდენტი 2-ის შედეგი: ${student2.score}`); // გამოიტანს: Failed
console.log("")