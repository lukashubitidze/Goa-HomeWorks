const user = {
    name: "Saba"
};

function welcome(language) {
    console.log(`Welcome ${this.name}. Language: ${language}`);
}

// bind() ქმნის ახალ ფუნქციას, სადაც this არის user და language არის "Georgian"
const welcomeSaba = welcome.bind(user, "Georgian");

// ახლა უკვე შეგვიძლია ეს ახალი ფუნქცია ნებისმიერ დროს გამოვიძახოთ
welcomeSaba();