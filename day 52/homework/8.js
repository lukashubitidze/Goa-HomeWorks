//8) შექმენი 3 ცვლადი, ერთი იყოს რო მომხმარებელს უნდა შემოატანინო მათემატიკური სიმბოლო (+, -, *, /, %), დანარჩენი ორი ცვლადი უნდა იყოს რიცხვები. სიმბოლოს მიხედვით შეასრულე ამ ორ ცვლადში სადაც რიცხვები, არის შესრულდეს მოქმედება. (შედეგი გამოიტანეთ console.log-ით)



const symbol = prompt("შეიყვანეთ მათემატიკური სიმბოლო (+, -, *, /, %):");
const num1 = parseFloat(prompt("შეიყვანეთ პირველი რიცხვი:"));
const num2 = parseFloat(prompt("შეიყვანეთ მეორე რიცხვი:"));


if (symbol === "+") {
    console.log (num1 + num2)
} else if (symbol === "-") {
    console.log (num1 - num2)
} else if (symbol === "*") {
    console.log (num1 * num2)
} else if (symbol === "/") {
    if (num2 === 0) {
        console.log ("შეცდომა: 0-ით გაყოფა არ შეიძლება!")
    } else {
        console.log (num1 / num2)
    }
} else if (symbol === "%") {
    console.log (num1 % num2)
} else {
    console.log ("შეყვანილი სიმბოლო არასწორია!")
}