async function getComments() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/comments');
        const comments = await response.json();
        
        const first15Comments = comments.slice(0, 15);
        first15Comments.forEach(comment => {
            console.log(comment.name);
        });
    } catch (error) {
        console.error("შეცდომა კომენტარების წამოღებისას:", error);
    }
}

getComments();