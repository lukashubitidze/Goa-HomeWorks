const person2 = {
    name: "Ana"
};

function introduce(city, country) {
    console.log(`${this.name} lives in ${city}, ${country}`);
}

// apply-ს პირველ არგუმენტად გადაეცემა ობიექტი, ხოლო ფუნქციის პარამეტრები - მასივის შიგნით
introduce.apply(person2, ["Tbilisi", "Georgia"]);