const promiseOne = new Promise((resolve) => resolve(10));
const promiseTwo = new Promise((resolve) => resolve(20));

async function sumTwoPromises() {
    // ველოდებით ორივე პრომისს პარალელურად Promise.all-ით (ან ცალ-ცალკე await-ით)
    const val1 = await promiseOne;
    const val2 = await promiseTwo;
    
    console.log("ორი პრომისის მნიშვნელობების ჯამი:", val1 + val2);
}

sumTwoPromises();