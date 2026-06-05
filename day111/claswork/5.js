const temperature = 35;

const weatherPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (temperature > 30) {
            resolve("Hot weather");
        } else {
            reject("Cold weather");
        }
    }, 2000); // 2 წამი
});



weatherPromise
    .then((message) => {
        console.log("Weather report:", message);
    })
    .catch((error) => {
        console.error("Weather report:", error);
    })
    .finally(() => {
        console.log("Forecast finished.");
    });