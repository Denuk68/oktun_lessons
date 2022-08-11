// //HomeWork
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



// //Classwork


// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів) створити пустий масив, наповнити його 10 об'єктами Client Взяти масив (Client []).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

// let clients = [];

// class Client {
//     constructor(id, name, surname, email, phone, order) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//         this.order = order;

//         clients.push(this);
//     }
// }

// let client = new Client(1, "Yurii", "Biliy", "mail", +3809821221, 1000);
// let client2 = new Client(2, "Yurii", "Biliy", "mail", +3809821221, 200);
// let client3 = new Client(3, "Yurii", "Biliy", "mail", +3809821221, 100);
// let client4 = new Client(4, "Yurii", "Biliy", "mail", +3809821221, 700);
// let client5 = new Client(5, "Yurii", "Biliy", "mail", +3809821221, 400);
// let client6 = new Client(6, "Yurii", "Biliy", "mail", +3809821221, 500);
// let client7 = new Client(7, "Yurii", "Biliy", "mail", +3809821221, 150);

// let sortClients = clients.sort((a, b) => {
//     return a.order - b.order
// })
// for (let i of sortClients) {
//     document.write(" id:" + i.id + " order:" + i.order + "</br>")
// }


// ==============================================
// 	- Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// ==============================================


// function Car(model, maker, year, maxSpeed, engine) {
//     this.model = model;
//     this.maker = maker;
//     this.year = year;
//     this.maxSpeed = maxSpeed;
//     this.engine = engine;

//     this.drive = function () { console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`) };

//     this.info = function () { console.log(`Виробник: ${this.maker}, модель: ${this.model}, рік випсуку:  ${this.year}, максимальна швидкість: ${this.maxSpeed}, об'єм: ${this.engine} `) };

//     this.increaseMaxSpeed = function (newSpeed) {
//         this.maxSpeed += newSpeed;
//         console.log(`Нова максимальна швидкість: ${this.maxSpeed}`);
//     };

//     this.changeYear = function (newYear) {
//         this.year = newYear;
//         console.log(`Новий рік випсуку:  ${this.year},`)
//     };

//     this.addDriver = function (driver) {
//         this.driver = driver;
//         console.log(this)
//     }

// };

// let car1 = new Car("Model X", "Tesla", 2015, 250, 2.0);
// car1.drive();
// car1.info();
// car1.increaseMaxSpeed(20);
// car1.changeYear(2020);
// car1.addDriver({ name: "Den", age: 24 })