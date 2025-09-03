// /*
// *метод setTimeout (callback, delay, args)
// */

// console.log("before");


// setTimeout(() => {
//     console.log("time 1");
    
// }, 2000);// метод приймає два аргументи - callback функція та час в мілісекундах через котрий вона повинна відпрацювати. Відкладено запускає функцію

// setTimeout(() => {
//     console.log("time 2");
    
// }, 1500);

// console.log("after");

//=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=ОЧИЩЕННЯ ТАЙМАУТА ЗА ДОПОМОГОЮ clearTimeout=-=-=-=-=-=-=-=-=-

// const logger = (time) => {
//     console.log(`Log after ${time}`);
// }
// const timeId = setTimeout(logger, 2000, "2s");//передаємо в змінну ідентифікатор

// console.log(timeId);

// clearTimeout(timeId)


//=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=МОЖЛИВІСТЬ ПЕРЕДАВАТИ ПАРАМЕТРИ ДЛЯ КОЛБЕКУ=-=-=-=-=-=-=-=-=


// setTimeout((name) => {
//     console.log(`Helo ${name}`);
    
// }, 2000, "Alice");


//=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=ІНТЕРВАЛИ=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// setInterval(() => {
//     console.log("interval");
    
// }, 1000);

//=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=ОЧИЩЕННЯ ІНТЕРВАЛІВ=-=-=-=-=-=-=-=-=-=-=-=-=-=-

// const logger = (name) => {
//     console.log(`Helo ${name}` );
    
// }
// // за аналогією з setTimeout, setInterval в момент свого виклику повертає свій унікальний числовий ідентифікатор, який ми можемо зберегти в змінну
// const intervalId = setInterval(logger, 1500, "Yura");// зміна приймає значення те що поверне метод під час свого виклику

// // щоб очистити інтервал використовуються метод clearInterval

// setTimeout(() => {
//     clearInterval(intervalId);
// }, 5000);

//==-=-=-=-=-=-=-=-=-=-=-=-=-= ЗАДАЧА № 1 =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

/**
 * - ПОКАЗУЄМО ТА ХОВАЄМО, ДОДАЮЧИ / ВИДАЛЯЮЧИ КЛАС is-visible
 * - ХОВАЄМО ЧЕРЕЗ ПЕВНИЙ ЧАС
 * - ХОВАЄМО ПРИ КЛІЦІ
 */

// const NOTIFICATION_DELAY = 3000;

// const notification = document.querySelector(".js-alert");
// notification.addEventListener("click", handleClick);

// let timerId = null;

// showNotification();

// function handleClick() {
//     hideNotification();
//     clearTimeout(timerId);
// }

// function showNotification() {
//     notification.classList.add("is-visible");

//     timerId = setTimeout(() => {
//         console.log("hide");
//         hideNotification();
//     }, NOTIFICATION_DELAY);
// }

// function hideNotification() {
//     notification.classList.remove("is-visible");
// }