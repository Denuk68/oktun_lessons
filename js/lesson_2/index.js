// 1)  Дано 2 масиви з рівною кількістю об'єктів. З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" . Записати цей об'єкт в новий масив
// let usersWithId = [
//     { id: 1, name: 'vasya', age: 31, status: false },
//     { id: 2, name: 'petya', age: 30, status: true },
//     { id: 3, name: 'kolya', age: 29, status: true },
//     { id: 4, name: 'olya', age: 28, status: false }
// ];

// let citiesWithId = [
//     { user_id: 3, country: 'USA', city: 'Portland' },
//     { user_id: 1, country: 'Ukraine', city: 'Ternopil' },
//     { user_id: 2, country: 'Poland', city: 'Krakow' },
//     { user_id: 4, country: 'USA', city: 'Miami' }
// ];

// let person = [];
// for (let user of usersWithId) {
//     for (let city of citiesWithId) {
//         if (user.id === city.user_id) {
//             user.address = city;
//             person.push(user);
//         }
//     }
// };
// console.log(person);


// 2) Вивести кожен елемент масиву, сусід справа якого є парним   EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56
// let arr = [1, 2, 3, 5, 7, 9, 56, 8, 67];
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i + 1] % 2 === 0) {
//         console.log(arr[i])
//     }
// };

// 3) Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
// let arr = [1, 2, 3, 4, 5];
// let arrNew = [];
// for (let i = 0; i < arr.length; i++) {
//     arr[i] *=5;
//     arrNew.push(arr[i])    
// };
// console.log(arrNew);


// 4) Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом - додати його в інший масив.

// let arr = [1, true, { name: "den", age: 24 }, "3", 2, 3.14];
// let arrNew = [];
// for (let i = 0; i < arr.length; i++) {
//     if (typeof (arr[i]) === "number")
//         arrNew.push(arr[i])
// }
// console.log(arrNew)


// 5) Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.
// let arr = [100, 250, 50, 168, 120, 345, 188];
// let sum = 0;
// for(let i = 0; i < arr.length; i++){
//     sum += arr[i];  
// }
// let result = sum / arr.length;
// console.log(result)

// 6) Замінити кожне число кратне 3 на слово "okten"
// let arr = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 3 === 0) {
//         arr[i] = "okten"
//     }
// }
// console.log(arr)

// 8) Вивести масив в зворотньому порядку
// let arr = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// for (let i = arr.length -1; i >= 0; i--) {
//     console.log(arr[i])
// }

// 9) Перебрати його циклом while || for of
// let arr = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];

// let i = 0;
// while (i < arr.length) {
//     console.log(arr[i]);
//     i++;
// }

// for(let number of arr){
//     console.log(number)
// }