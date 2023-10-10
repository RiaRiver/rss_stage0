// eslint-disable-next-line import/extensions
import { getRandomInt } from './utils.js';

class CodeGame {
  constructor(digitsNumber) {
    this.code = '';
    this.digitsNumber = digitsNumber || 4;
    this.guesses = [];
    this.attempts = 0;
    this.base = 10;
  }

  generateCode() {
    while (this.code.length < this.digitsNumber) {
      const digit = getRandomInt(this.base - 1).toString(this.base);

      if (!this.code.includes(digit)) this.code += digit;
    }
  }

  guessCheck(guess) {
    let correctPositions = 0;
    let correctDigits = 0;

    [...guess].forEach((digit, ind) => {
      if (digit === this.code[ind]) {
        correctPositions += 1;
        return;
      }

      if (this.code.includes(digit)) {
        correctDigits += 1;
      }
    });

    const info = { guess, correctPositions, correctDigits };
    this.guesses.push(info);

    const isCorrect = correctPositions === this.digitsNumber;
    return { isCorrect, info };
  }
}

export default CodeGame;
