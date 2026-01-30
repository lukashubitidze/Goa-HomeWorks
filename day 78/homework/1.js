let numbers = [3, 6, 9, 12, 15, 18];

let doubled = numbers.map(num => num * 2);

let filtered = doubled.filter(num => num > 20);

let sum = filtered.reduce((total, num) => total + num, 0);

console.log("დარჩენილი რიცხვები:", filtered);
console.log("ჯამი:", sum);
console.log("დარჩენილი რიცხვების რაოდენობა:", filtered.length);