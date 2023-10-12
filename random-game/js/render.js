/* eslint-disable import/extensions */
import { selectors, state } from './globals.js';

export const renderFields = () => {
  const inputsBlock = document.querySelector(selectors.inputsBlock);
  const indicatorsBlock = document.querySelector(selectors.indicators);
  const inputs = [];
  const indicators = [];
  const numberOfElements = state.gameModes[state.gameMode];

  inputsBlock.dataset.mode = state.gameMode;

  for (let i = 0; i < numberOfElements; i += 1) {
    const templateInput = document.createElement('template');
    templateInput.innerHTML = `
  <input type="text" name="field" class="game__field" readonly>
  `;

    inputs.push(templateInput.content);

    const templateIndicator = document.createElement('template');
    templateIndicator.innerHTML = `
  <li class="game__indicator"></li>
  `;

    indicators.push(templateIndicator.content);
  }

  inputsBlock.replaceChildren(...inputs);
  indicatorsBlock.replaceChildren(...indicators);
};
