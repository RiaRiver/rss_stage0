/* eslint-disable no-console */
/* eslint-disable no-lone-blocks */
// Самооценка
const printSelfcheck = () => {
  const color = 'limegreen';
  const done = `color: ${color};`;
  const textB = 'font: 1.2rem/1 Tahoma;';
  const textM = 'font: 1rem Tahoma;';
  const textS = 'font: 0.8rem Tahoma;';

  (() => {
    console.log('%c Самопроверка: 60/60', `${done}${textB}`);
    console.group('%c ✔ Вёрстка +10', `${done}${textB}`);
    console.log('%c ✔ %c реализован интерфейс игры +5', `${done}${textM}`, textS);
    console.log('%c ✔ %c в футере приложения есть ссылка на гитхаб автора приложения, год создания приложения, логотип курса со ссылкой на курс +5', `${done}${textM}`, textS);
    console.groupEnd();

    console.log('%c ✔ %c Логика игры. Ходы, перемещения фигур, другие действия игрока подчиняются определённым свойственным игре правилам +10', `${done}${textM}`, textS);

    console.log('%c ✔ %c Реализовано завершение игры при достижении игровой цели +10', `${done}${textM}`, textS);

    console.log('%c ✔ %c По окончанию игры выводится её результат, например, количество ходов, время игры, набранные баллы, выигрыш или поражение и т.д +10', `${done}${textM}`, textS);

    console.log('%c ✔ %c Есть таблица результатов, в которой сохраняются результаты 10 игр с наибольшим счетом (лучшим временем и т.п.) или просто 10 последних игр (хранится в local storage) +10', `${done}${textM}`, textS);

    console.log('%c ✔ %c Анимации или звуки, или настройки игры. Баллы начисляются за любой из перечисленных пунктов +10', `${done}${textM}`, textS);

    console.group('%c ✔ %c Очень высокое качество оформления приложения и/или дополнительный не предусмотренный в задании функционал, улучшающий качество приложения +10', `${done}${textM}`, textS);
    console.log('%c высокое качество оформления приложения предполагает собственное оригинальное оформление равное или отличающееся в лучшую сторону по сравнению с демо', textS);
    console.groupEnd();
  })();
};

export default printSelfcheck;
