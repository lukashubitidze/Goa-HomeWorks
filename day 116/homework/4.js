async function fetchFirstTenTodos() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    if (!response.ok) throw new Error('ქსელის შეცდომა');
    
    const todos = await response.json();
    const firstTen = todos.slice(0, 10);
    
    console.log("--- პირველი 10 Todo ---");
    console.log(firstTen);
  } catch (error) {
    console.error("შეცდომა Todo-ების წამოღებისას:", error.message);
  }
}

fetchFirstTenTodos();