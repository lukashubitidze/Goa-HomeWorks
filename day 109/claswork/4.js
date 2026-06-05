class InstagramAccount {
    // Private მეთოდები
    #checkInternet() {
        console.log("Checking internet connection...");
    }

    #uploadPhoto() {
        console.log("Uploading photo to server...");
    }

    #writeCaption() {
        console.log("Adding caption and hashtags...");
    }

    // Public მეთოდი
    createPost() {
        this.#checkInternet();
        this.#uploadPhoto();
        this.#writeCaption();
        console.log("Post uploaded successfully");
    }
}


console.log("===== task 4 =====")

// შემოწმება:
const myAccount = new InstagramAccount();
myAccount.createPost();

console.log("")

// გამოიტანს:
// Checking internet connection...
// Uploading photo to server...
// Adding caption and hashtags...
// Post uploaded successfully