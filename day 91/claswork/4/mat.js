import products, { getAllProducts, filterByPrice } from "./exp.js";

console.log("ყველა პროდუქტი:");
console.log(products);

console.log("ფუნქციით მიღებული პროდუქტები:");
console.log(getAllProducts());

console.log("ფასი >= 500:");
console.log(filterByPrice(500));