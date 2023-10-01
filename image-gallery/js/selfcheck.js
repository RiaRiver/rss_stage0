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
    console.log('%c ✔ %c на странице есть несколько фото и строка поиска +5', `${done}${textM}`, textS);
    console.log('%c ✔ %c в футере приложения есть ссылка на гитхаб автора приложения, год создания приложения, логотип курса со ссылкой на курс +5', `${done}${textM}`, textS);
    console.groupEnd();

    console.log('%c ✔ %c При загрузке приложения на странице отображаются полученные от API изображения +10', `${done}${textM}`, textS);

    console.log('%c ✔ %c Если в поле поиска ввести слово и отправить поисковый запрос, на странице отобразятся изображения соответствующей тематики, если такие данные предоставляет API +10', `${done}${textM}`, textS);

    console.group('%c ✔ Поиск +30', `${done}${textB}`);
    console.log('%c ✔ %c при открытии приложения курсор находится в поле ввода +5', `${done}${textM}`, textS);
    console.log('%c ✔ %c есть placeholder +5', `${done}${textM}`, textS);
    console.log('%c ✔ %c автозаполнение поля ввода отключено (нет выпадающего списка с предыдущими запросами) +5', `${done}${textM}`, textS);
    console.log('%c ✔ %c поисковый запрос можно отправить нажатием клавиши Enter +5', `${done}${textM}`, textS);
    console.log('%c ✔ %c после отправки поискового запроса и отображения результатов поиска, поисковый запрос продолжает отображаться в поле ввода +5', `${done}${textM}`, textS);
    console.log('%c ✔ %c в поле ввода есть крестик при клике по которому поисковый запрос из поля ввода удаляется и отображается placeholder +5', `${done}${textM}`, textS);
    console.groupEnd();

    console.group('%c ✔ %c Очень высокое качество оформления приложения и/или дополнительный не предусмотренный в задании функционал, улучшающий качество приложения +10', `${done}${textM}`, textS);
    console.log('%c высокое качество оформления приложения предполагает собственное оригинальное оформление равное или отличающееся в лучшую сторону по сравнению с демо', textS);
    console.groupEnd();
  })();
};

export default printSelfcheck;
