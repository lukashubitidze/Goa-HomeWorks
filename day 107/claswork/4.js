class GameAccount {
  #level;

  constructor(level = 1) {
    this.#level = level;
  }

  levelUp() {
    this.#level++;
  }

  showLevel() {
    return this.#level;
  }
}

// მაგალითი
const game = new GameAccount();

game.levelUp();
game.levelUp();


console.log("===== 4 task =====")

console.log(game.showLevel());

console.log("")