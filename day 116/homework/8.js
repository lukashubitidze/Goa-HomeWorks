async function fetchAllUsers() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    if (!response.ok) throw new Error('ქსელის შეცდომა');
    
    const users = await response.json();
    
    console.log("--- ყველა მომხმარებლის სახელი ---");
    users.forEach(user => console.log(user.name));
  } catch (error) {
    console.error("შეცდომა მომხმარებლების წამოღებისას:", error.message);
  }
}

fetchAllUsers();