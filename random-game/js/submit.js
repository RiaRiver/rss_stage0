/* eslint-disable import/extensions */
import { viewError } from './error.js';
import { msgs, selectors, state } from './globals.js';
import { renderAttempt } from './render.js';
import { getFormData, hasDuplicateChars } from './utils.js';

const handleWin = () => {
  const winModal = window['modal-win'];
  const winText = winModal.querySelector(selectors.modalText);
  const attemptsCount = state.game.getAttemptsCount();
  winText.textContent = msgs.getWinMsg(attemptsCount);
  window['modal-win'].showModal();
};

const handleSubmit = (event) => {
  event.preventDefault();
  const form = event.target;
  const guess = getFormData(form, 'field').join('').trim();
  if (guess.length < state.game.digitsNumber) { viewError(msgs.lackDigits); return; }
  if (hasDuplicateChars(guess)) { viewError(msgs.duplicateDigitsMsg); return; }
  if (state.game.isDuplicatedGuess(guess)) { viewError(msgs.duplicateAttemptMsg); return; }

  const checkResult = state.game.guessCheck(guess);
  renderAttempt(checkResult.info);
  if (checkResult.isCorrect) handleWin();
};

export default handleSubmit;
