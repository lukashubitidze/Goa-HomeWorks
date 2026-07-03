async function fetchTopFivePosts() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    if (!response.ok) throw new Error('ქსელის შეცდომა');
    
    const posts = await response.json();
    const firstFive = posts.slice(0, 5);
    
    console.log("--- პირველი 5 პოსტის სათაური ---");
    firstFive.forEach(post => console.log(post.title));
  } catch (error) {
    console.error("შეცდომა პოსტების წამოღებისას:", error.message);
  }
}

fetchTopFivePosts();