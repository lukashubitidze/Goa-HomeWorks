const buyItem = new Promise((resolve, reject) => {
    const coins = 250;

    setTimeout(() => {
        if (coins >= 200) {
            resolve("You can buy the item");
        } else {
            reject("Not enough coins");
        }
    }, 2000); // 2 წამი
});

// შემოწმება:
buyItem
    .then(message => console.log(message))
    .catch(error => console.log(error)); // დაიბეჭდება: "You can buy the item"