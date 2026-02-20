const products = [
  { name: "Book", price: 30, category: "Education" },
  { name: "Headphones", price: 80, category: "Electronics" },
  { name: "Bag", price: 50, category: "Fashion" }
];

const [
  { name: firstName, price: firstPrice },
  { category: secondCategory },
  { name: thirdName }
] = products;

console.log("First Product Name:", firstName);
console.log("First Product Price:", firstPrice);
console.log("Second Product Category:", secondCategory);
console.log("Third Product Name:", thirdName);