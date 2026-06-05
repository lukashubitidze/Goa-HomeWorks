console.log("მომხმარებლების წამოღება...");

const userErrors = {
    401: "შეცდომა 401: ავტორიზაცია საჭიროა.",
    403: "შეცდომა 403: წვდომა აკრძალულია.",
    404: "შეცდომა 404: მომხმარებლები ვერ მოიძებნა.",
    500: "შეცდომა 500: სერვერის შიდა შეცდომა."
};

fetch("https://jsonplaceholder.typicode.com/users")
.then(res => {
    console.log("რესპონსი მოვიდა");
    console.log("სტატუს კოდია:", res.status);

    // თუ სტატუსი 200-ია, აბრუნებს მონაცემებს, თუ არა - ისვრის ერორს ობიექტიდან
    return res.status === 200 
        ? res.json() 
        : (() => { throw new Error(userErrors[res.status] || "უცნობი შეცდომა: " + res.status) })();
})
.then(data => {
    console.log("თითოეული მომხმარებლის სახელი:");
    data.forEach(user => {
        console.log(user.name);
    });
})
.catch(error => {
    console.error("დაფიქსირდა ერორი:", error.message);
});