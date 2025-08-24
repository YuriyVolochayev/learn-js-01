//=-=-=-=-=-=ДЕСТРУКТИРИЗАЦІЯ ОБ'ЄКТА-=-=-=-=-

// const user = {
//     name: "Alice",
//     age: 30
// }

// const { name, age } = user;// будуть створені змінні name та age в які будуть присвоєнні одноіменні властивості з об'єкта user
// const { city } = user;


//встановлюємо значення за замовчуванням



// const { name, age, city = "Dnipro" } = user;// якщо властивості не буде використається властивість за замовчуванням

// const user = {
//     name: "Alice",
//     age: 30,
//     city: "Lviv"
// }

//уявімо ситуаціяю коли окремо від об'єкта вже існуює змінна city

// const city = "Dnipro";

// const { name, age, city = "Dnipro" } = user;
// console.log(city);// буде помилка і код зупинеться так двох змінних з однаковим ім'ям не може бути

// для того щоб уникнути цього треба витянути властивість і покласти в іншу змінну
//для цього використовується наступний синтаксис



// const { name, age, city: userCity } = user;
// console.log(userCity);


// const user = {
//     name: "Alice",
//     age: 30,
//     city: "Lviv",
//     hobby: "dancimg",
//     favoriteMovie: "Seven"
// }

// const { name, ...rest } = user;//якщо зліва від знаку присвоєння значить це rest оператор

// // rest оператор візьме решту значень і покладе їх в змінну яку ми створили.
// // Вийде залишковий шматочок об'єкту, те що не було деструктиризовано нами і створить новий об'єт. Використовується в кінці.

// console.log(rest);

// =-=-=-=-=-=-=-=-=-=-=-ГЛИОКА ДЕСТРУКТИРИЗАЦІЯ ОБ'ЄКТА-=-=-=-=-=-=-=-=-=-=-=

// const user = {
//     name: "Alice",
//     age: 30,
//     city: "Lviv",
//     skills: {
//         html: true,
//         js: true,
//         css: false
//     }
// }

// const { skills: {html, js, css} } = user;

// console.log(html);

// =-=-=-=-=-=-=-=-=-=-=-ДЕСТРУКТИРИЗАЦІЯ МАСИВУ-=-=-=-=-=-=-=-=-=-=-=

// const arr = ["Movie", "Show", "Music", "Cartoon", "Game"];

// // const [first, second, third, fourth, fifth] = arr;

// // console.log(fifth, second, third);

// // якщо треба витянути лише декілька лементів. Скажімо 1, 3, 5

// const [first, , third, , fifth] = arr;
// console.log(first, third, fifth);

// rest оператор використовується аналогічно об'єктам


//=-=-=-=-=-=-=-=-=ДЕСТРУКТУРИЗАЦІЯ ОБ'ЄКТА В ПАРАМЕТРАХ ФУНКЦІЇ-=-=-=-=-=-=-=-=-=

// const user = {
//     name: "Alice",
//     skills: {
//         html: true,
//         js: true,
//         css: false
//     }
// }

// function getUserInfo({name, skills: {html, js, css}}) {
//     console.log(`Hello! my name is ${name}. I know html - ${html}, js - ${js} and css - ${css}`);
// }

// getUserInfo(user);

//=-=-=-=-=-=-=ДЕСТРУКТИРИЗАЦІЯ ОБ'ЄКТА В ЦИКЛІ-=-=-=-=-=-=-=-=-=-

const users = [
    {name: "Cristopher Nolan"},
    {name: "Steven Spilberg"},
    {name: "James Cammeron"},
    {name: "Clint Eastwood"},
    {name: "Quentin Tarantino"}
]

// console.log(users);

//=-==-=-=-без деструктурації===-=-=-=-=-=-=-=-=

// const names = [];

// for(const i of users) {// в і потраплятимуть елементи масиву
//     names.push(i.name);
    
// }
// console.log(names);

//=-==-=-=-з деструктураці'.===-=-=-=-=-=-=-=-=
// перший спосіб
// const names = [];
// for (const { name } of users) {
//     names.push(name)
// }

// console.log(names);

//другий спосіб

// const names = [];

// for (const i of users) {
//     const { name } = i;
//     names.push(name)
// }

// console.log(names);


// =-=-=-=-=використаємо метод map=-=-=-=-=-

// const names = users.map(({name}) => name)
// console.log(names);



