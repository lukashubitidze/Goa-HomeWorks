console.log("ახალი პოსტის შექმნა...");

const createPostErrors = {
    400: "შეცდომა 400: არასწორი მოთხოვნა.",
    409: "შეცდომა 409: კონფლიქტი მონაცემებში.",
    500: "შეცდომა 500: სერვერი გათიშულია."
};

fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({
        title: "ახალი სათაური",
        body: "პოსტის შინაარსი აქ ჩაიწერება",
        userId: 1
    }),
    headers: {
        "Content-Type": "application/json"
    }
})
.then(res => {
    console.log("რესპონსი მოვიდა");
    console.log("სტატუს კოდია:", res.status); // წარმატებისას: 201

    return res.status === 201 
        ? res.json() 
        : (() => { throw new Error(createPostErrors[res.status] || "შეცდომა: " + res.status) })();
})
.then(data => {
    console.log("ახალი პოსტი წარმატებით შეიქმნა:", data);
})
.catch(error => {
    console.error("დაფიქსირდა ერორი:", error.message);
});