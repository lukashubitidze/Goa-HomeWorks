const checkWeather = new Promise((resolve, reject) => {
    const weather = "rainy";

    setTimeout(() => {
        if (weather === "sunny") {
            resolve("Go outside");
        } else {
            reject("Stay at home");
        }
    }, 1000); // 1 წამი
});

// შემოწმება:
checkWeather
    .then(message => console.log(message))
    .catch(error => console.log(error)); // დაიბეჭდება: "Stay at home"