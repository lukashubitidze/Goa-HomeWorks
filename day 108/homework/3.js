class User {
    #username;
    #password;

    constructor(username, password) {
        this.#username = username;
        this.password = password; 
    }

    get username() {
        return this.#username;
    }

    set password(value) {
        if (value.length < 4) {
            throw new Error("პაროლი არ უნდა იყოს 4 სიმბოლოზე ნაკლები!");
        }
        this.#password = value;
    }
}

// გაშვება:

console.log("===== test 3 =====")

const user = new User("giga_99", "superSecret");
console.log(`მომხმარებელი: ${user.username}`); // გამოიტანს: giga_99