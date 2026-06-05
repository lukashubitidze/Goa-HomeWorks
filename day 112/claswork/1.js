// ```level 112:
// I) სინქრონულია
// თუ ასინქრონული?

// 1.
// console.log("Hello");  სინქრონულია
// console.log("World");
 
// 2.
// console.log("Start");
// setTimeout(() => {
// console.log("Timeout");      ასინქრონულია
// }, 1000);
// console.log("End");
 
// 3.
// function sayHi() {
// console.log("Hi");
// }                             სინქრონულია
// sayHi();
// console.log("Bye");
 
// 4.
// console.log("A");
// console.log("B");           სინქრონულია
// function greet() {
//     console.log("Hello");
// }
// greet();
// console.log("C");

 
// 5.
// for(let i = 0; i < 3; i++) {
// console.log(i);                           სინქრონულია
// }

// 6.
// console.log("A");
// setTimeout(() => {    სინქრონულია
// console.log("B");
// }, 0);
// console.log("C");
 
// 7.
// function greet() {
//     console.log("Hello");       
// }

// console.log("A");
// console.log("B");           ასინქრონულია
// greet();
// console.log("C");
 
// 8.
// alert("Hello");
// console.log("Done");      სინქრონულია
 
// 9.
// console.log("1");
// Promise.resolve().then(() => {
// console.log("2");                          ასინქრონულია
// });
// console.log("3");

// 10.
// const nums = [1, 2, 3];
// nums.forEach(num => {               სინქრონულია
// console.log(num);
// });


// II) კონსოლის შედეგის მიხედვით დაწერე შესაბამისი კოდი
// 1.
// კონსოლში უნდა გამოვიდეს:
// Hello
// World
// დაწერე მარტივი სინქრონული კოდი.

// 2.
// კონსოლში უნდა გამოვიდეს:
// Start
// End
// Timeout
// გამოიყენე setTimeout.

// 3.
// კონსოლში უნდა გამოვიდეს:
// 1
// 2
// 3
// გამოიყენე for ციკლი.

// 4.
// კონსოლში უნდა გამოვიდეს:
// Loading...
// Data received
// მეორე ტექსტი გამოვიდეს 2 წამის შემდეგ.

// 5.
// კონსოლში უნდა გამოვიდეს:
// A
// C
// B
// გამოიყენე setTimeout.
// ```




// 1
console.log("Hello");
console.log("World");


console.log("")

// 2
console.log("Start");

setTimeout(() => {
    console.log("Timeout");
}, 1000);

console.log("End");


setTimeout(() => {
    console.log("");  
}, 1500);



// 3
for (let i = 1; i <= 3; i++) {
    console.log(i);
}


console.log("")


// 4
console.log("Loading...");

setTimeout(() => {
    console.log("Data received");
}, 2000);



setTimeout(() => {
    console.log("");
}, 3000);

// 5
console.log("A");

setTimeout(() => {
    console.log("B");
}, 0);

console.log("C");