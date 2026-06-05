class Phone {
  #pinCode;

  constructor(pinCode) {
    this.#pinCode = pinCode;
  }

  checkPin(pin) {
    if (pin === this.#pinCode) {
      return "Access granted";
    } else {
      return "Wrong pin";
    }
  }
}

// მაგალითი
const phone = new Phone(1234);

console.log("===== 1 task =====")

console.log(phone.checkPin(1234));
console.log(phone.checkPin(1111));

console.log("")