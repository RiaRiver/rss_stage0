let color = "limegreen";
const done = `color: ${color};`;
const textB = `font: 1.2rem/1 Tahoma;`;
const textM = `font: 1rem Tahoma;`;
const textS = `font: 0.8rem Tahoma;`;

console.log(`%c Самопроверка 100/100`, `${done}${textB}`);
console.log(`%c ✔ Вёрстка валидная +10`, `${done}${textB}`);

console.groupCollapsed(`%c ✔ Вёрстка семантическая +16`, `${done}${textB}`);
{
    console.log(`%c В коде страницы присутствуют следующие элементы (указано минимальное количество, %c может быть больше):`, textS, `${done}${textS}`);
    console.log(`%c ✔ %c <header>, <main>, <footer> +2.`, `${done}${textM}`, textS);
    console.log(`%c ✔ %c шесть элементов <section> (по количеству секций) +2.`, `${done}${textM}`, textS);
    console.log(`%c ✔ %c только один заголовок <h1> +2.`, `${done}${textM}`, textS);
    console.log(`%c ✔ %c пять заголовков <h2> +2.`, `${done}${textM}`, textS);
    console.log(`%c ✔ %c один элемент <nav> (панель навигации в хедере) +2.`, `${done}${textM}`, textS);
    console.log(`%c ✔ %c два списка ul > li > a (панель навигации, ссылки на соцсети в футере) +2.`, `${done}${textM}`, textS);
    console.log(`%c ✔ %c семь кнопок <button> +2.`, `${done}${textM}`, textS);
    console.log(`%c ✔ %c два инпута <input> +2.`, `${done}${textM}`, textS);
}
console.groupEnd();

console.groupCollapsed(`%c ✔ Вёрстка соответствует макету +54`, `${done}${textB}`);
{
    console.log(`%c За нарушения в пунктах, которые можно проверить, снимаем по 2 балла помимо других явных ошибок, но %c не больше общего количества баллов за блок:`, textS, `${done}${textS}`);

    console.groupCollapsed(`%c ✔ блок <header> +8:`, `${done}${textM}`);
    {
        console.log(`%c ✔ %c Стараемся, чтобы текст совпадал с макетом. Если есть небольшие отклонения, то главное для нас, чтобы расстояние между элементами меню было одинаковое, 30px.`, `${done}${textM}`, textS);
        console.log(`%c ✔ %c Элементы меню работают как якоря. При нажатии на один из них нас перебросит наверх соответствующего раздела.`, `${done}${textM}`, textS);
        console.log(`%c ✔ %c Сами элементы меню при наведении (эффект hover) должны быть интерактивными. Обязательно курсор должен поменяться на cursor: pointer)`, `${done}${textM}`, textS);
        console.log(`%c ✔ %c Расстояние от самого меню до иконки пользователя - 40px. Иконка является отдельным элементом, и не входит в <nav>.`, `${done}${textM}`, textS);
        console.log(`%c ✔ %c Текст "Brooklyn Public Library" находится в <h1>.`, `${done}${textM}`, textS);
    }
    console.groupEnd();

    console.log(`%c ✔ секция Welcome +4.`, `${done}${textM}`);

    console.groupCollapsed(`%c ✔ секция About +6:`, `${done}${textM}`);
    {
        console.log(`%c ✔ %c Добавьте все картинки, которые будут использованы в папку с картинками. Даже если отображается всего 3, в папке должны быть все 5.`, `${done}${textM}`, textS);
        console.log(`%c ✔ %c Расстояния между кнопками пагинации 10px.`, `${done}${textM}`, textS);
        console.log(`%c ✔ %c Интерактивная область (область нажатия, выделяемая cursor:pointer) должна быть размером +5px в каждую сторону.`, `${done}${textM}`, textS);
    }
    console.groupEnd();

    console.groupCollapsed(`%c ✔ секция Favorites +8:`, `${done}${textM}`);
    {
        console.log(`%c ✔ %c Интерактивные кнопки должны иметь структуру input type="radio" + label.`, `${done}${textM}`, textS);
        console.log(`%c ✔ %c Добавьте небольшую область вокруг кнопки и надписи (например, 5px как в примере секции about).`, `${done}${textM}`, textS);
        console.log(`%c ✔ %c Картинок и описаний - много, для 4х секций. Их стоит добавить в проект. А лучше сразу на страницу, и скрыть с помощью CSS свойств, например display: none;.`, `${done}${textM}`, textS);
        console.log(`%c ✔ %c Кнопки "buy" должны быть интерактивными, плавно менять свой цвет при наведении на них, как указано в макете styleguides.`, `${done}${textM}`, textS);
        console.log(`%c ✔ %c Кнопка "own" не должна быть интерактивной, не должна нажиматься. И на ней должен присутствовать атрибут disabled.`, `${done}${textM}`, textS);
    }
    console.groupEnd();

    console.log(`%c ✔ секция CoffeeShop +6.`, `${done}${textM}`);

    console.groupCollapsed(`%c ✔ секция Contacts +6:`, `${done}${textM}`);
    {
        console.log(`%c ✔ %c Карту можно вставить просто картинкой. Добавлять ее отдельным сервисом не обязательно.`, `${done}${textM}`, textS);
        console.log(`%c ✔ %c Везде, где в тексте встречаются цифры в виде телефонного номера, это должны быть ссылки с типом "tel" и номером.`, `${done}${textM}`, textS);
        console.log(`%c ✔ %c Там, где в тексте встречается текст с именем контактного лица, это должна быть ссылка с типом "mailto" и адресом почты.`, `${done}${textM}`, textS);
    }
    console.groupEnd();

    console.groupCollapsed(`%c ✔ секция LibraryCard +8:`, `${done}${textM}`);
    {
        console.log(`%c ✔ %c "Find your Library card" - это должна быть форма с полями input.`, `${done}${textM}`, textS);
        console.log(`%c ✔ %c Желательно сделать ограничения в полях input на использование только букв и цифр, а также дефиса. Но это правило проверять не нужно.`, `${done}${textM}`, textS);
        console.log(`%c ✔ %c Все 3 кнопки должны быть интерактивными, плавно менять свой цвет при наведении на них, как указано в макете styleguides.`, `${done}${textM}`, textS);
        console.log(`%c ✔ %c Хоть иконки из модального окна (Visits, Bonuses, Books) сейчас не нужны будут, можно их добавить в соответствующую папку проекта.`, `${done}${textM}`, textS);
    }
    console.groupEnd();

    console.groupCollapsed(`%c ✔ блок <footer> +8:`, `${done}${textM}`);
    {
        console.log(`%c ✔ %c Адрес библиотеки должен быть ссылкой (место на карте, например).`, `${done}${textM}`, textS);
        console.log(`%c ✔ %c Иконки соцсетей также должны быть ссылками.`, `${done}${textM}`, textS);
        console.log(`%c ✔ %c Вместо Username должно быть ваше имя, как оно пишется на английском языке и ссылка на GitHub.`, `${done}${textM}`, textS);
    }
    console.groupEnd();
}
console.groupEnd();

console.groupCollapsed(`%c ✔ Общие требования к верстке +20`, `${done}${textB}`);
{
    console.log(`%c ✔ %c для построения сетки используются флексы или гриды (display: flex... или display: grid...) +2.`, `${done}${textM}`, textS);
    console.log(`%c ✔ %c при уменьшении масштаба страницы браузера вся вёрстка (контент и фоны) размещается по центру, а не сдвигается в сторону +2. Фон за рамками страницы может быть черным, белым или любого оттенка серого.`, `${done}${textM}`, textS);
    console.log(`%c ✔ %c иконки добавлены в формате .svg. SVG может быть добавлен любым способом. Обращаем внимание на формат, а не на способ добавления +2.`, `${done}${textM}`, textS);
    console.log(`%c ✔ %c изображения добавлены в формате .jpg (.jpeg) или .png +2.`, `${done}${textM}`, textS);
    console.log(`%c ✔ %c есть favicon +2. Иконка должна содержать 3 буквы "BPL" (Brooklyn Public Library)`, `${done}${textM}`, textS);
    console.log(`%c ✔ %c плавная прокрутка по якорям +2.`, `${done}${textM}`, textS);
    console.log(`%c ✔ %c в футере название ссылки Username заменено и ведет на GitHub студента +2.`, `${done}${textM}`, textS);
    console.log(`%c ✔ %c в футере ссылка The Rolling Scopes School ведет на страницу курса https://rs.school/js-stage0/ +2.`, `${done}${textM}`, textS);
    console.log(`%c ✔ %c интерактивность элементов согласно макету. Интерактивность включает в себя не только изменение внешнего вида курсора при помощи свойства cursor: pointer, но и другие визуальные эффекты, например, изменение цвета фона или цвета шрифта. Если в макете указаны стили при наведении и клике, для элемента указываем эти стили. Если в макете стили не указаны, реализуете их по своему усмотрению, руководствуясь общим стилем макета +2.`, `${done}${textM}`, textS);
    console.log(`%c ✔ %c обязательное требование к интерактивности: плавное изменение внешнего вида элемента при наведении и клике не влияет на соседние элементы +2.`, `${done}${textM}`, textS);
}
console.groupEnd();
















