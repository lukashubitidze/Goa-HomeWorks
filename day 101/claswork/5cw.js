class User {
  constructor(username, password) {
    this.username = username;
    this.password = password;
  }
}


const user1 = new User("admin_jeo", "qwerty12345");
console.log(user1);