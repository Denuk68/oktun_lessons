// Homework


// ===============================================
// - Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :
//     -- отримує текст з параграфа з id "content"
//     -- отримує текст з блоку з id "rules"
//     -- замініть текст параграфа з id 'content' на будь-який інший
//     -- замініть текст параграфа з id 'rules' на будь-який інший
//     -- змініть кожному елементу колір фону на червоний
//     -- змініть кожному елементу колір тексту на синій
//     -- отримати весь список класів елемента з id=rules і вивести їх в console.log
//     -- отримати всі елементи з класом fc_rules. визначити їм 2 події "клік", одна вивдоить текст елементу, інша довільний ьексь
//     -- поміняти колір тексту у всіх елементів fc_rules на зелений
// ===============================================

// let content = document.getElementById("content");
// console.log(content.innerText);

// let rules = document.getElementById("rules");
// console.log(rules.innerText);

// content.innerText = "Новий текст content";
// rules.innerText = "Новий текст rules";

// content.classList.add("red", "blue");
// rules.classList.add("red", "blue");

// console.log(rules.classList);

// let fc_rules = document.getElementsByClassName("fc_rules");
// console.log(fc_rules);

// for (let i of fc_rules) {
//     i.addEventListener("click", function () {
//         i.classList.add("red", "blue");
//     })
// };

// let div = document.createElement("div");
// let ul = document.getElementsByTagName('ul');
// let ul_0 = ul[0];

// ul_0.after(div)
// for (let i of fc_rules) {
//     i.addEventListener("click", function () {
//         let p = document.createElement("p");
//         div.appendChild(p);
//         p.innerText = i.innerText;
//         p.classList.add("blue");
//     });
// };

// for (let i of fc_rules) {
//     i.classList.add("green");
// };
