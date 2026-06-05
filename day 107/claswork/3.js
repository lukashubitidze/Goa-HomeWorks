class BankCard {
  #balance;

  constructor(owner, balance = 0) {
    this.owner = owner;
    this.#balance = balance;
  }

  deposit(amount) {
    this.#balance += amount;
  }

  getBalance() {
    return this.#balance;
  }
}

// მაგალითი




const card = new BankCard("Nika", 100);

card.deposit(50);


console.log("===== 3 task =====")

console.log(card.getBalance());

console.log("")