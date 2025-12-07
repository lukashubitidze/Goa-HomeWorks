// level 65:
// 1) შექმენი მასივი, მაგალითად let fruits = ["apple", "banana"]; და გაუკეთე push() ფუნქცია, რომ დაამატო ახალი ელემენტი "kiwi" მასივში. შემდეგ გამოიტანე კონსოლში განახლებული მასივი.
// 2) შექმენი ნებისმიერი 5 ელემენტიანი მასივი. length თვისებით გამოიტანე ეკრანზე რამდენი ელემენტია მასივში. შემდეგ push()-ით დაამატე ორი ელემენტი და თავიდან გამოიტანე length.
// 3) შექმენი მასივი რიცხვებით და pop() ფუნქციით წაშალე ბოლო ელემენტი. კონსოლში გამოიტანე რა წაიშალა და როგორ გამოიყურება მასივი ბოლოს.
// 4) შექმენი პროგრამა, სადაც გექნება მარტივი შეყვანილი ტექსტი (prompt-ის მაგივრად შეგიძლია უბრალოდ ცვლადად ჩაწერო). დაამატე ტექსტი მასივში push-ით და დაბეჭდე რამდენი ელემენტი გაქვს (length).
// 5) შექმენი ობიექტი counter. ობიექტს ქონდეს მეთოდი სადაც უკვე შექმნილ count-s (key-ს) დაემატება 1. ეს უნდა გამეორდეს 50 ჯერ. დაგჭირდება for loop.
// 6) შექმენი ობიექტი sum რომელიც გამოიტანს 1 დან 20 მდე რიცხვების ჯამს

// 1)

let fruits = ['apple', 'banana']
fruits.push['kivi']
console.log(fruits)

// 2)

let nums = [1, 2, 3, 4, 5]
nums.length()

// 3)

let nums2 = [1, 2, 3, 4, 5]
console.log(nums2.pop())

// 4)
textArray['email', 'pasword']
textArray.push('text');

console.log("მასივში არის " + textArray.length + " ელემენტი.");

// 5)

let counter = {
    count: 0,
    increment: function () {
        this.count++;
    }
};

for (let i = 0; i < 50; i++) {
    counter.increment();
}

console.log("Count-ის საბოლოო მნიშვნელობა არის:", counter.count);

// 6)

let sum = {
    num2: 0,

    calculate: function () {
        this.num2 = 0;

        for (let i = 1; i <= 20; i++) {
            this.num2 += i;
        }

        return this.num2;
    }
};

console.log(sum.calculate());