async function getUsers() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const users = await response.json();
        
        const filteredUsers = users.filter(user => user.username.startsWith('C'));
        console.log(filteredUsers);
    } catch (error) {
        console.error("შეცდომა მომხმარებლების წამოღებისას:", error);
    }
}

getUsers();