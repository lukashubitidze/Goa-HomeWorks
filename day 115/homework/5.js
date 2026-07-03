async function getTodos() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos');
        const todos = await response.json();
        
        // ვფილტრავთ მხოლოდ დასრულებულებს და ავიღებთ პირველ 10-ს slice-ით
        const completedTodos = todos.filter(todo => todo.completed).slice(0, 10);
        console.log(completedTodos);
    } catch (error) {
        console.error("შეცდომა დავალებების წამოღებისას:", error);
    }
}