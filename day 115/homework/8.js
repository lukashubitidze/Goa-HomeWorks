const checkScorePromise = new Promise((resolve) => {
    resolve(80);
});

async function checkResult() {
    const score = await checkScorePromise;
    
    if (score > 50) {
        console.log("Passed");
    } else {
        console.log("Failed");
    }
}

checkResult();