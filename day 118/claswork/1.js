function outer() {
    let message = "გამარჯობა!";
    
    function inner() {
        console.log(message);
    }
    
    return inner; // ვაბრუნებთ ფუნქციას და არა მის შედეგს (inner() - ს გარეშე)
}

// ვიძახებთ outer-ს, რომელიც გვიბრუნებს inner ფუნქციას
const myFunc = outer(); 

// ახლა myFunc შეიცავს inner ფუნქციას და შეგვიძლია გამოვიძახოთ
myFunc(); // დაბეჭდავს: გამარჯობა!
