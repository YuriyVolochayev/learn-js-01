// const Arr = [1, 2, 3, 5, 6, 10]

// function squareArr(newArr) {
//     for (let index = 0; index < newArr.length; index++) {
//         newArr[index] *= newArr[index]
//     }
//     return newArr;
    
// }
// console.log(squareArr(Arr));


// function calcBmi(weight, height) {
//     let numWeight = Number.parseFloat(weight.replace(",", "."));
//     let numHeight = Number.parseFloat(height);

//     const bmi = (numWeight / (numHeight ** 2)).toFixed(1);

//     return bmi; /*toFixed(1);*/
    
// }

// const bmi = calcBmi("88,3", "1.75");
// console.log(bmi);


// const sum = 499;

// if(sum >= 1500) {
//     console.log("level 1");
// } else if(sum > 500) {
//     console.log("level 2");
// } else if(sum === 500) {
//     console.log("level 3");
// } else if(sum < 500) {
//     console.log("level 4");
//     }

// const sum = 1000;

// const message = sum >= 0 ? 'Positive' : 'Negative';

// console.log(message);

// const hours = 15;
// const minutes = 0;

// let time;

// if (minutes > 0) {
//     time = `${hours} г. ${minutes} хв.`
// } else {
//     time = `${hours} г.`
// }
    
// console.log(time);

// const deadline = 4;
// let msg;

// if(deadline === 0) {
//     msg = `Today`
// } else if(deadline === 1) {
//     msg = `Tomorrow`
// } else if(deadline === 2) {
//     msg = `Overmorrow`
// } else if (deadline >= 3) {
//     msg = `Date in the future`
// }

// console.log(msg);

// const user = "Petya";
// switch (user) {
//     case "Alice":
//         console.log("case1");
//         break;
//     case "Petya":
//         console.log("case2");
//         break;
//     default:
//         console.log("Default");
        
//         break;
// }

// const deadline = 2;
// let msg;

// switch (deadline) {
//     case 0:
//         msg = 'Today';
        
//         break;
//     case 1:
//         msg = 'Tomorrow';
        
//         break;
//     case 2:
//         msg = 'Overmorrow';
        
//         break;

//     default:
//         msg = 'Date in the future'
//         break;
// }

// console.log(msg);

// const option = 4;

// let msg;

// switch (option) {
//     case 1:
//         msg = 'Самовивіз';
//         break;
    
//     case 2:
//         msg = 'Курьер';
//         break;
    
//     case 3:
//         msg = 'Почтомат';
//         break;

//     default:
//         msg = "Ви не вибрали спосіб доставки"
//         break;
// }
// console.log(msg);

// const sub = "Pro";

// let canConnect = sub === "Vip" || sub === "Pro" ? true : false

// // if (sub === "Pro" || sub === "Vip") {
// //     canConnect = true
// // } else {
// //     canConnect = false
// // };

// console.log("canConnect", canConnect);

// const isOnline = true;
// const isFriend = true;
// const isDnd = false;

// const canOpenChat = isOnline && isFriend && !isDnd;

// console.log("canOpenChat", canOpenChat);

// --------------- методи рядків --------------

// slice
// toLowerCase
// toUpperCase
// includes
// startsWith / endsWith
// indexOf
// trim



// const user = "Yurii Volochaeiv";

// const a = user.slice(1, 5);
// console.log(a);

// console.log(user.slice(0, 3)); // від якого вирізаємо і до якого(не включаючи)

// const user = "Yurii Volochaeiv";

// const user = "            Yurii Volochaeiv             ";

// console.log(user.toLowerCase());
// console.log(user.toUpperCase());

// console.log(user.includes("Yu")); // метод includes чутливий до регістрів
// console.log(user.includes("yu"));

// console.log(user.startsWith("Yu"));
// console.log(user.startsWith("yu"));

// console.log(user.endsWith("Yu"));
// console.log(user.endsWith("yu"));
// console.log(user.endsWith("iv"));

// console.log(user.indexOf("yu")); // чутливий до регістру
// console.log(user.indexOf("Yu")); //при передачі двох літер поверне індекс першої
// console.log(user.indexOf("i")); //якщо в рядку дві однакові літере - поверне індекс першої
// console.log(user.indexOf(" ")); //пробіл також індексуються

// console.log(user);
// console.log(user.trim()); // метод trim прибирає всі зайві пробіли з початку і кінця рядків


// let link = "https://my-site.com/about/";

// if (!link.endsWith("/")) {
//     link += "/"; // "link += "/""" === "link = link + "/"""
// } else {
//     console.log("Everythyng is fine");
//     }
// console.log(link);

// let link = "https://my-site.com/about";

// // if (!link.endsWith("/") && link.includes("my-site")) {
// //     link += "/"
// // }

// link = !link.endsWith("/") && link.includes("my-site") ? link += "/" : link;// виконання за допомогою тернарного оператора
    
// console.log(link);



// const blackListWord1 = "spam";
// const blackListWord2 = "sale";

// const string1 = "Hello, I Abdul, this is not spam.";
// const string2 = "Biggest SALE this week, dont miss out!";
// const string3 = "#fatlivesmatter advertising campain";

// console.log(string1.includes(blackListWord1));
// console.log(string1.includes(blackListWord2.toLowerCase()));

// console.log(string2.includes(blackListWord1));
// console.log(string2.toLowerCase().includes(blackListWord2));

// -------------------ЦИКЛИ------------------

// for
// wile
// do wile

// console.log("Before");

// for (let i = 0; i < 10; i += 1) {
//     console.log(i);
    
// }

// for (let i = 10; i >= 0; i -= 1) {
//     console.log(i);
    
// }


// console.log("After");

// const user = "Alice";
// for (let i = 0; i < user.length; i += 1) {
//     console.log(user[i], i);
    
// }
// ІНКРЕМЕНТ

// let a = 10;

// const b = ++a;// a = a + 1; b = b + 1

// const d = a++;// d = a = 10; a = a + 1

// // a++;
// // ++a;

// console.log("a", a);
// console.log("b", b);
// console.log("d", d);


// let a = 10;

// --a;

// console.log("a", a);



// while
// do...while - дія 100% виконається один раз


// console.log("Before");

// let counter = 11;

// // while (counter < 10) {
// //     console.log(counter);
// //     counter++
    
// // }

// do {
//     console.log(counter);
//     counter++
    
// } while (counter < 5);


// console.log("After");


//**напиши цикл for який виводить у консоль браузера
// числа за зростанням від а до b,
// але які кратні 5


// const a = 20;
// const b = 100;
// for (let i = a; i < b; i++) {
//     // if(i % 5 === 0) {
//     //     console.log(i);
//     // }

//     if(!(i % 5)) {
//         console.log(i);
//     }
// }

// const min = 0;
// const max = 6;
// let total = 0;

// for (let i = min; i <= max; i++) {
//     if(!(i % 2)) {
//         total += i;

//         console.log(total);
        
//     }
// }

// МАСИВИ

// const arr = ["string", 25, true]; // індексована сутність

// arr[2] = false;// заиіна елемента масиву через індекс

// console.log(arr);
// console.log(arr.length);// повертає довжину масиву,
// console.log(arr[2]);// зверення до елементу масиву через індекс


// let a = [1, 2, 3];// присвоюється посилання
// const b = a; // передається посилання яке збереглося в "а"

// a[0] = 100;

// console.log("a", a);
// console.log("b", b);
// console.log(a === b);// одне посилання - true. Масиви порівнюється за посиланням

// const x = [1, 2, 3];
// const y = [1, 2, 3];

// console.log(x === y);// різні масиви = різні посилання - false


// const arr = ["HTML", "CSS", "JS", "React"];

// console.log(arr);


// const str = arr.join(" ");// перетворює масив в рядок
// console.log(str);

// const arr1 = str.split(" ");// перетворює рядок на масив. В метод передаємо по чому ріжимо рядок.

// console.log(arr1);


// const arr = ["HTML", "CSS", "JS", "React"];

// const arr1 = arr.slice(0, 3);// сворює новий масив від елемента з 0 індексом і до елемента з індексом 3 не вкючаючи його

// console.log(arr1);

// const arr2 = arr.slice(1);

// console.log(arr2);// якщо передати тільки 1 аргумент то зробить новий масив від елемента індекс який вказали і до кінця

// const arr3 = arr.slice();// якщо не вказати аргументи метод створить точну копію масиву
// console.log(arr3);

// const arr4 = arr.slice(-3);

// console.log(arr4);

// const arr = ["HTML", "CSS", "JS", "React"];

// const arr1 = [1, 2, 3, 4];

// const arr2 = ["tototo", "lalala"];

// const arr3 = arr.concat(arr1, arr2);// послідовність додавання залежить від послідовності атрибутів у методі

// // console.log(arr3);

// const index = arr3.indexOf("pupupu");// повертає індекс елемента. Якщо передати неіснуючий елемент - поверне -1. Чутливий до регістру.

// console.log(index);

// const arr = ["HTML", "CSS", "JS", "React"];

// const arr1 = [1, 2, 3, 4];

// const arr2 = ["tototo", "lalala"];

// arr.push("pupupu"); додає переданий аргумент в кінець масиву

// console.log(arr);

// arr1.push(5, 6, 7);

// console.log(arr1);

// arr.pop();// метод видаляє з кінця елемент

// console.log(arr);


// const arr = ["HTML", "CSS", "JS", "React", "tototo", "lalala"];

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i], i);
    
// }

// for (let i = 0; i < arr.length; i++) {

//     arr[i] += `-${i}`
//     console.log(arr);
    
// }

// const arr = ["HTML", "CSS", "JS", "React", "tototo", "lalala"];

// for (const scills of arr) {// доступ до кожного елемента масиву
//     console.log(scills);
    
// }

// const arr = ["HTML", "CSS", "JS", "React", "tototo", "lalala"];

// if(arr.includes("CSS")) {
//     console.log("SuperPuper");
// } else {
//     console.log("WTF");
    
// }

// const values = "8 10";

// const valuesArr = values.split(" ");

// console.log(valuesArr);

// const square = valuesArr[0] * valuesArr[1];

// console.log(square);

// const fruits = ["🍎", "🍌", "🍐", "🍑", "🍋", "🍇"];

// // for (const fruit of fruits) {
// //     console.log(fruit);
    
// // }

// for (let i = 0; i < fruits.length; i++) {
//     console.log(`${i + 1}: ${fruits[i]}`);
// }

// const arr = [1, 5, 8, 9, 12, 4, 30, 18, 14,];

// let total = 0;

// for (const num of arr) {
//     if (num % 2 === 0) {
//         total += num;
//     }
    
// }
// console.log(total);

// const names = "Yurii, Valera, Petya, Dima";
// const numbers = "1111, 2222, 3333, 4444";

// const namesArr = names.split(",");
// const numbersArr = numbers.split(",");

// for (let i = 0; i < namesArr.length; i++) {
//     console.log(`${namesArr[i]}: ${numbersArr[i]}`);
    
// }

// const string = "    Welcome to the future    ";

// const arr = string.trim().split(" ");

// console.log(arr);

// const res = arr.slice(1, arr.length - 1).join(" ");
// console.log(res);

// const arr = [5, 8, 9, 12, 4, 30, 18, 14,];

// let min;

// for (let i = 0; i < arr.length; i++) {
//     if (i === 0) {
//         min = arr[i]
//     } else {
//         if (arr[i] < min) {
//             min = arr[i]
//         }
//     }
// }
//  console.log(min);
 
// function foo(a, b, c) {

//     // const arr = [1, 2, 3]
//     // console.log(arguments);// не виколистовуються методи масиву
//     const args = Array.from(arguments);
//     console.log(args);
//     console.log(args.join(" "));
    
// }

// foo(1, 2, 3);

// const add = function () {
//     const args = Array.from(arguments);
//     let total = 0;
//     for (let i of args) {
//         total += i
//     }
//     return total;
// }

// console.log(add(1, 2, 3));
// console.log(add(1, 2, 3, 4, 5));

// function calAvarage() {
//     let total = 0;
//     for (let i = 0; i < arguments.length; i++) {
//         total += arguments[i];
//     }
//     return total / arguments.length
// }
// console.log(calAvarage(1, 2, 3));
// console.log(calAvarage(1, 2, 3, 4, 5));


// СТЕКИ ВИКЛИКІВ ФУНКЦІЇ

// function fnA() {
//     console.log("виклик функції fnA");
    
// }

// function fnB() {
//     console.log("виклик функції fnB");
    
// }

// function fnC() {
//     console.log("виклик функції fnC");
    
// }


// console.log("before fnA");
// fnA();
// console.log("after fnA");

// console.log("before fnB");
// fnB();
// console.log("after fnB");

// console.log("before C");
// fnC();
// console.log("after fnC");


// function bar() {
//     console.log("bar");
    
// }
//  function baz() {
//     console.log("baz");
    
// }
 
// function foo() {
//     console.log("foo");
//     bar();
//     baz();
    
// }

// foo();

// function logItems(items) {
//     for(let i = 0; i < items.length; i++) {
//         console.log(`${i + 1} - ${items[i]}`);
        
//     }
// }

// logItems(["HTML", "CSS", "JS", "React", "tototo", "lalala"]);
// logItems(["🍎", "🍌", "🍐", "🍑", "🍋", "🍇"]);

// const names = "Jacob,William,Solomon,Artemis";

// const phones = "050555333,066444222,099999888,077888666";

// function printInfo(names, phones) {
//     const namesArr = names.split(",");
//     const phonesArr = phones.split(",");

//     for (let i = 0; i < namesArr.length; i++) {
//         console.log(`${namesArr[i]}: ${phonesArr[i]}`);
//     }
        
// }
// printInfo(
//     "Jacob,William,Solomon,Artemis",
//     "050555333,066444222,099999888,077888666");



// function formatTime(totalMinutes) {
//     const hours = Math.floor(totalMinutes / 60);
//     const minutes = totalMinutes % 60;
//     // console.log(hours);
//     // console.log(minutes);

//     // перетворимо змінну на рядок

//     const douleHours = String(hours).padStart(2, "0");
//     const doubleMinutes = String(minutes).padStart(2, "0");
//     // метод padStart додає до рядка необхідну кількість символів
//     //     * перший аргумент - необхіна кількіть символів
//     // *другий аргумент - символ який передаєть на початок рядка, якщо його довжина менша ні та яку первіряємо (перший аргумент)

//     return `${douleHours}:${doubleMinutes}`;
// }


// console.log(formatTime(70));
// console.log(formatTime(460));
// console.log(formatTime(1441));



// const data = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// function devideArr(arr, num) {
//     const res = [];

//     for (let i = 0; i < arr.length; i += num) {
//         const comb = arr.slice(i, i + num);
//         res.push(comb);
//     }
//     return res;
// }


// console.log(devideArr(data, 3));

// Об'єкти

// const playlist = ["Mood", 10, true];

// const playlistObj = {
//     name: "Mood",
//     rating: 9,
//     isFavorite: true,
//     tracks: ["tr-1", "tr-2"]
// };
// // console.log(playlistObj.name);// коли відомий ім'я ключа

// playlistObj.rating = 4;
// playlistObj.name = 'Old'
// playlistObj.year = 2015;

// console.log(playlistObj);

// const user = {
//     name: "Will",
//     age: 29,
//     skills: {
//         HTML: true,
//         CSS: true,
//         JS: true,
//         React: false
//     }
// }

// console.log(user.skills.JS);

// const username = "Alice";
// const age = 25;
// const mail = 'sutr@gmail.com';

// const userObj = {
//     // name: username, // якщо ім'я ключа має таку саму назву як і значення використовуємо скорочений синтаксис
//     // age: age,
//     // mail: mail

//     // username,
//     // age,
//     // mail

// }

// const username = "Alice";
// const age = 25;
// const mail = 'sutr@gmail.com';

// function foo(name, email) {
//     const obj = {
//         name,
//         email
//     }
//     return obj
//     }
// console.log(foo(username, mail));

// const inputName = "color";

// const obj = {
//     [inputName]: "red"
// }

// console.log(obj);

// перебір об'єкта. Цикли for...in-------------------------------------------------------------------------

// const feedback = {
//     good: 5,
//     neutral: 8,
//     bad: 11
//     }

// let total1 = 0;
// for (const key in feedback) {
//     total1 += feedback[key];
//     console.log(feedback[key], key);
//     console.log(total1);
// }

// // методи Object.key, Object.values ----------------------------------------------------------------------

// const feedbackSecond = {
//     good: 2,
//     neutral: 9,
//     bad: 1
// }
//     let total2 = 0

// const keys = Object.keys(feedbackSecond); // метод складає ключи в масив

// console.log(keys);
// console.log(keys.length);

// for (const key of keys) {
//     console.log(feedbackSecond[key], key);
//     total2 += feedbackSecond[key]
//     }
// console.log(total2);

// //--------------------------------------------------------------------------------------------------------

// const feedback3 = {
//     good: 10,
//     neutral: 10,
//     bad: 10
// }
    
// const values = Object.values(feedback3); // повертає масив значень об'єкта
// let total3 = 0;
// for (const key of values) {
//     total3 += key;


// }
// console.log(total3);

// const user = {
//     name: "Will",
//     age: 29,
//     hobby: "origami",
//     premium: true
// }

// user.mood = "happy";
// user.hobby = "skydiving";
// user.premium = false;

// const keys = Object.keys(user);
// for (const item of keys) {
//     console.log(`${item} : ${user[item]}`);
    
// }

// function foo(obj) {
//     obj.mood = "happy";
//     obj.hobby = "skydiving";
//     obj.premium = false;

//     const keys = Object.keys(obj);
//     for (const item of keys) {
//         console.log(`${item} : ${obj[item]}`);
        
//     }
    
// }

// const teamSalary =  {
//     Amanda: 5000,
//     Peter: 6000,
//     Pall: 4500,
//     Cavin: 9000
// }

// let sum = 0;

// const keys = Object.keys(teamSalary);

// for (const key of keys) {

//     sum += teamSalary[key]
    
    
// }
// console.log(sum);

//---------------------МЕТОДИ ОБ'ЄКТУ-------------------------------


// const friends = [
//     { name: "Ross", online: false },
//     { name: "Joey", online: true },
//     { name: "Chandler", online: false },
//     { name: "Phoebe", online: true },
//     { name: "Monica", online: true },
//     { name: "Rachel", online: false },
// ];
// console.log(friends);
// console.table(friends);

//-----------------------ЗНАЙТИ ДРУГА ЗА ІМ'ЯМ--------------------------
// function findByName(arr, name) {
//     for (const item of arr) {
//         // console.log(item.name);
//         if (item.name === name.toLowerCase) {
//             return item;
//         }
        
//     }
//     return "Not found"
// }
// console.log(findByName(friends, "Chandler"));

//-------------------------ОТРИМАТИ ІМЕНА ВСІХ ДРУЗІВ--------------------

// function getAllNAmes(arr) {
//     const newArr = [];

//     for (const i of arr) {
//         newArr.push(i.name);
//     }
//     return newArr
// }

// console.log(getAllNAmes(friends));

//-------------------------ОТРИМАТИ ІМЕНА ДРУЗІВ ONLINE--------------------

// function getOnline(array) {
//     const friendsOnline = [];

//     for (const item of array) {
//         if (item.online) {
//             friendsOnline.push(item);
//         }
//     }
//     return friendsOnline
// }

// console.log(getOnline(friends));

//-------------------------------------------------------------------------------------------------------------------------------------------

// const stones = [
//     { name: "Сапфір", price: 1300, quantity: 4 },
//     { name: "Діамант", price: 2000, quantity: 5 },
//     { name: "Рубін", price: 1750, quantity: 2 },
//     { name: "Смарагд", price: 1300, quantity: 3 },
// ];

// function totalPrice(arr, name) {
//     let sum = 0;
//     for (const i of arr) {
//         if (i.name === name) {
//             sum += i.price * i.quantity;
//         }
//     }
//     return sum;
// }
// console.log(totalPrice(stones, "Сапфір"));
// console.log(totalPrice(stones, "Діамант"));
// console.log(totalPrice(stones, "Рубін"));
// console.log(totalPrice(stones, "Смарагд"));




//---------------------------------------------МЕТОДИ ОБ'ЄКТА. КЛЮЧОВЕ СЛОВO "this"--------------------------------------------------------




// const playlist = {
//     name: "Mood",
//     rating: 9,
//     tracks: ["tr-1", "tr-2", "tr-3"],

//     changeName(newName) {
//         // playlist.name = newName; краще використовувати this, щоб метод працював для інших об'єктів
//         this.name = newName;
//     }
// };

// playlist.changeName("BadMood")

// const playlist2 = {
//     name: "Cringe",
//     rating: 4,
//     tracks: ["tr-1", "tr-2", "tr-3"],
// }
// playlist2.changeName = playlist.changeName;
// playlist2.changeName("NotCringe");

// console.log(playlist);
// console.log(playlist2);


//------------------------------------------------------------------------------------------------------------------------------------------


// const playlist = {
//     name: "Mood",
//     rating: 9,
//     tracks: ["tr-1", "tr-2", "tr-3"],

//     changeName(newName) {
//         this.name = newName;
//     },

//     changeRating(newRate) {
//         this.rating = newRate;
//     },

//     addTrack(newTrack) {
//         this.tracks.push(newTrack);
//     },
// };
// playlist.addTrack("tr-4");
// playlist.changeRating(5);
// console.log(playlist);


//=================================================СИНТАКСИС SPRED та REST====================================================
// rest оператор складає в масив

// function sum(...num) {
//     console.log(num);
//     }

// sum(1, 2, 3);
// sum(1, 2, 3, 4, 5);

//-----------------------------------------------------------------------------------------------------------

// function foo(...args) {
//     console.log(args);
    
// }

// foo({ a: 1, b: 2, });

//----------------------------------------------------------------------------------------------------------

// spred розгортає

// const num = [
//     1000,
//     ...[1, 2, 3],
//     4000,
//     ...[4, 5, 6],
//     7000,
//     ...[7, 8, 9]
// ]

// console.log(num);

//===================================================================================================================

/* ПОШУК НАЙБІЛЬШОГО ТА НАЙМЕНШОГО*/

// const num = [18, 20, 9, 15, 33, 78, 100];


// console.log(Math.max(...num));
// console.log(Math.min(...num));

//-------------------------------------------------------------------------------------------------------------------------------


//=============================================СТВОРЕННЯМАСИВУ===================================================================

// const a = [18, 20, 9];

// // const b = a; одне і теж посилання/одне місце пам'яті
// // console.log(a === b);
// // console.log("a", a);
// // console.log("b", b);

// const b = [...a]; // різні посилання/різня місця пам'яті
// console.log(a === b);
// console.log("a", a);
// console.log("b", b);

//---------------------------------------------------------------------------------

// const tu = [{ a: 2 }, { b: 4 }, { c: 6 },];

// // об'єкт копіюється за посиланням. коли ми розгортаємо масив tu в масив bu, ми фактично копіюємо в нього посилання на об'єкти

// const bu = [...tu];

// tu[0].a = 100;

// console.log("tu", tu);
// console.log("bu", bu);


//===================поєднання декількох масивів в один===============================================

// const a = [1, 2, 3];
// const b = [4, 5, 6];
// const c = [7, 8, 9];

// const newFullArr = [...a, ...b, ...c];

// console.log(newFullArr);

//--------------------------------------------------------------------------------------------------

// const objA = { a: 2, b: 4 };
// const objB = { a: 6, q: 8 };

// const objC = {
//     ...objA,  // a: 2, b: 4
//     a: 10,   //   a: 10, b: 4
//     ...objB,//  a: 6, b: 4, q: 8
//     b: 20  //    a: 6, b: 20, q: 8
// }



// console.log(objA, objB, objC);


//====================================================================================================

// const Transaction = {
//     DEPOST: "deposit",
//     WITHDROW: "withdrow"
// };

// const account = {
//     balance: 0,
//     transactions: [],
//     createTransaction(amount, type) {
//         const obj = { id: amount, amount: amount, type: type };
//         return obj;
//     },
// // ------------------метод що зараховує кошти на баланс----------------------------
//     deposit(amount) {
//         this.balance += amount;
//         const transaction = this.createTransaction(amount, Transaction.DEPOST);
//         this.transactions.push(transaction);
//     },
// // ------------------метод що знімає кошти з балансу----------------------------

//     wihtdrow(amount) {
//         if (this.balance < amount) {
//             console.log("НЕДОСТАТНЬО КОШТІВ");
//             return;
//         }
//         this.balance -= amount;
//         const transaction = this.createTransaction(amount, Transaction.WITHDROW);
//         this.transactions.push(transaction);
//     },

//     // ------------------метод що показує баланс----------------------------
//     getBalance() {
//         return this.balance;
//     },

//     // ------------------метод що шукає об'єкт транзакції по id----------------------------
    
//     getTransitionDetails(id) {
//         for (const item of this.transactions) {
//             if (item.id === id) {
//                 return item;
//             }
//         }
//     },
    
//     //----------------------------метод що повертає загальну суму певного типу транзакцій-----------------------
    
//     getTransactionTotal(type) {
//         let sum = 0;

//         for (const item of this.transactions) {
//             if (item.type === type) {
//                 sum += item.amount;
//             }
//         }
//         return sum;
//     }

    
// }

// account.deposit(300);
// account.deposit(300);

// // account.wihtdrow(1000);
// account.wihtdrow(200);
// // console.log(account.getBalance());
// console.log(account.getTransitionDetails(300));
// console.log(account.getTransitionDetails(200));

// console.log(account.getTransactionTotal(Transaction.DEPOST));
// console.log(account.getTransactionTotal(Transaction.WITHDROW));


//==============================CALLBACK ФУНКЦІЇ======================================================

// function fnA(str, callback) {
//     console.log(str);
// callback(100)
// }


// function fnB(num) {
//     console.log(num);

// }


// fnA("Alice", fnB);



// function foo1(a, b) {
//     const result = a + b;
//     const str = 'result';
//     const strUp = str.toUpperCase();
//     return `${strUp}: ${result}`;
// }

// function foo2(a, b) {
//     const result = a - b;
//     const str = 'result';
//     const strUp = str.toUpperCase();
//     return `${strUp}: ${result}`;
// }

// console.log(foo1(4, 5));
// console.log(foo2(10, 2));

//----------------------------------------------------------------------------------------------------

// function calk(a, b, callback) {
//     const result = callback(a, b);
//     const str = 'result';
//     const strUp = str.toUpperCase();
//     return `${strUp}: ${result}`;
// }

// console.log(calk(10, 2, function (x, y) {
//     return x + y
// }));

// console.log(calk(10, 2, function (x, y) {
//     return x - y
// }));


//----------------------------------------------------------------------------------------------


// function foo(arr, callback) {
//     const newArr = [];

//     for (const i of arr) {
//         newArr.push(callback(i))
//     }
//     return newArr;
// }

// console.log(foo([66, 78, 32, 45, 63], function (value) {
//     return value - 10;
// }));

// console.log(foo([66, 78, 32, 45, 63], function (value) {
//     return value * 2;
// }));

// console.log(foo([66, 78, 32, 45, 63], function (value) {
//     return value * 10;
// }));


//================================СТРІЛОЧНІ ФУНКЦІЇ============================================

// const lalala = (a, b) => {
//     return a + b;
// }

// console.log(lalala(3, 5)); // стрілочна функція з явним перетворенням


// const tototo = (a, b) => a + b;

// console.log(tototo(100, 100));//стрілочна функція з неявним перетворенням

//=============================ПЕРЕБИРАЮ МЕТОДИ МАСИВІВ======================================

//=============================МЕТОД FOR EACH================================================


//метод нічого не повертає

//-------------------------------------------------------------------------------------------
// const num = [5, 10, 15, 20, 25];

// num.forEach(function (num, isndex, arr) { // в функцію, яку метод приймає як параметр, передаються наступні параметри:
// console.log(num, isndex, arr);// поточний елемент масиву; індекс цього елементу та посилання на вихідний масив

// })

//--------------------------------------------------------------------------------------------

// const num = [5, 10, 15, 20, 25];

// let total = 0;

// num.forEach(item => {
//     total += item;
// })
// console.log(total);

//--------------------------------------------------------------------------------------------


//виконай рефакторинг коду

// function logItems(trulala) {
//     for (let i = 0; i < trulala.length; i++) {
//         console.log(`${i + 1} - ${trulala[i]}`);
//     }
// }

// const logItems = (trulala) => {
//     trulala.forEach((trulala, i) => {
//         console.log(`${i + 1} - ${trulala}`);
        
//     });
// }

// logItems(["HTML", "CSS", "JS", "React"]);
// logItems(["🍎", "🍌", "🍐", "🍑", "🍋", "🍇"]);

//------------------------------------------------------------------------------------------------

// function printInfo(names, phones) {
//     const namesArr = names.split(",");
//     const phonesArr = phones.split(",");

//     for (let i = 0; i < namesArr.length; i++) {
//         console.log(`${namesArr[i]}: ${phonesArr[i]}`);
//     }
// }

//------------------------рефакторинг---------------------------------------

// const printInfo = (obj) => {

//     const namesArr = obj.names.split(",");
//     const phonesArr = obj.phones.split(",");

//     namesArr.forEach((name, i) => {
//         console.log(`${namesArr[i]}: ${phonesArr[i]}`);
        
//     });
// }
// printInfo({
// names: "Jacob,William,Solomon,Artemis",
// phones:"050555333,066444222,099999888,077888666"});

//===========================================================================================

/**
 * Array.prototype.map()
 * - Поелементо перебирає оригінальний масив
 * - Не змінює оригінальний масив
 * - Повертає новий масив такої ж довжини
 */

// const allCars = [
//     { make: "Honda", model: "CR-V", amount: 14, price: 24045 },
//     { make: "Honda", model: "Accord", amount: 2, price: 22455 },
//     { make: "Mazda", model: "Mazda 6", amount: 8, price: 24195 },
//     { make: "Mazda", model: "CX-9", amount: 7, price: 31520 },
//     { make: "Toyota", model: "4Runner", amount: 19, price: 34210 },
//     { make: "Toyota", model: "Sequoia", amount: 16, price: 45560 },
//     { make: "Toyota", model: "Tacoma", amount: 4, price: 24320 },
//     { make: "Ford", model: "F-150", amount: 11, price: 27110 },
//     { make: "Ford", model: "Fusion", amount: 13, price: 22120 },
//     { make: "Ford", model: "Explorer", amount: 6, price: 31660 },
// ];

/**
 * Нехай функція getModels повертає масив моделей (поле model) всіх автомобілів.
 */
// const getModels = (cars) => {

//     const arr = [];
//     cars.forEach(item => {
//         arr.push(item.model);
//     });
//     return arr;
// }

// console.log(getModels(allCars));
//----------------------------------------------------------------------------------
// const getModels = (cars) => {
//     return cars.map((item) => {
//         return item.model;
//     });
// }

// console.log(getModels(allCars));
//---------------------------------------------------------------------------------

// const makeCarWithDiscount = (cars, discount) => {
//     return cars.map((car) => {
//     return {...car, price: car.price * (1 - discount)}//за допомогою спред оператора розгорнули/повернули такий самий об'єкт і замінили влативісь price
//     });
    
//      // return cars.map((car) => ({ ...car, price: car.price * (1 - discount) }))

// }

// console.table(makeCarWithDiscount(allCars, 0.2));


//===================================================================================

// const players = [
//     { id: "player-1", name: "Mango", timePlayed: 310, points: 54, online: false },
//     { id: "player-2", name: "Poly", timePlayed: 470, points: 92, online: true },
//     { id: "player-3", name: "Kiwi", timePlayed: 230, points: 48, online: true },
//     { id: "player-4", name: "Ajax", timePlayed: 150, points: 71, online: false },
//     { id: "player-5", name: "Chelsy", timePlayed: 80, points: 48, online: true },
// ];
// /*
// * Збільшуємо кількість годин гравця за id
// */
// // const playerId = "player-3";

// // const newArr = players.map((item) => {
// //     if(item.id === playerId) {
// //         return {
// //             ...item,
// //             timePlayed: item.timePlayed + 100
// //         }
// //     }

// //     return item;
// // })


// console.table(newArr);


//========================================FLAT===============================

// const tweets = [
//     { id: "000", likes: 5, tags: ['js', 'css'] },
//     { id: "001", likes: 5, tags: ['js', 'react'] },
//     { id: "002", likes: 5, tags: ['hnml', 'css'] },
//     { id: "003", likes: 5, tags: ['cs++', 'js'] },
//     { id: "004", likes: 5, tags: ['js', 'css'] },
// ];

// const tags = tweets.flatMap(item => item.tags);// розгортає тільки перший рівень вкладенності

// console.log(tags);


//=====================================================FILTER========================================
// метод перебирає масив і повертає новий масив з елементами або порожній;
// в масив додає елементи, що задовільняють умови колбек функціїї.


// const array = [1, 5, 8, 10, 15, 22, 74, 65, 42];

// const filtered = array.filter((elem, index, arr) => elem > 25);
// const filtered2 = array.filter((elem, index, arr) => elem > 100);

// console.log(filtered);
// console.log(filtered2);


// const allCars = [
//     { make: "Honda", model: "CR-V", type: "sedan", amount: 14, price: 24045 },
//     { make: "Honda", model: "Accord", type: "sport", amount: 2, price: 22455 },
//     { make: "Mazda", model: "Mazda 6", type: "truck", amount: 8, price: 24195 },
//     { make: "Mazda", model: "CX-9", type: "truck", amount: 7, price: 31520 },
//     { make: "Toyota", model: "4Runner", type: "truck", amount: 19, price: 34210 },
//     { make: "Toyota", model: "Sequoia", type: "sedan", amount: 16, price: 45560 },
//     { make: "Toyota", model: "Tacoma", type: "truck", amount: 4, price: 24320 },
//     { make: "Ford", model: "F-150", type: "sedan", amount: 11, price: 27110 },
//     { make: "Ford", model: "Fusion", type: "truck", amount: 13, price: 22120 },
//     { make: "Ford", model: "Explorer", type: "sport", amount: 6, price: 31660 },
// ];

//-------------------------------------------------------------------

// const filterByPrice = (cars, treshhold) => {
//     return cars.filter((item) => item.price < treshhold);
// }

// console.table(filterByPrice(allCars, 30000));

//-------------------------------------------------------------------

// const getCarWithType = (cars, type) => {
//     return cars.filter((car) => car.type === type);
// }

// console.table(getCarWithType(allCars, "sedan"));
//-------------------------------------------------------------------


//===============================FIND================================
// поелементно перебирає масив;
// повертає перший елемент, що задовільняє умови функціїї;

// const array = [1, 5, 8, 10, 15, 22, 74, 65, 42];

// const num = array.find((elem, index, arr) => elem > 20);

// console.log(num);

//-------------------------------------------------------------------

//=====================================EVERY та SOME=============================
//метод EVERY перебирає масив і повертає true, якщо всі елементи задовільнять умову




// const players = [
//     { id: "player-1", name: "Mango", timePlayed: 310, points: 54, online: false },
//     { id: "player-2", name: "Poly", timePlayed: 470, points: 92, online: true },
//     { id: "player-3", name: "Kiwi", timePlayed: 230, points: 48, online: true },
//     { id: "player-4", name: "Ajax", timePlayed: 150, points: 71, online: false },
//     { id: "player-5", name: "Chelsy", timePlayed: 110, points: 48, online: true },
// ];

// const isAllOnline = players.every((player) => player.online);
// const isTime = players.every((player) => player.timePlayed > 100);

// console.log(isAllOnline);
// console.log(isTime);

//метод SOME перебирає масив і повертає true, якщо хоча б один елементи задовільнять умову


// const isAllOnline = players.some((player) => player.online);

// console.log(isAllOnline);




//======================================REDUCE=============================================

//перебирає оригінальний масив поелементно
// значення, що повертає залежить від розробника

// const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 20, 25, 90];

// const total = num.reduce((acc, item, index, arr) => {//acc - акомулятор в який ми зберігаємо проміжні дані
//     return acc + item;
// }, 0)


// console.log(total);

// const salary = {
//     mango: 1200,
//     poly: 2000,
//     ajax: 1500,
// }

// const total = Object.values(salary).reduce((acc, item) => acc + item);


// console.log(total);


//РОЗРАХУВАТИ ЗАГАЛЬНУ КІЛЬКІСТЬ ГОДИН

// const players = [
//     { id: "player-1", name: "Mango", timePlayed: 310, points: 54, online: false },
//     { id: "player-2", name: "Poly", timePlayed: 470, points: 92, online: true },
//     { id: "player-3", name: "Kiwi", timePlayed: 230, points: 48, online: true },
//     { id: "player-4", name: "Ajax", timePlayed: 150, points: 71, online: false },
//     { id: "player-5", name: "Chelsy", timePlayed: 110, points: 48, online: true },
// ];

// const hours = players.reduce((acc, player) => acc + player.timePlayed, 0);


// console.log(hours);



//=====================================toSorted=========================================
//не змінює вихідний масив а поевртає новий

// const arr = [1, 22, 2, 5, 33, 7, 8, 45, 9];

// const sorted = arr.toSorted()

// console.log(sorted);

// const letters = ["B", "a", "b", "A"];

// const sorted = letters.toSorted((a, b) => a.localeCompare(b));
// console.log(sorted);


//=====================compareFunction - функція порівняння====================================

// const arr = [1, 22, 2, 5, 33, 7, 8, 45, 9];

// const res1 = arr.toSorted((a, b) => a - b);
// const res2 = arr.toSorted((a, b) => b - a);
// console.log(res1);
// console.log(res2);



//===============================ЛАНЦЮЖКИ МЕТОДІВ===================================

// const num = [1, 22, 2, 5, 33, 7, 8, 45, 9];

// const arr = num.filter((num) => num > 5);

// const arr2 = arr1.map((num) => num * 2);

// const arr3 = arr2.toSorted((x, y) => x - y);

// використаємо ланцюжок методів

// const newArray = num
//     .filter((num) => num > 5)
//     .map((num) => num * 2)
//     .toSorted((x, y) => x - y)


// console.log(newArray);
// console.log(arr2);
// console.log(arr3);

//===============================ключове слово this=======================================================================================================================

//this - об'єкт в контексті якого викликається наша функція/// зліва через крапочку від нашої функції

//==============ГЛОБАЛЬНИЙ КОНТЕКСТ===================

// function foo() {
//     console.log(this);
    
// }
// foo();

// якщо викликати функц як метод об'єкту

// const user = {
//     name: "Mango",
//     showThis() {
//         console.log(this);
//     }
// }

// user.showThis();

//====================================
// СТРІЛОЧНІ ФУНКЦІЇЇ. ЧОМУ НЕ ВИКОРИСТОВУЄМО СТРІЛОЧНІ ФУНКЦ. ЯК МЕТОДИ ОБ'ЄКТУ?
// В СТРІЛОЧНИХ ФУНКЦІЯХ this ІНІЦІАЛІЗУЄТЬСЯ В МОМЕНТ СТВОРЕННЯ, А НЕ В МОМЕНТ ВИКЛИКУ.
// ПРОСТИМИ СЛОВАМИ МИ НЕ ОТРИМАЄМО ПОСИЛАННЯ НА ОБ'ЄКТ, ЯКИЙ ВИКЛИКАЄ МЕТОД/ФУНКЦІЮ


// const user2 = {
//     name: "Mango",
//     showThis: () => {
//         console.log(this);
//     }
// }

// user2.showThis();

//==================================КОНТЕКСТ МЕТОДІВ ОБ'ЄКТІВ===============================================================

// function foo() {
//     console.log("foo", this);
    
// }

// const user2 = {
//     name: "Mango",
// }

// user2.showThis = foo;
// console.log(user2.showThis);

// user2.showThis();


//========================ВИКЛИК БЕЗ КОНТЕКСТУ, АЛЕ ОГОЛОШЕНА ЯК МЕТОД ОБ'ЄКТУ====================================

// const user2 = {
//     name: "Mango",
//     showThis: () => {
//         console.log(this);
//     }
// }

// const foo = user2.showThis;

// foo();

//========================КОНТЕКСТ У КОЛБЕК ФУНКЦІЯХ====================================

// ЯКЩО ПЕРЕДАВАТИ МЕТОД ОБ'ЄКТУ ЯК КОЛБЕК ФУНКЦІЮ ВІН ВТРАЧАТИМЕ СВІЙ КОНТЕКСТ


// const user = {
//     name: "Mango",
//     showThis() {
//         console.log("showThis", this);
//     }
// }

// function foo(callback) {
//     // callback()
//     console.log(callback);
//     callback()
// }

// // foo(() => console.log("lalala"));
// foo(user.showThis);
//----------------------------------------------------------------
// const foo = () => {
//     console.log(this);
    
// }
// foo()

//========================ЗАДАЧКИ====================================

// написати метод, який приймає назву каменю
// розраховує та повертає загальну вартість каменів з таким ім'ям, ціною та кількістю

// const chopShop = {
//     stones: [
//         { name: "Emerald", price: 1000, quantity: 3 },
//         { name: "Diamond", price: 1500, quantity: 2 },
//         { name: "Sapphire", price: 1200, quantity: 4 },
//         { name: "Ruby", price: 2000, quantity: 5 },
//     ],
//     calcTotalPrice(stoneName) {
//         // console.log(this.stones); - достукаюся до об'єкта;
//         const stone = this.stones.find(item => item.name === stoneName); // поверни мені item у якого властивість name яка дорівнює вхідному параметру(у виклиці методу)

//         if (!stone) {
//             return `${stoneName} not found`;
//         }
//         return stone.price * stone.quantity;
//     }
// };

// console.log(chopShop.calcTotalPrice("Sapphire"));
// console.log(chopShop.calcTotalPrice("Emerald"));
// console.log(chopShop.calcTotalPrice("Diamond"));
// console.log(chopShop.calcTotalPrice("Ruby"));
// console.log(this.stones);


//===============================КОНТЕКСТ ВИКОНАННЯ ФУНКЦІЇ. МЕТОДИ: call, apply, bind=============================

// function foo(x, y) {
//     console.log(this);
    
// }

// const objA = {
//     a: 5,
//     b: 10,
// }

// const objB = {
//     a: 500,
//     b: 100,
// }
// // objA.funA = foo; // створили властивість об'єкта в яку передали посилланя на функцію
// // foo.call(objA, "lalala", 5);// передає в this об'єкт;
// // foo.call(objB);

// //-------------------------------

// foo.apply(objA, [10, "tututu", [1, 2, 3]]);// різниця з методом call полягає в тому, що всі параметри передаються масивом (окрім першого - об'єкта)

//============================================================

// function changeColor(newColor) {
//     console.log("changeColor", this);
//     this.color = newColor;
    
// }

// const hat = {
//     color: "black"
// }

// const sweater = {
//     color: "red"
// }

// // changeColor.call(hat, "blue")
// // console.log(hat);

// // changeColor.apply(sweater, ["yellow"])
// // console.log(sweater);

// const changeHatColor = changeColor.bind(hat, "orange");
// changeHatColor();
// console.log(hat);

// const changeSweaterColor = changeColor.bind(sweater);
// changeSweaterColor("green");
// console.log(sweater);


//============================================================


// const counter = {
//     value: 0,
//     increment(num) {
//         console.log("increment", this);
//         this.value += num;
//     },

//     decrement(num) {
//         console.log("decrement", this);
//         this.value -= num;
//     }
// }

// function foo(num, callback) {
//     callback(num)
// }

// foo(100, (num) => console.log(num + 5));

// foo(10, counter.increment.bind(counter));
// foo(5, counter.decrement.bind(counter));

// console.log(counter);

//=========================ПРОТОТИП ОБ'ЄКТА===================================

// // власні і невласні властивості

// const animals = {
//     legs: 4,
// }

// const dog = Object.create(animals);
// dog.name = "Patron";


// console.log(dog);
// // console.log(dog.name);
// // console.log(dog.legs);
// // console.log(dog.hasOwnProperty("name"));
// // console.log(dog.hasOwnProperty("legs"));

// // for (const key in dog) {
// //     if (dog.hasOwnProperty(key)) {
// //         console.log(dog[key]);
// //     }
// // }

// const keys = Object.keys(dog);
// console.log(keys);

//-----------------------ПОШУК ВЛАСТИВОСТЕЙ. ЛАНЦЮЖКИ ПРОТОТИПІВ----------------------------------------

// const objC = { c: "objC" };

// const objD = Object.create(objC);
// objD.d = "objD";

// const objB = Object.create(objD);
// objB.b = "objB";

// console.log(objC);
// console.log(objD);
// console.log(objB);




// ------------------------------------ЗАДАЧКИ------------------------------

// const cruiseControl = {
//     speed: 0,
//     brand: "BMW",
//     accelerate(a) {
// this.speed += a
//     },

//     decrease(b) {
//         if (this.speed <= 0) {
//             console.log("Авто зупинилось");
            
//         }
// this.speed -= b
//     }
// }


// cruiseControl.accelerate(50);
// cruiseControl.decrease(50);
// cruiseControl.decrease(50);


// console.log(cruiseControl.speed);

// ------------------------------------------------------

// const SPEED = 60;

// const bmw = {
//     brand: "BMW",
//     speed: 40,
// }
// const audi = {
//     brand: "AUDI",
//     speed: 80,
// }

// function speedSensor(maxSpeed) {

//     // if (this.speed <= maxSpeed) {
//     //     return `Автомобіль ${this.brand} рухається з безпечною швидкістю`
//     // }
//     // return `${this.brand} перевищує`
    

//     return this.speed <= maxSpeed ?
//         `Автомобіль ${this.brand} рухається з безпечною швидкістю` :
//         `${this.brand} перевищує`
// }

// console.log((speedSensor.call(bmw, SPEED)));
// console.log((speedSensor.call(audi, SPEED)));

//===========================КЛАСИ=================================
//---------Оголошення класу

//--Клас - інструмент для створення однотипних об'єктів

//--Створення класу //--Конструктор класу //--Методи класу //-- Приватні властивості //-- Геттери та сеттери //-- Статичні властивості

// class Car {
//     static qty = 0;//статична властівість яка доступна лише класу
//     static increment() {// статичний метод, який буде збільшувати значення кількості автомобілів. Додається в конструктор
//         Car.qty +=1
//     }
// //     constructor(brand, model, price) {
// //         this.brand = brand;
// //         this.model = model;
// //         this.price = price;
//     // }
    
//     #price;// робимо властивість price приватною. Це не дасть нам можливість звертатися до властивості безпосередньо з об'єкту.

//     constructor(obj) {//кращий варіант .
//         this.brand = obj.brand;
//         this.model = obj.model;
//         this.#price = obj.price;
//         Car.increment();
//     }
//         getModel() {
//         return this.model;
//     }
//     getBrand() {
//         return this.brand;
//     }
//     changeModel(newModel) {
//         this.model = newModel;
//     }
//     get price() {
//         return this.#price; // створення геттера для отримання приватної властивості
//     }

//     set price(newPrise) {// сеттер для зміни приватної властивості
//         if (this.checkType(newPrise, "number")) {
//             this.#price = newPrise;
//             return;
//         }
//         console.log("Invalid price");
        
//     }
//     checkType(data, type) {
// if (data === type) {
//     return true;
//         }
//         return false
//     }
// }
// // constructor - метод, що автоматично запускається одразу після створення екземпляру класу.
// // запускається в контексті новогостворенного об'єкта
// // const bmw = new Car("bmw", "X5", 10000);// bmw.constructor
// // const bmw = new Car("bmw", "X5", 10000);// bmw.constructor
// const bmw = new Car({brand: "bmw", model: "X5", price: 10000});
// const audi = new Car({brand: "audi", model: "A6", price: 11000});
// const audi2 = new Car({brand: "audi", model: "A6", price: 11000});
// const audi3 = new Car({brand: "audi", model: "A6", price: 11000});
// bmw.changeModel("Alpina");// всі методи зберігаються у прототипі
// // console.log(bmw.model);
// audi.changeModel("Q8");
// // console.log(audi.model);
// // console.log(bmw.price);// виклик геттеру. Взамодія як з властивістю без круглих дужок, не дивлячись на те що це метод.
// bmw.price = 12000;
// audi.price = 15000;// виклик сеттеру
// console.log(bmw.price);
// console.log(audi.price);
// console.log(Car.qty);

//============================НАСЛІДУВАННЯ КЛАСІВ================================

// class User {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
// }
// }

// class Student {
// constructor(name, gender) {
//         this.name = name;
//         this.gender = gender;
// }
// }

// //----------------------------------

// class Hero {
//     constructor(obj) {
//         this.name = obj.name;
//         this.xp = obj.xp;

//     }

//     gainXp(amount) {
//         console.log(`${this.name} reecceived ${amount} xp`);
//         this.xp += amount;
        
//     }
// }

// class Warrior extends Hero {
//     constructor(obj) {
//         super({ name: obj.name, xp: obj.xp });
//         this.weapon = obj.weapon;
//     }

//     attack() {
//         console.log("Atack");
        
//     }
// }

// const arthas = new Warrior ({name: "Arthas", xp: 1000, weapon: "sword"})

// console.log(arthas);

// class Mage extends Hero {
    
//     constructor(parameters) {
//         super({ name: obj.name, xp: obj.xp });
//         cast() {
//             console.log(`${this.name} cast spell`);
            
//         }
//     }
// }
// const khadgar = new Mage ({name: "Khadgar", xp: 900, spells: ["fireball", ["ice"]]})
//============================================================

// class Blogger {
//     constructor(obj) {
//         this.email = obj.email;
//         this.age = obj.age;
//         this.numberOfPosts = obj.numberOfPosts;
//         this.topics = obj.topics;
//     }

//     getInfo() {
//         return `User ${this.email} is ${this.age} years old made ${this.numberOfPosts} posts`
//     }

//     updatePost(value) {
//         this.numberOfPosts += value
//     }
// }
// const petya = new Blogger( {
//     email: "hananamity@gmail.com",
// age: 22,
// numberOfPosts: 10,
// topics: ["tech", "games"],
// })
// petya.updatePost(10);
// console.log(petya);
// console.log(petya.getInfo());


//============================================================

/**
 * Напиши клас User який створює об'єкт із властивостями login та email.
 * Оголоси приватні властивості #login та #email, доступ до яких зроби через
 * гетер та сетер login та email.
 */

// class User {
//     #login;
//     #email;

//     constructor(login, email) {
//         this.#login = login;
//         this.#email = email;
//     }

//     get login() {
//         return this.#login;
//     }

//     set login(newLogin) {
//         this.#login = newLogin;
//     }

//     get email() {
//         return this.#email;
//     }

//     set email(newEmail) {
//         this.#email = newEmail;
//     }
// }


// const alice = new User("Alice", "alice@gmail.com")

