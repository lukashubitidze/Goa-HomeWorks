class Movie {
    #rating;

    constructor(title, rating) {
        this.title = title;
        this.rating = rating; 
    }

    set rating(value) {
        if (value < 1 || value > 10) {
            throw new Error("რეიტინგი უნდა იყოს 1-დან 10-მდე!");
        }
        this.#rating = value;
    }

    get rating() {
        return `Rating: ${this.#rating}`;
    }
}

// გაშვება:

console.log("===== test 4 =====")

const movie = new Movie("Interstellar", 8);
console.log(movie.rating); // გამოიტანს: Rating: 8