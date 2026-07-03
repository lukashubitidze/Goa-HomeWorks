async function fetchUsersEmails() {
    const url = "https://fakestoreapi.com/users";

    try {
        // 1. ვუგზავნით მოთხოვნას API-ს და ველოდებით პასუხს
        const response = await fetch(url);

        // ვამოწმებთ, წარმატებით დასრულდა თუ არა მოთხოვნა
        if (!response.ok) {
            throw new Error(`Error! Status: ${response.status}`);
        }

        // 2. პასუხს ვთარგმნით JSON ფორმატში
        const users = await response.json();

        // 3. ციკლის დახმარებით გამოგვაქვს თითოეული მომხმარებლის email
        users.forEach(user => {
            console.log(user.email);
        });

    } catch (error) {
        // ერორის შემთხვევაში აპლიკაცია არ ქრაშდება, შეცდომას აქ დავიჭერთ
        console.error("მონაცემების წამოღებისას დაფიქსირდა შეცდომა:", error.message);
    }
}

// ფუნქციის გამოძახება
fetchUsersEmails();