export class Game {
    public player: string[] = [];
    public stack: string[] = [];
    public playedCards: string[] = [];
    public currentPlayer: number = 0;

    constructor() {
        for (let i = 1; i < 14; i++) {
            this.stack.push('ace_' + (i + 1));
            this.stack.push('clubs_' + (i + 1));
            this.stack.push('diamonds_' + (i + 1));
            this.stack.push('hearts_' + (i + 1));
        }
        shuffle(this.stack);
    }
}

function shuffle(array: string[]) {
    let currentIndex = array.length;
    while (currentIndex != 0) {
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  }
