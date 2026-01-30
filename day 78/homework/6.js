let numbers5 = [2, 4, 6, 8, 10, 12];

let tripled = numbers.map(num => num * 3);

let filtered1 = tripled.filter(num => num <= 20);

let sum2 = filtered.reduce((total, num) => total + num, 0);

let min = Math.min(...filtered1);

console.log("მიღებული რიცხვები:", filtered1);
console.log("ჯამი:", sum1);
console.log("ყველაზე პატარა რიცხვი:", min);