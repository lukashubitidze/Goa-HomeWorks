console.log("პოსტის წაშლა...");

const deletePostErrors = {
    401: "შეცდომა 401: წაშლის უფლება არ გაქვს.",
    404: "შეცდომა 404: წასაშლელი პოსტი ვერ მოიძებნა.",
    500: "შეცდომა 500: სერვერის ხარვეზი."
};

fetch("https://jsonplaceholder.typicode.com/posts/1", {
    method: "DELETE"
})
.then(res => {
    console.log("რესპონსი მოვიდა");
    console.log("სტატუს კოდია:", res.status); // წარმატებისას: 200

    // თუ წაშლა წარმატებულია, უბრუნებს "Post deleted" ტექსტს, თუ არა - ისვრის შეცდომას
    return res.status === 200 
        ? "Post deleted" 
        : (() => { throw new Error(deletePostErrors[res.status] || "შეცდომა: " + res.status) })();
})
.then(message => {
    console.log(message); // კონსოლში გამოჩნდება: "Post deleted"
})
.catch(error => {
    console.error("დაფიქსირდა ერორი:", error.message);
});