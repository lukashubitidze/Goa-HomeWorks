const colors = ["red", "green", "blue", "yellow", "black"];

const [firstColor, secondColor, ...rest] = colors;

console.log("First Color:", firstColor);
console.log("Second Color:", secondColor);
console.log("Rest Colors:", rest);