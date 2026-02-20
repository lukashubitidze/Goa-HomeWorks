const user = {
  username: "gio123",
  email: "gio@gmail.com",
  address: {
    city: "Batumi",
    zip: "6000"
  }
};

const {
  username: userName,
  address: { city, zip }
} = user;

console.log("User Name:", userName);
console.log("City:", city);
console.log("Zip:", zip);