// 1) შექმენი ობიექტი, რომელსაც ექნება:
// name
// age
// city
// და Console-ში დაიპრინტე.
// 2) შექმენი ობიექტი car, რომელსაც ექნება:
// brand
// model
// year
// და Console-ში დაბეჭდე მხოლოდ brand და year.
// 3) შექმენი ობიექტი user, რომელსაც ექნება:

// name
// დაამატეთ მეთოდი  sayHello() → რომელიც დაბეჭდავს "Hello"
// 4) შექმენით კალკულატორი obj-თი (დაგჭირდებათ მეთოდები)
// უნდა ქონდეს მიმატების, გამოკლების, გაყოფის და გამრავლების მეთოდები
// 5) შექმენი ობიექტი რომელსაც ექნება მეთოდი, ობიექტს ექნება სახელი და ასაკი, ამ მეთოდმა უნდა გააკეთოს "ჩემი სახელია [სახელი] და ვარ [ასაკი]"


// 1)

const person ={
    name: 'luka',
    age: 14,
    city: 'chiatura'
};

console.log(person.name)
console.log(person['name'])

// 2)

const car={
    brand: 'BMW',
    model: 'M5 competition',
    year: 2020  // აზრზე არ ვარ სწორია თუ არა
};

console.log(car.brand)
console.log(car['year'])

// 3)

const user = {
    name2: "saba",
    sayHello: function() {
        console.log("Hello");
    }
};

user.sayHello();

// 4)

const calculator = {

    add: function(a, b) {
        return a + b;
    },

   
    subtract: function(a, b) {
        return a - b;
    },

    
    multiply: function(a, b) {
        return a * b;
    },

    
};

console.log(calculator.add(5,3));        
console.log(calculator.subtract(10,5));   
console.log(calculator.multiply(20,10)); 
console.log(calculator.divide(5,5));     

// 5)

const person2= {
    name3: "ლუკა",  
    age2: 30,         

    introduce: function() {
        console.log(`ჩემი სახელია ${this.name3} და ვარ ${this.age2}`);
    }
};


person2.introduce();
