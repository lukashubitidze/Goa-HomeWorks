const categories = ["ტექნიკა", "ტანსაცმელი", "ტექნიკა", "საკვები", "ტანსაცმელი", "ტექნიკა"];

const result = categories.reduce((acc, category) => {
  acc[category] = (acc[category] || 0) + 1;
  return acc;
}, {});

console.log(result);