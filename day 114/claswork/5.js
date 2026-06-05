console.log("პოსტის განახლება...");

const updatePostErrors = {
    400: "შეცდომა 400: მონაცემები არასწორია.",
    404: "შეცდომა 404: ასეთი პოსტი ვერ მოიძებნა.",
    500: "შეცდომა 500: სერვერის შიდა შეცდომა."
};

fetch("https://jsonplaceholder.typicode.com/posts/1", {
    method: "PUT",
    body: JSON.stringify({
        title: "შეცვლილი სათაური",
        body: "შეცვლილი შინაარსი",
        userId: 1 // PUT მოითხოვს ყველა ველის ხელახლა გაგზავნას
    }),
    headers: {
        "Content-Type": "application/json"
    }
})
.then(res => {
    console.log("რესპონსი მოვიდა");
    console.log("სტატუს კოდია:", res.status); // წარმატებისას: 200

    return res.status === 200 
        ? res.json() 
        : (() => { throw new Error(updatePostErrors[res.status] || "შეცდომა: " + res.status) })();
})
.then(data => {
    console.log("პოსტი წარმატებით განახლდა:", data);
})
.catch(error => {
    console.error("დაფიქსირდა ერორი:", error.message);
});