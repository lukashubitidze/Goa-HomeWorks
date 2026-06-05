const password = "12345";

const passwordPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (password === "admin123") {
            resolve("Welcome admin");
        } else {
            reject("Wrong password");
        }
    }, 1000); // 1 წამი
});



passwordPromise
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.error(error);
    })
    .finally(() => {
        console.log("Password verification completed.");
    });
