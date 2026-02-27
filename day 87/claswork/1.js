// task 1

const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4];
console.log("1)", newNumbers); 
// [1, 2, 3, 4]



// task 2
const arr1 = [1, 2];
const arr2 = [3, 4];
const combinedArr = [...arr1, ...arr2];
console.log("2)", combinedArr);
// [1, 2, 3, 4]


// task 3

const colors = ["red", "blue"];
const newColors = ["green", ...colors];
console.log("3)", newColors);
// ["green", "red", "blue"]


// task 4

const obj = {
  numbers: [1, 2, 3]
};

const newNumbersObj = {
  ...obj,
  numbers: [...obj.numbers, 4]
};

console.log("4)", newNumbersObj);
// { numbers: [1, 2, 3, 4] }



// task 5

const obj1 = {
  a: 1,
  b: 2
};

const obj2 = {
  c: 3,
  d: 4
};

const combinedObj = {
  ...obj1,
  ...obj2
};

console.log("5)", combinedObj);
// { a: 1, b: 2, c: 3, d: 4 }