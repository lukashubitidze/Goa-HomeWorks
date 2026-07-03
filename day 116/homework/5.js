async function fetchUserOne() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
    if (!response.ok) throw new Error('ქსელის შეცდომა');
    
    const user = await response.json();
    
    console.log("--- მომხმარებლის (ID: 1) მონაცემები ---");
    console.log(`სახელი: ${user.name}`);
    console.log(`Username: ${user.username}`);
    console.log(`Email: ${user.email}`);
  } catch (error) {
    console.error("შეცდომა მომხმარებლის წამოღებისას:", error.message);
  }
}

fetchUserOne();