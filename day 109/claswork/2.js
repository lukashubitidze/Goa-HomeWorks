class Computer {
    // Private მეთოდები
    #checkProcessor() {
        console.log("Checking processor...");
    }

    #checkRAM() {
        console.log("Checking RAM...");
    }

    #loadOS() {
        console.log("Loading operating system...");
    }

    // Public მეთოდი
    startComputer() {
        this.#checkProcessor();
        this.#checkRAM();
        this.#loadOS();
        console.log("Computer started");
    }
}


console.log("===== task 2 =====")

// შემოწმება:
const myPC = new Computer();
myPC.startComputer();

console.log("")

// გამოიტანს:
// Checking processor...
// Checking RAM...
// Loading operating system...
// Computer started