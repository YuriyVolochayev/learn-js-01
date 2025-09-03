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

// function maskify(cc) {
//     let str = '';
    
//     for (var i = 0; i < cc.length - 4; i++) {
//         str += "#";
//     }

//     return str+cc.slice(cc.length - 4,cc.length)
    
// }
// console.log(maskify(prompt()));
    
// function validatePIN (pin) {
//   //return true or false
//     for (let i = 0; i < pin.length; i++) {
//     if(!pin[i].match(/[0-9]/)) {
//       return false;
//     } else {
//       return true;
//     }
//   }
// }

// function longest(s1, s2) {
//     const newStr = s1 + s2;
    
// const obj = {};
  
//   for(let i = 0; i < newStr.length; i++){
//       obj[newStr[i]] = newStr[i];
     
      
//   }
//     //   return Object.values(obj).sort().join("");
//     console.log(Object.values(obj).sort().join(""));
    
// }

// longest("aretheyhere", "yestheyarehere")