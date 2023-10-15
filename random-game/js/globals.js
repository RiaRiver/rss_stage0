export const state = {
  gameMode: 'medium',
  gameModes: {
    easy: 3,
    medium: 4,
    hard: 6,
  },
};

export const selectors = {
  difficultyBtns: '.difficulty__level',
  inputsBlock: '.inputs',
  indicators: '.game__indicators',
  game: '.game',
  controlBtn: '.game__input-btn',
  field: '.game__field',
  error: '.game__error',
  attempts: '.attempts__list',
  modalText: '.modal__text',
  resultsBtn: '.results-btn',
  modalResults: '.modal-results',
  resultsBlock: '.modal-results__container',
  modalClose: '[data-close]',
  modalInfo: '.modal-info',
  infoBtn: '.info-btn',
};

export const msgs = {
  getWinMsg: (attemptsCount) => `You guessed right code in ${attemptsCount} attempts`,
  duplicateDigitsMsg: 'Duplicated digits!',
  duplicateAttemptMsg: 'Duplicated guess!',
  lackDigits: 'Lack of digits!',
};
