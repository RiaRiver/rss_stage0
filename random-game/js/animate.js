/* eslint-disable no-param-reassign */
/* eslint-disable import/extensions */
import { selectors } from './globals.js';

/* eslint-disable import/prefer-default-export */
export const animateIndicator = (info) => {
  const indicatorsBlock = document.querySelector(selectors.indicators);
  const indicators = indicatorsBlock.children;

  [...indicators].forEach((indicator, ind) => {
    let type;

    switch (true) {
      case ind < info.correctPositions: {
        type = 'position';
        break;
      }

      case ind < info.correctPositions + info.correctDigits: {
        type = 'digit';
        break;
      }

      default: type = 'none';
    }

    indicator.dataset.type = type;
  });

  indicatorsBlock.dataset.animated = true;
};

export const resetIndicator = () => {
  const indicatorsBlock = document.querySelector(selectors.indicators);
  const indicators = indicatorsBlock.children;

  delete indicatorsBlock.dataset.animated;

  [...indicators].forEach((indicator) => {
    delete indicator.dataset.type;
  });
};
