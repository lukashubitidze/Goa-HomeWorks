async function getPosts() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const posts = await response.json();
        
        const evenIdPosts = posts.filter(post => post.id % 2 === 0);
        console.log(evenIdPosts);
    } catch (error) {
        console.error("შეცდომა პოსტების წამოღებისას:", error);
    }
}

getPosts();