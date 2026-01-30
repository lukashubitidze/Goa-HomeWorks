let numbers3 = [-8, -2, 0, 3, 6, 9, 11];

let nonNegative = numbers.filter(num => num >= 0);

let added = nonNegative.map(num => num + 5);

let result = added.filter(num => num < 10);

result.forEach(num => {
  console.log(num);
});