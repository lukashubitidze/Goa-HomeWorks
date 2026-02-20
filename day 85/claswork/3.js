function printUser({
  name,
  address: {
    city = "Unknown",
    zip = "0000"
  } = {}
}) {
  console.log("Name:", name);
  console.log("City:", city);
  console.log("Zip:", zip);
}

printUser({
  name: "Nika",
  address: {
    city: "Tbilisi",
    zip: "0101"
  }
});

printUser({
  name: "Nika"
});