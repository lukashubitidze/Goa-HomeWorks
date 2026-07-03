function parentFunction() {
    let x = 10;
    
    return function() {
        console.log("x-ის მნიშვნელობაა: " + x);
    };
}

const printX = parentFunction();
printX(); // დაბეჭდავს: x-ის მნიშვნელობაა: 10