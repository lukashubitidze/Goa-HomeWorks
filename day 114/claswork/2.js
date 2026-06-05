console.log("პოსტების წამოღება...");

const postErrors = {
    400: "შეცდომა 400: არასწორი მოთხოვნა.",
    404: "შეცდომა 404: პოსტები ვერ მოიძებნა.",
    500: "შეცდომა 500: სერვერი გათიშულია."
};

fetch("https://jsonplaceholder.typicode.com/posts")
.then(res => {
    console.log("რესპონსი მოვიდა");
    console.log("სტატუს კოდია:", res.status);

    // თუ სტატუსი 200-ია, აბრუნებს მონაცემებს, თუ არა - ისვრის შესაბამის ერორს
    return res.status === 200 
        ? res.json() 
        : (() => { throw new Error(postErrors[res.status] || "სტატუს კოდი: " + res.status) })();
})
.then(data => {
    console.log("პირველი 10 პოსტის სათაური:");
    
    // .slice(0, 10) იღებს მხოლოდ პირველ ათ პოსტს
    data.slice(0, 10).forEach((post, index) => {
        console.log(`${index + 1}. ${post.title}`);
    });
})
.catch(error => {
    console.error("დაფიქსირდა ერორი:", error.message);
});