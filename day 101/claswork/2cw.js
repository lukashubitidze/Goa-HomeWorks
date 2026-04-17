class Car {
  constructor(brand, model, year = 2020) {
    this.brand = brand;
    this.model = model;
    this.year = year;
  }
}



const car1 = new Car("Toyota", "Prius");
console.log(car1);