const isLoggedIn = true; 

const loginPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (isLoggedIn) {
            resolve("Login successful");
        } else {
            reject("Login failed");
        }
    }, 2000); // 2 წამი
});



loginPromise
    .then((message) => {
        console.log("Success:", message);
    })
    .catch((error) => {
        console.error("Error:", error);
    })
    .finally(() => {
        console.log("Authentication attempt ended.");
    });
