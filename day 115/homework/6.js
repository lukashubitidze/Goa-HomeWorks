const getTextPromise = new Promise((resolve) => {
    setTimeout(() => {
        resolve("JavaScript");
    }, 1000);
});

async function logTextLength() {
    const text = await getTextPromise;
    console.log(`ტექსტის "${text}" სიგრძეა:`, text.length);
}

logTextLength();