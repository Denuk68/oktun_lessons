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

// 9) створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.  EXAMPLE:  [1,2,3,4]  [2,3,4,5]  результат  [3,5,7,9]

// let sumArrayNumb = function (arr1, arr2) {
//     let newArray= [];
//     for (let i = 0; i < arr1.length; i++) {
//         newArray.push(arr1[i] + arr2[i])
//     }
//     return newArray;
// }
// let res = sumArrayNumb([1, 2, 3, 4], [2, 3, 4, 5]);
// console.log(res);

// 10 Дан масив ['a', 'b', 'c']. Додайте йому в кінець елементи 1, 2, 3 за допомогою циклу.

// let arr = ['a', 'b', 'c'];
// let arr2 = [1, 2, 3];
// for(let i of arr2){
//     arr.push(i)
// }
// console.log(arr)

// 11 Дан масив [1, 2, 3]. Зробіть з нього новий масив [3, 2, 1].

// let arr = [1, 2, 3];
// let arr2 = arr.reverse();
// console.log(arr2)

// 12 Дан масив [1, 2, 3]. Додайте йому в кінець елементи 4, 5, 6.
// let arr = [1, 2, 3];
// arr.push(4, 5, 6);
// console.log(arr);

// 13 Дан масив [1, 2, 3]. Додайте йому в початок елементи 4, 5, 6.
// let arr = [1, 2, 3];
// arr.unshift(4, 5, 6);
// console.log(arr)

// 14 Дан масив [1, 2, 3, 4, 5]. Перетворіть масив в [4, 5].
// let arr = [1, 2, 3, 4, 5];
// arr.splice(0,3);
// console.log(arr)

// 15 Дан масив [1, 2, 3, 4, 5]. Перетворіть масив в [1,2].
// let arr = [1, 2, 3, 4, 5];
// arr.splice(2,5);
// console.log(arr)

// 16 Дан масив [1, 2, 3, 4, 5]. Зробіть з нього масив [1, 2, 3, 'a', 'b', 'c'].

// let arr = [1, 2, 3, 4, 5];
// arr.splice(3,5,"a" ,"b","c")
// console.log(arr)


// 17 Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let arr2 = []
// for(let i of arr){
//     if( i % 2 === 0){
//         arr2.push(i)
//     }
// };
// console.log(arr2)


// 18  - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let arr2 = [];
// for( let i of arr){
//     arr2.push(i)
// }
// console.log(arr2)

// 19 Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.

// let arr = ['a', 'b', 'c'];
// let word = "";
// for (let i = 0; i < arr.length; i++) {
//     word += arr[i];
// }
// console.log(word);

// 20 За допомогою циклу for of зібрати всі букви в слово.    

// let arr = ['a', 'b', 'c'];
// let word = "";
// for (let i of arr) {
//     word += i
// }
// console.log(word);

// 21 За допомогою циклу while зібрати всі букви в слово.
// let arr = ['a', 'b', 'c'];
// let word = "";
// let i = 0;
// while(i < arr.length){
//     word += arr[i];
//     i++;
// }
// console.log(word)


// 22 функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"  EXAMPLE:  foo([9,8,0,4], ) // ==> [ 8, 9, 0, 4 ]  foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]  foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]

let funFunction = function (arg1, arg2) {

}

let res = funFunction([9, 8, 0, 4], 1);
console.log(res);