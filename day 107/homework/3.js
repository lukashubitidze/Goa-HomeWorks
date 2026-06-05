class User {
  #password; 

  constructor(username, password) {
    this.username = username;
    this.#password = password; 
  }
}

const user = new User("ნიკა", "secret123");
console.log("მომხმარებლის სახელი:", user.username);