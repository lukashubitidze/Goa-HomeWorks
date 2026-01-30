let numbers4 = [4, 8, 12, 16, 20];

let divided = numbers.map(num => num / 2);

let sum1 = divided.reduce((total, num) => total + num, 0);
let average = sum / divided.length;

let rounded = Math.round(average);

console.log("გაყოფილი რიცხვები:", divided);
console.log("საშუალო:", average);
console.log("დამრგვალებული შედეგი:", rounded);