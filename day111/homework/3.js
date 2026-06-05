const uploadFile = new Promise((resolve, reject) => {
    const fileSize = 8;

    setTimeout(() => {
        if (fileSize <= 10) {
            resolve("File uploaded");
        } else {
            reject("File is too large");
        }
    }, 2000); // 2 წამი
});

// შემოწმება:
uploadFile
    .then(message => console.log(message))
    .catch(error => console.log(error)); // დაიბეჭდება: "File uploaded"