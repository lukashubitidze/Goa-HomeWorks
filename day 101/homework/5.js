class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

const p1 = new Product("Laptop", 1200);
const p2 = new Product("Phone", 800);
const p3 = new Product("Tablet", 500);

console.log(p1.price);
console.log(p2.price);
console.log(p3.price);