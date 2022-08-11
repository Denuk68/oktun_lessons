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


// ==============================================
// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone створити пустий масив, наповнити його 10 об'єктами new User(....) Взяти масив цей  User[] та: Відфільтрувати , залишивши тільки об'єкти з парними id (filter) та Відсортувати його по id. по зростанню (sort)
// ==============================================

// let users = [];

// function User(id, name, surname, email, phone) {
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;

//     users.push(this);
// }

// let arr = [
//     new User(8, 'den', "name", "den@gmail.com", "+38096000000"),
//     new User(4, 'sasha', "name", "@gmail.com", "+38096000000"),
//     new User(5, 'vlad', "name", "@gmail.com", "+38096000000"),
//     new User(6, 'stas', "name", "@gmail.com", "+38096000000"),
//     new User(7, 'andriy', "name", "@gmail.com", "+38096000000"),
//     new User(1, 'valik', "name", "@gmail.com", "+38096000000"),
//     new User(2, 'sharik', "name", "@gmail.com", "+38096000000"),
//     new User(9, 'yarik', "name", "@gmail.com", "+38096000000"),
//     new User(10, 'yurii', "name", "@gmail.com", "+38096000000"),
//     new User(3, 'artem', "name", "@gmail.com", "+38096000000"),
// ];

// // let filter = users.filter((item) => item.id % 2 === 0); Коли немає тіла функції, (тобто 1 строка, то можна писати без return та квадратних скобок)

// let filter = users.filter((item) => {  // <---- стрелочна ф-ція
//     return item.id % 2 === 0
// });


// let sort = filter.sort(function (a, b) {
//     return a.id - b.id
// })

// console.log(sort)



// //Classwork


// ==============================================
// - Cтворити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів) створити пустий масив, наповнити його 10 об'єктами Client Взяти масив (Client []).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
// ==============================================

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
// let arr = [
//     new Client(1, "Yurii", "Biliy", "mail", +3809821221, 1000),
//     new Client(2, "Yurii", "Biliy", "mail", +3809821221, 200),
//     new Client(3, "Yurii", "Biliy", "mail", +3809821221, 100),
//     new Client(4, "Yurii", "Biliy", "mail", +3809821221, 7),
//     new Client(5, "Yurii", "Biliy", "mail", +3809821221, 400),
//     new Client(6, "Yurii", "Biliy", "mail", +3809821221, 500),
//     new Client(7, "Yurii", "Biliy", "mail", +3809821221, 150),
// ];

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



// ==============================================
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
//     -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
//     -- info () - яка виводить всю інформацію про автомобіль
//     -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     -- changeYear (newValue) - змінює рік випуску на значення newValue
//     -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// ==============================================

// class Car {
//     constructor(model, maker, year, maxSpeed, engine) {
//         this.model = model;
//         this.maker = maker;
//         this.year = year;
//         this.maxSpeed = maxSpeed;
//         this.engine = engine;

//         this.drive = function () {
//             console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
//         };

//         this.info = function () {
//             return console.log(`Виробник: ${this.maker}, модель: ${this.model}, рік випсуку:  ${this.year}, максимальна швидкість: ${this.maxSpeed}, об'єм: ${this.engine} `);
//         };

//         this.increaseMaxSpeed = function (newSpeed) {
//             this.maxSpeed += newSpeed;
//             console.log(`Нова максимальна швидкість: ${this.maxSpeed}`);
//         };

//         this.changeYear = function (newYear) {
//             this.year = newYear;
//             console.log(`Новий рік випсуку:  ${this.year},`)
//         };

//         this.addDriver = function (driver) {
//             this.driver = driver;
//             console.log(this)
//         }
//     }

// };

// let car1 = new Car("Model X", "Tesla", 2015, 250, 2.0);
// car1.drive();
// car1.info();
// car1.increaseMaxSpeed(100);
// car1.changeYear(2018);
// car1.addDriver({ name: "Den", age: 24 });



// ==============================================
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити 10 попелюшок , покласти їх в масив.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// За допомоги циклу знайти яка попелюшка повинна бути з принцом.
// Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
// ==============================================

// let popelushki = [];
// function Popelushka(name, age, footSize) {
//     this.name = name;
//     this.age = age;
//     this.footSize = footSize;

//     popelushki.push(this);
// };

// let prince = [];
// function Prince(name, age, footSize) {
//     this.name = name;
//     this.age = age;
//     this.footSize = footSize;

//     prince.push(this);
// };

// let dataPopelushki = [
//     new Popelushka('Popelushka1', 21, 10),
//     new Popelushka('Popelushka2', 22, 3),
//     new Popelushka('Popelushka3', 23, 2),
//     new Popelushka('Popelushka4', 24, 1),
//     new Popelushka('Popelushka5', 25, 4),
//     new Popelushka('Popelushka6', 26, 5),
//     new Popelushka('Popelushka7', 27, 6),
//     new Popelushka('Popelushka8', 28, 7),
//     new Popelushka('Popelushka9', 29, 8),
//     new Popelushka('Popelushka10', 30, 9)
// ];
// let dataPrince = [
//     new Prince('Prince1', 25, 1),
//     new Prince('Prince2', 24, 2),
//     new Prince('Prince3', 23, 3),
//     new Prince('Prince4', 24, 4),
//     new Prince('Prince5', 25, 5),
//     new Prince('Prince6', 26, 6),
//     new Prince('Prince7', 27, 7),
//     new Prince('Prince8', 28, 8),
//     new Prince('Prince9', 29, 9),
//     new Prince('Prince10', 30, 10)
// ];

// console.log(popelushki);
// console.log(prince);

// for (let girl of popelushki) {
//     for (let boy of prince) {
//         if (girl.footSize === boy.footSize) {
//             console.log(`Попелюшка ${girl.name} повинна бути з ${boy.name}`)
//         }
//     }
// };


// ==============================================
// - Створити клас або функцію конструктор, за допомоги якої можна створювати об'єкти наступного вигляду.
// Конструктор повинен приймати значення для кожної властивості, в т.ч і для властивостей внутрішніх об'єктів

// {
//     id: 1,
//     name: 'Leanne Graham',
//     username: 'Bret',
//     email: 'Sincere@april.biz',
//     address: {
//         street: 'Kulas Light',
//         suite: 'Apt. 556',
//         city: 'Gwenborough',
//         zipcode: '92998-3874',
//         geo: {
//             lat: '-37.3159',
//             lng: '81.1496'
//         }
//     },
//     phone: '1-770-736-8031 x56442',
//     website: 'hildegard.org',
//     company: {
//         name: 'Romaguera-Crona',
//         catchPhrase: 'Multi-layered client-server neural-net',
//         bs: 'harness real-time e-markets'
//     }
// }
// ==============================================

// function createUser(id, name, username, email, addressStreet, addressSuite, addressCity, addressZipcode, addressGeoLat, addressGeoLng, phone, website, companyName, companyCatchPhrase, companyBs) {
//     this.id = id;
//     this.name = name;
//     this.username = username;
//     this.email = email;
//     this.address = {};
//     this.address.street = addressStreet;
//     this.address.suite = addressSuite;
//     this.address.city = addressCity;
//     this.address.zipcode = addressZipcode;
//     this.address.geo = {};
//     this.address.geo.lat = addressGeoLat;
//     this.address.geo.lng = addressGeoLng;
//     this.phone = phone;
//     this.website = website;
//     this.company={};
//     this.company.name = companyName;
//     this.company.catchPhrase = companyCatchPhrase;
//     this.company.bs = companyBs;
// };

// let user = new createUser(1, "Leanne Graham", "Bret", "Sincere@april.biz", "Kulas Light",
//     "Apt. 556", "Gwenborough", "92998-3874", -37.3159, 81.1496, "1-770-736-8031 x56442", "hildegard.org", "Romaguera-Crona", "Multi-layered client-server neural-net", "harness real-time e-markets");
// console.log(user);

// ==============================================
// -  Створити функцію конструктор / клас  який описує об'єкт тегу
// Поля :
//  -назва тегу ()
//  - опис його дій
//  - масив з атрибутами (2-3 атрибути максимум)
//  Кожен атрибут описати як окремий який буде містити
//  -назву атрибуту
//  -опис дії атрибуту
//  інформацію брати з htmlbook.ru

//  Таким чином описати теги
//  -a
//  -div
//  -h1
//  -span
//  -input
//  -form
//  -option
//  -select
//  Приклад результуючого об'єкту
//    {
//         titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//         attrs: [
//         {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//         {/*some props and values*/},
//         {/*...*/},
//         {/*...*/},
//         ]

//    }
// ==============================================

// class InfoTeg {
//     constructor(titleOfTag, action, titleOfAttr, actionOfAttr) {
//         this.titleOfTag = titleOfTag;
//         this.action = action;
//         this.attrs = [];
//         this.attrs.titleOfAttr = titleOfAttr;
//         this.attrs.actionOfAttr = actionOfAttr;
//     }
// };

// let div = new InfoTeg("div", "Елемент <div> є блоковим елементом і призначений для виділення фрагмента документа з метою зміни виду вмісту.", "title", "Вказує додаткову текстову підказку");

// console.log(div)