async function fetchTopTenCommentEmails() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/comments');
    if (!response.ok) throw new Error('ქსელის შეცდომა');
    
    const comments = await response.json();
    const firstTen = comments.slice(0, 10);
    
    console.log("--- პირველი 10 კომენტარის იმეილი ---");
    firstTen.forEach(comment => console.log(comment.email));
  } catch (error) {
    console.error("შეცდომა კომენტარების წამოღებისას:", error.message);
  }
}

fetchTopTenCommentEmails();