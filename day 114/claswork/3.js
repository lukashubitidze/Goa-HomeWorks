console.log("ახალი Todo-ს შექმნა...");

const todoErrors = {
    400: "შეცდომა 400: არასწორი მონაცემები (Bad Request).",
    401: "შეცდომა 401: ავტორიზაცია საჭიროა.",
    500: "შეცდომა 500: სერვერის შეცდომა."
};

fetch("https://jsonplaceholder.typicode.com/todos", {
    method: "POST",
    body: JSON.stringify({
        title: "ვისწავლო Fetch API",
        completed: false,
        userId: 1
    }),
    headers: {
        "Content-Type": "application/json"
    }
})
.then(res => {
    console.log("რესპონსი მოვიდა");
    console.log("სტატუს კოდია:", res.status); // წარმატებისას: 201 (Created)

    // თუ სტატუსი 201-ია, აგრძელებს, სხვა შემთხვევაში ისვრის ერორს
    return res.status === 201 
        ? res.json() 
        : (() => { throw new Error(todoErrors[res.status] || "შეცდომა: " + res.status) })();
})
.then(data => {
    console.log("წარმატებით შეიქმნა Todo:", data);
})
.catch(error => {
    console.error("დაფიქსირდა ერორი:", error.message);
});