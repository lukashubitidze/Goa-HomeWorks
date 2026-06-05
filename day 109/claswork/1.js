class WashingMachine {
    // Private მეთოდები
    #addWater() {
        console.log("Adding water...");
    }

    #addSoap() {
        console.log("Adding soap...");
    }

    #spinClothes() {
        console.log("Spinning clothes...");
    }

    // Public მეთოდი
    startWash() {
        this.#addWater();
        this.#addSoap();
        this.#spinClothes();
        console.log("Washing finished");
    }
}

console.log("===== task 1 =====")

// შემოწმება:
const myWasher = new WashingMachine();
myWasher.startWash(); 

console.log("")

// გამოიტანს:
// Adding water...
// Adding soap...
// Spinning clothes...
// Washing finished