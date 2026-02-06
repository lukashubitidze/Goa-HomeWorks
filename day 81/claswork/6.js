const orders = [
  { dish: "Pizza", price: 10, quantity: 2 },
  { dish: "Pasta", price: 8, quantity: 3 },
  { dish: "Salad", price: 5, quantity: 1 },
  { dish: "Soda", price: 2, quantity: 4 }
];

let totalRevenue = 0;

orders.forEach(order => {
  const orderTotal = order.price * order.quantity;
  totalRevenue += orderTotal;
});

console.log("Total revenue using forEach:", totalRevenue);