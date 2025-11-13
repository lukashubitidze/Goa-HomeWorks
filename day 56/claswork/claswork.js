// level 56:
// 1) შექმენი ფუნქცია sayHello() — რომელიც დაბეჭდავს ტექსტს "Hello World".

// 2) შექმენი ფუნქცია greet(name) — რომელიც არგუმენტად მიიღებს სახელს და დაბეჭდავს "Hello, [name]!".

// 3) შექმენი ფუნქცია add(a, b) — რომელიც დააბრუნებს ორი რიცხვის ჯამს.

// 4) შექმენი რეგულარ ფუნქცია რომელსაც გადაეცემა ასაკი და შენი ფუნქცია განსაზღვრავს მომხმარეელი სრულწლოვანია თუ არა

// 5)  შექმენი Arrow ფუნქცია isEven(num) — რომელიც აბრუნებს "Even" თუ რიცხვი ლუწია და "Odd" თუ კენტი.


// 1)

function sayHello(){
    console.log('Hallo world')
}
sayHello()

// 2)

function greet(name) {
    console.log('Hallo ' + name)
}
greet('luka')
greet('vato')

// 3)

function add(a,b){
    console.log(a + b)
}
add(5,10)
add(2,9)

// 4)

function youAge(age){
    if (age >= 18){
        console.log('შენ ხარ სრულწლოვანი')
    } else {
        console.log('შენ არ ხარ სრულწლოვანი')
    }
}
youAge(17)
youAge(19)

// 5)

function isEven(num){
    if (num %2 === 0){
        console.log('Even')
    } else {
        console.log('Odd')
    }
}
isEven(4)
isEven(5)