const products = [
  { name: "Laptop", price: 1200 },
  { name: "Phone", price: 800 },
  { name: "Tablet", price: 400 },
  { name: "Headphones", price: 150 }
];

// ყველა პროდუქტი
export function getAllProducts() {
  return products;
}

// ფილტრი ფასის მიხედვით
export function filterByPrice(minPrice) {
  return products.filter(product => product.price >= minPrice);
}

// default export
export default products;