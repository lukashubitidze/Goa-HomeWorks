// 1. ქოლბექ ფუნქცია
function showCompletion() {
    console.log("Task Completed");
}

// 2. მთავარი ფუნქცია, რომელიც იღებს ქოლბექს
function runTask(callback) {
    // აქ რაღაც პროცესი სრულდება...
    callback(); // გადაცემული ფუნქციის გამოძახება
}

runTask(showCompletion);