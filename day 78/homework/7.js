let numbers6 = [1, 5, 10, 15, 20];

let minusOne = numbers.map(num => num - 1);

let filtered2 = minusOne.filter(num => num > 10);

filtered2.sort((a, b) => b - a);

filtered2.forEach(num => {
  console.log(num);
});