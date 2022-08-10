// HomeWork
//  створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.


// let createRandomNumber = () => {
//     let arr = [];
//     let numb;
//     for (let i = 0; i < 10; i++) {
//         numb = Math.round(Math.random() * 100);
//         arr.push(numb);
//     }
//     return arr;
// }
// let res = createRandomNumber();
// console.log(res);


// Змінти попередню функцію, щоб діапазон можна було визначити через аргументи.

// let createRandomNumber = (min,max) => {
//     let arr = [];
//     let numb;
//     for (let i = 0; i < 10; i++) {
//         numb = Math.round(Math.random() * (max - min) + min);
//         arr.push(numb);
//     }
//     return arr;
// }
// let res = createRandomNumber(20, 50);
// console.log(res);


// створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort

// let createRandomNumber = () => {
//     let arr = [];
//     let numb;
//     for (let i = 0; i < 10; i++) {
//         numb = Math.round(Math.random() * 100);
//         arr.push(numb);
//     }
//     return arr;
// }
// let res = createRandomNumber();
// console.log(res);
// let sort = res.sort(function (current, next) {
//     return current - next;
// });
// console.log(sort);

// створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, за лишивши тільки парні числа

// let createRandomNumber = () => {
//     let arr = [];
//     let numb;
//     for (let i = 0; i < 10; i++) {
//         numb = Math.round(Math.random() * 100);
//         arr.push(numb);
//     }
//     return arr;
// }
// let res = createRandomNumber();
// console.log(res);

// let filter = res.filter(function (item) {
//     return item % 2 === 0;
// });
// console.log(filter);

// - створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.

// let createRandomNumber = () => {
//     let arr = [];
//     let numb;
//     for (let i = 0; i < 10; i++) {
//         numb = Math.round(Math.random() * 100);
//         arr.push(numb);
//     }
//     return arr;
// }
// let res = createRandomNumber();
// console.log(res);

// let map = res.map(function (item) {
//     return item + "";
// })
// console.log(map);

// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone створити пустий масив, наповнити його 10 об'єктами new User(....) Взяти масив цей  User[] та: Відфільтрувати , залишивши тільки об'єкти з парними id (filter) та Відсортувати його по id. по зростанню (sort)
// let users = [];
// function User(id, name, surname, email, phone) {
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;

//     users.push(this);
// }

// let user1 = new User(8, 'den', "name", "den@gmail.com", "+38096000000");
// let user2 = new User(4, 'sasha', "name", "@gmail.com", "+38096000000");
// let user3 = new User(5, 'vlad', "name", "@gmail.com", "+38096000000");
// let user4 = new User(6, 'stas', "name", "@gmail.com", "+38096000000");
// let user5 = new User(7, 'andriy', "name", "@gmail.com", "+38096000000");
// let user6 = new User(1, 'valik', "name", "@gmail.com", "+38096000000");
// let user7 = new User(2, 'sharik', "name", "@gmail.com", "+38096000000");
// let user8 = new User(9, 'yarik', "name", "@gmail.com", "+38096000000");
// let user9 = new User(10, 'yurii', "name", "@gmail.com", "+38096000000");
// let user10 = new User(3, 'artem', "name", "@gmail.com", "+38096000000");

// // let filter = users.filter((item) => item.id % 2 === 0); Коли немає тіла функції, (тобто 1 строка, то можна писати без return та квадратних скобок)
// let filter = users.filter((item) => {  // <---- стрелочна ф-ція
//     return item.id % 2 === 0
// });


// let sort = filter.sort(function (a, b) {
//     return a.id - b.id
// })

// console.log(sort)