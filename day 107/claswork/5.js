class EmailAccount {
  #email;

  constructor(email) {
    this.#email = email;
  }

  getEmail() {
    return this.#email;
  }

  changeEmail(newEmail) {
    this.#email = newEmail;
  }
}

// მაგალითი
console.log("===== 5 task =====")


const emailAcc = new EmailAccount("test@gmail.com");

console.log(emailAcc.getEmail());

emailAcc.changeEmail("new@gmail.com");

console.log(emailAcc.getEmail());
