class Phone {
  #pin;

  constructor(pin) {
    this.#pin = pin;
  }

  // მეთოდი, რომელიც ამოწმებს პინ-კოდს კლასის შიგნიდან
  checkPin(enteredPin) {
    return this.#pin === enteredPin;
  }
}

// გამოყენების მაგალითი:
const myPhone = new Phone(1234);
console.log(myPhone.checkPin(1234)); // დაბეჭდავს: true
console.log(myPhone.checkPin(4567)); // დაბეჭდავს: false