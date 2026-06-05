class Rectangle {
    constructor(width, height) {
        this.width = width;   // აქ იძახებს სეტერს
        this.height = height; // აქ იძახებს სეტერს
    }

    // სიგანის getter და setter
    get width() {
        return this._width;
    }
    set width(value) {
        if (value < 0) {
            throw new Error("სიგანე არ შეიძლება იყოს უარყოფითი!");
        }
        this._width = value;
    }

    // სიმაღლის getter და setter
    get height() {
        return this._height;
    }
    set height(value) {
        if (value < 0) {
            throw new Error("სიმაღლე არ შეიძლება იყოს უარყოფითი!");
        }
        this._height = value;
    }

    // getter ფართობისთვის (area)
    get area() {
        return this._width * this._height;
    }
}

// გამოპრინტვა და ტესტირება:
console.log("===== test 5 =====")
const rect = new Rectangle(8, 4);
console.log(`მართკუთხედის სიგანე: ${rect.width}`);  // გამოიტანს: 8
console.log(`მართკუთხედის სიმაღლე: ${rect.height}`); // გამოიტანს: 4
console.log(`მართკუთხედის ფართობი: ${rect.area}`);    // გამოიტანს: 32
console.log("")