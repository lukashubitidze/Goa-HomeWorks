let x = 100
let y = 200

[x, y] = [y, x]

console.log(x)
console.log(y)

const student = {
  name: "Nika",
  age: 12,
  grade: 6,
  school: "Public School",
  city: "Tbilisi"
}

const { name, age, ...rest } = student

console.log(name)
console.log(age)
console.log(rest)