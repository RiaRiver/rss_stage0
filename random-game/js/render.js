/* eslint-disable import/extensions */
import { selectors, state } from './globals.js';
import { getDateFormatted } from './utils.js';

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

export const renderAttempt = (info) => {
  const attempts = document.querySelector(selectors.attempts);

  const template = document.createElement('template');
  template.innerHTML = `
<li class="attempt">
  <span class="guess">${info.guess}</span>
  <span class="correct-position">${info.correctPositions}</span>
  <span class="correct-digit">${info.correctDigits}</span>
</li>
      `;

  attempts.appendChild(template.content);
};

export const clearAttempts = () => {
  const attempts = document.querySelector(selectors.attempts);
  attempts.innerHTML = '';
};

export const renderResults = (results) => {
  const resultsBlock = document.querySelector(selectors.resultsBlock);

  const resultsTable = document.createElement('TABLE');
  resultsTable.className = 'results';
  const resultsHead = document.createElement('THEAD');
  const resultsBody = document.createElement('TBODY');
  resultsTable.append(resultsHead, resultsBody);

  const templateHeadTr = document.createElement('template');
  templateHeadTr.innerHTML = `
  <tr>
  <th>#</th>
  <th>Date</th>
  <th>Code</th>
  <th>Attempts</th>
  </tr>
`;

  resultsHead.append(templateHeadTr.content);

  results.forEach((result, ind) => {
    const templateTr = document.createElement('template');
    templateTr.innerHTML = `

    <tr>
        <td>${ind + 1}</td>
        <td>${getDateFormatted(result.date)}</td>
        <td data-color="${result.mode}"><span>${result.code}</span></td>
        <td>${result.attempts}</td>
    </tr>
  `;

    resultsBody.append(templateTr.content);
  });

  resultsBlock.replaceChildren(resultsTable);
};
