class Car {
  constructor(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
  }
}

const car1 = new Car("Toyota", "Corolla", 2018);
const car2 = new Car("BMW", "X5", 2020);
const car3 = new Car("Mercedes", "C-Class", 2019);

console.log(car1, car2, car3);