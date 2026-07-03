async function fetchPostOne() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    if (!response.ok) throw new Error('ქსელის შეცდომა');
    
    const post = await response.json();
    
    console.log("--- პოსტის (ID: 1) მონაცემები ---");
    console.log(`სათაური: ${post.title}`);
    console.log(`ტექსტი: ${post.body}`);
  } catch (error) {
    console.error("შეცდომა პოსტის წამოღებისას:", error.message);
  }
}

fetchPostOne();