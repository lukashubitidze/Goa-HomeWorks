async function fetchUsers() {
    try {
        console.log("მონაცემების წამოღება დაიწყო...");
        let response = await fetch("https://jsonplaceholder.typicode.com/users");
        
        // ვამოწმებთ, წარმატებით დასრულდა თუ არა მოთხოვნა
        if (!response.ok) {
            throw new Error(`სერვერის შეცდომა: ${response.status}`);
        }
        
        let users = await response.json();
        console.log("მონაცემები წარმატებით წამოვიდა! მომხმარებლების რაოდენობა:", users.length);
        console.log("პირველი მომხმარებელი:", users[0].name);
    } catch (error) {
        console.log("მონაცემების წამოღებისას დაფიქსირდა შეცდომა:", error.message);
    }
}

// ასინქრონული ფუნქციის გამოძახება
fetchUsers();