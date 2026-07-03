const student = {
    name: "Nika",
    age: 18
};

function info() {
    console.log(`${this.name} is ${this.age} years old.`);
}

// რადგან ფუნქციას გარედან არგუმენტი არ სჭირდება, call-ს გადავცემთ მხოლოდ ობიექტს
info.call(student);