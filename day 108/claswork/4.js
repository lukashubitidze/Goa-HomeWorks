class BankAccount {
    constructor(balance) {
        this.balance = balance; // აქ იძახებს სეტერს
    }

    // getter აბრუნებს ბალანსს
    get balance() {
        return this._balance;
    }

    // setter არ აძლევს უფლებას ბალანსი გახდეს უარყოფითი
    set balance(value) {
        if (value < 0) {
            throw new Error("ბალანსი არ შეიძლება გახდეს უარყოფითი!");
        }
        this._balance = value;
    }
}

// გამოპრინტვა და ტესტირება:
console.log("===== test 4 =====")
const account = new BankAccount(1000);
console.log(`მიმდინარე ბალანსი: ${account.balance}$`); // გამოიტანს: 1000$

account.balance = 450; // ვცვლით ბალანსს
console.log(`ახალი ბალანსი: ${account.balance}$`);     // გამოიტანს: 450$
console.log("")