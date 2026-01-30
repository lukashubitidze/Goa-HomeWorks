let numbers1 = [5, 11, 2, 8, 14, 7];

let evenNumbers = numbers.filter(num => num % 2 === 0);

let squared = evenNumbers.map(num => num * num);

squared.sort((a, b) => a - b);

squared.forEach(num => {
  console.log(num);
});