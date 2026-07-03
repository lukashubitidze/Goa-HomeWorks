function counter() {
    let count = 0;
    
    return function() {
        count++; // ზრდის count-ს 1-ით (ანუ უმატებს 1-ს)
        console.log(count);
    };
}

const increment = counter();

increment(); // დაბეჭდავს: 1
increment(); // დაბეჭდავს: 2
increment(); // დაბეჭდავს: 3