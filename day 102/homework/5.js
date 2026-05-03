class BankAccountV2 {
    constructor(balance) {
        this.balance = balance;
    }

    _getFee(amount) {
        return amount > 500 ? amount * 0.02 : amount * 0.01;
    }

    withdraw(amount) {
        let fee = this._getFee(amount);
        let totalDeduction = amount + fee;

        if (totalDeduction > this.balance) {
            return "ბალანსი არ არის საკმარისი საკომისიოს გათვალისწინებით";
        }

        this.balance -= totalDeduction;
        return this.balance.toFixed(2);
    }
}

const myAcc = new BankAccountV2(1000);
console.log(`ახალი ბალანსი: ${myAcc.withdraw(600)}`);