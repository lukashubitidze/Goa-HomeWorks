const balance = 120;

const paymentPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (balance >= 100) {
            resolve("Payment completed");
        } else {
            reject("Not enough money");
        }
    }, 2000); // 2 წამი
});


paymentPromise
    .then((message) => {
        console.log("Status:", message);
    })
    .catch((error) => {
        console.error("Status:", error);
    })
    .finally(() => {
        console.log("Transaction process closed.");
    });
