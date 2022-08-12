// ============================================================
// Взяти файл template_2.html та працювати в ньому
// 1) Напишіть код, який :
//     a) змінює колір тексту елемнту з ід main_header на назву групи в якій ви вчитесь (mon-year)
//     b) робить шириниу елементу ul 400px
//     c) робить шириниу всіх елементів з класом linkList шириною 50%
//     d) отримує текст який зберігається в елементі з класом listElement2
//     e) отримує всі елементи li та змінює ім колір фону на сірий
//     f) отримує всі елементи 'a' та додає їм клас anchor
//     g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
//     h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
//     i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
//     j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
//     k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
//     l) отримати елементи p та змінити їм padding на 20px
//     m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year)
// ============================================================

let h1 = document.getElementById("main_header");

h1.innerText = "DOM JS";
h1.classList.add("h1_color");

let ul = document.getElementsByTagName("ul");
ul[0].classList.add("ul_width");

let linkList = document.getElementsByClassName("linkList");
for (let i of linkList) {
    i.classList.add('link_list');
};

let listElement2 = document.getElementsByClassName("listElement2");
let textListElement2 = 'Hello, i am a new text!!!';
listElement2[0].innerText = textListElement2;


let li = document.getElementsByTagName("li");
for (let i of li) {
    i.classList.add("li_grey");
}

let a = document.getElementsByTagName("a");
for (let i of a) {
    i.classList.add("anchor");
    if (i.innerText === "link3") {
        i.classList.add("a_fontSize")
    }
}
for (let i of a) {
    let info = i.innerText;
    let name = "element_" + info;
    i.classList.add(name)
}

let subHeader = document.getElementsByClassName("sub-header");
let backgoundColor = prompt("Enter background-color for sub-header", "blue");
for (let i of subHeader) {
    i.style.backgroundColor = backgoundColor;
}

let color = prompt("Enter sub-header color ", "red");
for (let i of subHeader) {
    if (i.innerHTML = "content 2 segment") {
        i.style.color = color;
    }
}

let content_1 = document.getElementsByClassName("content_1");
let textContent_1 = prompt("Enter text content", "some text");
content_1[0].innerText = textContent_1;

let p = document.getElementsByTagName("p");
for (let i of p) {
    i.style.padding = "20px"
}

let text2 = document.getElementsByClassName("text2");
text2[0].innerHTML = "Im Denuk68"