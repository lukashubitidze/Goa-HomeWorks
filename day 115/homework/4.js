const getArrayPromise = new Promise((resolve) => {
    resolve([1, 2, 3, 4, 5]);
});

async function calculateSum() {
    const array = await getArrayPromise;
    const sum = array.reduce((acc, curr) => acc + curr, 0);
    console.log("მასივის ელემენტების ჯამი:", sum);
}

calculateSum();