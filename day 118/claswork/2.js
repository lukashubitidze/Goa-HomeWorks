function greetUser() {
    let name = "გიორგი";
    
    return function() {
        console.log("მოგესალმები, " + name);
    };
}

const sayHello = greetUser();

// შეგვიძლია რამდენჯერმე გამოვიძახოთ
sayHello(); // დაბეჭდავს: მოგესალმები, გიორგი
sayHello(); // დაბეჭდავს: მოგესალმები, გიორგი
sayHello(); // დაბეჭდავს: მოგესალმები, გიორგი