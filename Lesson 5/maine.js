// фон для сторінки
let backround_page=prompt('Введіть солір фону для сторінки англійськими літерами');
//тип шрифта на сторінці
let font=prompt('Введіть тип шрифта');

let body = document.getElementsByTagName('body');

body[0].style.backgroundColor = backround_page;
body[0].style.fontFamily = font;

// вирівнювання для заголовка h1
let h1=prompt('Введіть вирівнювання для заголовка');
let h = document.getElementsByTagName('h1');

h[0].style.textAlign=h1;

// фон для параграфа з посиланнями
let p1=prompt('Введіть колір фон для параграфа з посиланнями');
// //  колір тексту у параграфі з посиланнями
let p2=prompt('Введіть колір  для параграфа з посиланнями');
let p = document.getElementsByTagName('p');
p[0].style.color=p2;
p[0].style.backgroundColor=p1;
// //  колір тексту  для посилань
let a=prompt('Введіть колір для  посилань');
let a_all = document.getElementsByTagName('a');
for (const elem of a_all) {
       if(elem.matches('a')){
           elem.style.color = a;
       }
   }
// колір тексту у елементі div
let divColor=prompt('Введіть колір   для списку');
// розмір тексту у елементі div
let divSize=prompt('Введіть розмір тексту  для списку');
// товщинa тексту у елементі div
let divWeight=prompt('Введіть товщинa тексту   для списку');
let div_all = document.getElementsByTagName('div');
div_all[0].style.color =divColor;
div_all[0].style.fontSize =divSize;
div_all[0].style.fontWeight =divWeight;
// тип маркера для маркованого списку на сторінці 
let ul=prompt('Введіть тип маркера для маркованого списку на сторінці');
let ul_all= document.getElementsByTagName('ul');
ul_all[0].style.listStyleType=ul;
// зсилки на улюблені сайти користувача
let site1=prompt('Введіть зсилку на перший ваш улюблений  сайт');
let site2=prompt('Введіть зсилку на другий ваш улюблений сайт');
let site3=prompt('Введіть зсилку на третій ваш улюблений сайт');
let ll = document.getElementsByTagName('a');

ll[0].textContent = site1;
ll[0].href = site1;
ll[1].textContent = site2;
ll[1].href = site2;
ll[2].textContent = site3;
ll[2].href = site3;
ll.target = '_blank';