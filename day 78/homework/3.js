let numbers2 = [1, 3, 5, 7, 9];

let withIndex = numbers.map((num, index) => num + index);

let oddNumbers = withIndex.filter(num => num % 2 !== 0);

let product = oddNumbers.reduce((total, num) => total * num, 1);

console.log("ინდექსდამატებული რიცხვები:", withIndex);
console.log("კენტი რიცხვები:", oddNumbers);
console.log("ნამრავლი:", product);