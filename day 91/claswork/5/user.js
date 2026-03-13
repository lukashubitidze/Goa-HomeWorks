const user = {
  name: "Luka",
  age: 14,
  profession: "Children"
};

export default user;

export function greet(user) {
  return "Hello " + user.name;
}

export function showAge(user) {
  return "Age: " + user.age;
}