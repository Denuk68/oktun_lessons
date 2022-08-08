// 1) Створити функцію яка приймає масив та виводить його

// let arr = [1, 2, 2, 3, 2, 21];
// let func = function(argument){
//     document.write(argument);
// };
// func(arr)


// 2) Cтворити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

// let funcMin = function (a, b, c) {
//     if (a < b && a < c) {
//         console.log(`Найменше число A = ${a}`);
//     }
//     else if (b < c && b < a) {
//         console.log(`Найменше число B = ${b}`);
//     }
//     else if (c < a && c < b) {
//         console.log(`Найменше число C = ${c}`);
//     }
//     else if (a == b && a < c && b < c) {
//         console.log(`Найменші числа A = ${a} та B = ${b}`);
//     }
//     else if (a == c && a < b && c < b) {
//         console.log(`Найменші числа A = ${a} та C = ${c}`);
//     }
//     else if (b == c && b < a && c < a) {
//         console.log(`Найменші числа B = ${b} та C = ${c}`);
//     }
//     else {
//         "Error"
//     }
// }
// funcMin(2,3,2)

// 3) Cтворити функцію яка повертає найбільше число з масиву
// let numbers = [1, 22, 33, 44, 55, 66, 77, 88, 99, 10];
// let funcMaxNumber = function (array) {
//     let maxNumber = array[0];
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] > maxNumber) {
//             maxNumber = array[i]
//         }
//     }
//     return maxNumber
// }
// let res = funcMaxNumber(numbers)
// console.log(res)

// 4)  створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

// let array = [1, 22, 10];
// let sumNumbers = function (numbers) {
//     let sum = 0;
//     for (let item of numbers){
//         sum += item
//     }
//     return sum
// }
// let res = sumNumbers(array);
// console.log(res)

// 5)  створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

// let arr = [10, 20, 40, 50];
// let avgNumber = function (array) {
//     let sum = 0;
//     for (let item of array) {
//         sum += item;
//     }
//     let res = sum / array.length;
//     return res
// }
// let res = avgNumber(arr);
// console.log(res);


// 6) створити функцію яка заповнює масив рандомними числами

// let createArray = function (count, maxNumber){   
//     let arr = []; 
//     for(let i = 0; i < count ; i++){
//         let randomNumber = Math.round(Math.random()*maxNumber);
//         arr.push(randomNumber)
//     }
//     return arr;     
// }
// let res = createArray(10, 100);
// console.log(res);

// 7) Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів

// let arr = [{name: 'Dima', age: 13}, {model: 'Camry'}];
// let nameKeyFunc = function(array){
//     let newArr = [];
//     for( let item of array ){
//         for(let key in item){
//            newArr.push(key)
//         }
//     }
//     return newArr
// }
// let res = nameKeyFunc(arr);
// console.log(res);

// 8) Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів

// let arr = [{name: 'Dima', age: 13}, {model: 'Camry'}];
// let nameKeyFunc = function(array){
//     let newArr = [];
//     for( let item of array ){
//         for(let key in item){
//            newArr.push(item[key])
//         }
//     }
//     return newArr
// }
// let res = nameKeyFunc(arr);
// console.log(res);