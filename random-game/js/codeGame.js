// eslint-disable-next-line import/extensions
import { getRandomInt } from './utils.js';

class CodeGame {
  constructor(digitsNumber) {
    this.code = '';
    this.digitsNumber = +digitsNumber || 4;
    this.attempts = [];
    this.base = 10;

    this.setValidChars();
  }

  setValidChars() {
    this.validChars = '';
    for (let i = 0; i < this.base; i += 1) {
      this.validChars += i;
    }
  }

  generateCode() {
    while (this.code.length < this.digitsNumber) {
      const digit = getRandomInt(this.base - 1).toString(this.base);

      if (!this.code.includes(digit)) this.code += digit;
    }
  }

  isDuplicatedGuess(guess) {
    return !!this.attempts.find((attempt) => attempt.guess === guess);
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
    this.attempts.push(info);

    const isCorrect = correctPositions === this.digitsNumber;
    return { isCorrect, info };
  }

  getAttemptsCount() {
    return this.attempts.length;
  }
}

export default CodeGame;
