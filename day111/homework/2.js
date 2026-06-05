const checkSubscription = new Promise((resolve, reject) => {
    const isSubscribed = false;

    setTimeout(() => {
        if (isSubscribed) {
            resolve("Premium access granted");
        } else {
            reject("You need subscription");
        }
    }, 1000); // 1 წამი
});

// შემოწმება:
checkSubscription
    .then(message => console.log(message))
    .catch(error => console.log(error)); // დაიბეჭდება: "You need subscription"