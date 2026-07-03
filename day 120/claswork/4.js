const car = {
    brand: "BMW"
};

function carInfo(model, year) {
    console.log(`${this.brand} ${model} ${year}`);
}

// apply-ს არგუმენტებს ვუწერთ მასივის სახით: [model, year]
carInfo.apply(car, ["X5", 2022]);