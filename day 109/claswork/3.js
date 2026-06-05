// მშობელი კლასი
class Appliance {
    constructor(brand) {
        this.brand = brand;
    }
}

// შვილი კლასი TV, რომელიც მემკვიდრეობს Appliance-ს
class TV extends Appliance {
    constructor(brand, screenSize) {
        super(brand); // მშობელი კლასის კონსტრუქტორის გამოძახება
        this.screenSize = screenSize;
    }
}

// შვილი კლასი Fridge, რომელიც მემკვიდრეობს Appliance-ს
class Fridge extends Appliance {
    constructor(brand, capacity) {
        super(brand); // მშობელი კლასის კონსტრუქტორის გამოძახება
        this.capacity = capacity;
    }
}


console.log("===== task 3 =====")

// ობიექტების (instances) შექმნა
const myTV = new TV("Samsung", 55);
const myFridge = new Fridge("LG", "400L");

// შემოწმებები instanceof-ის გამოყენებით:

// 1. არის თუ არა tv → TV-ის instance?
console.log(myTV instanceof TV); // გამოიტანს: true (რადგან myTV პირდაპირ TV კლასით შეიქმნა)

// 2. არის თუ არა tv → Appliance-ის instance?
console.log(myTV instanceof Appliance); // გამოიტანს: true (რადგან TV მემკვიდრეობს Appliance კლასს)

// 3. არის თუ არა fridge → TV-ის instance?
console.log(myFridge instanceof TV); // გამოიტანს: false (რადგან Fridge და TV სხვადასხვა შვილი კლასებია)

console.log("")