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
};
