const age = 18;

const agePromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (age >= 18) {
            resolve("Access granted");
        } else {
            reject("Access denied");
        }
    }, 1000); // 1 წამი
});



agePromise
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.error(error);
    })
    .finally(() => {
        console.log("Check finished");
    });
