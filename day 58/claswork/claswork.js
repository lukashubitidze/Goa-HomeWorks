// level 58:
// 1) შეამოწმე: რიცხვი > 0ა?
// 2) შეამოწმე: რიცხვი ლუწია თუ კენტი.
// 3) სამი რიცხვიდან გამოიტანე ყველაზე დიდი.
//  4) სია: 5 + 7, 10 - 4, 3 * 3, 20 / 2 – ყველა console.log-ით.
// 5) შეადარე ორი რიცხვი: >, <, ===, !==.
// 6) ცვლადის გაზრდა: შექმენი num = 0 და num++ 3-ჯერ.
// 7) დაბეჭდე 1–დან 20-მდე ყველა რიცხვი.
// 8) დაბეჭდე 1–30-მდე მხოლოდ ლუწები.
// 9) იპოვე ჯამი 1–50-მდე რიცხვების.
// 10) while-ით დაბეჭდე 1–დან 5-მდე რიცხვები.
// 11) შექმენი counter = 0 და ზრდე სანამ < 10 იქნება.
// 12) while-ით დათვალე ჯამი 1–დან 20-მდე.
// 13) მიანიჭე ცვლადს "apple" და switch-ით დაწერე:
// "apple" → "fruit"
// "carrot" → "vegetable"
// default → "unknown"



// 1)


let num1 = prompt('input number')

if (num1 > 0){
    console.log('დადებითია')
} else if(num1 = 0){
    console.log('ნულის ტოლია')
} else{
    console.log('უარყოფითია')
}


// 2)

// let num2 = prompt('input number')

// if (num2 % 2 = 0){
//     console.log('ლუწია')
// } else{
//     console.log('კენტია')
// }


// 4)

console.log(5 + 7)
console.log(10 - 4)
console.log(3 * 3)
console.log(20 / 2)


// 5)

console.log(5 > 7)
console.log(5 < 7)
console.log(5 === 7)
console.log(5 !== 7)

// 7)


let num3 = 0;

while(num3 < 20){
    console.log(num3 += 1)
}

// 8)

for (let i = 2; i <= 30; i += 2) {
  console.log(i);
}

// 9)


let sum = 0;

for (let i = 1; i <= 50; i++) {
  sum += i;
}


// 10)

let i = 1;

while (i <= 5) {
  console.log(i);
  i++;
}


// 11)

let counter = 0;

while (counter < 10) {
  console.log(counter);
  counter++;
}


// 12)

let sum2 = 0;
let i2 = 1;

while (i2 <= 20) {
  sum += i2;
  i2++;
}

console.log(sum);


// 13)

let item = "apple";

switch (item) {
  case "apple":
    console.log("fruit");
    break;

  case "carrot":
    console.log("vegetable");
    break;

  default:
    console.log("unknown");
    break;
}