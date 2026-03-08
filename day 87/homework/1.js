// 1) Spread operator (...)
// Spread გამოიყენება ობიექტის ან მასივის ელემენტების "გაშლისთვის".
// მისი საშუალებით შეგვიძლია ობიექტის კოპირება, ობიექტების გაერთიანება
// ან კონკრეტული მნიშვნელობების შეცვლა ისე, რომ ორიგინალი არ შეიცვალოს.

// 2)
const user = {
  name: "Giga",
  age: 17
};

const newUser = {
  ...user,
  role: "admin",
  isActive: true
};

console.log("2)", newUser);

// 3)
const obj1 = { a: 1, b: 2 };
const obj2 = { b: 20, c: 3 };

const merged = {
  ...obj1,
  ...obj2
};

console.log("3)", merged);
// საბოლოო ობიექტში დარჩება b:20 რადგან obj2 ბოლოს იწერება და გადააწერს obj1-ის მნიშვნელობას

// 4)
const product = {
  title: "Laptop",
  price: 1500,
  inStock: true
};

const updatedProduct = {
  ...product,
  price: 1200,
  inStock: false
};

console.log("4)", updatedProduct);

// 5)
const profile = {
  username: "kocho",
  followers: 120,
  verified: false
};

const profileCopy = {
  ...profile
};

profileCopy.followers = 500;

console.log("5) original:", profile);
console.log("5) copy:", profileCopy);
// ორიგინალი არ შეიცვლება რადგან spread ქმნის ახალ ობიექტს