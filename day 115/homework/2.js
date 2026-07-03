const waitAndReturnNumber = new Promise((resolve) => {
    setTimeout(() => {
        resolve(25);
    }, 2000);
});

async function handleSquare() {
    const number = await waitAndReturnNumber;
    console.log(number * number); // ან number ** 2
}

handleSquare();