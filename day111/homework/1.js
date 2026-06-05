const checkServerStatus = new Promise((resolve, reject) => {
    const serverStatus = 500;

    setTimeout(() => {
        if (serverStatus === 200) {
            resolve("Server works correctly");
        } else {
            reject("Server error");
        }
    }, 2000); // 2 წამი
});

// შემოწმება:
checkServerStatus
    .then(message => {console.log(message)})
    .catch(error => {console.log(error)}); // დაიბეჭდება: "Server error"