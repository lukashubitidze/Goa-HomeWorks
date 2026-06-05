class User {
  #password;

  constructor(password) {
    this.#password = password;
  }

  changePassword(oldPass, newPass) {
    if (oldPass === this.#password) {
      this.#password = newPass;
      return "Password changed";
    } else {
      return "Wrong old password";
    }
  }
}

// მაგალითი
const user = new User("12345");


console.log("===== 2 task =====")

console.log(user.changePassword("12345", "abcde"));
console.log(user.changePassword("11111", "qwerty"));

console.log("")