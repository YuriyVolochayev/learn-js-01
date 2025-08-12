// const btn = document.querySelector("#magic-button")
// console.log(btn);
//-----------------------------------------------------

// const list = document.querySelector(".list")
// console.log(list);
//-----------------------------------------------------

// const listItem = document.querySelector(".list-item")
// const listItemAll = document.querySelectorAll(".list-item")
// console.log(listItem);
// console.log(listItemAll);
// console.log(listItemAll[3]);
//-----------------------------------------------------

// const list = document.querySelector(".list")

// console.dir(list);
// console.dir(list.children);

// const firstElement = list.firstElementChild
// const lastElement = list.lastElementChild

// console.log(firstElement);
// console.log(lastElement);

//---------------------------------------------

// const lalaElement = list.children[1];

// console.log(lalaElement);
// console.log(lalaElement.nextElementSibling);
// console.log(lalaElement.previousElementSibling);
// console.log(lalaElement.parentNode);


//==========================================================================================

// const mainImg = document.querySelector(".main-img")
// console.log(mainImg.src);
// console.log(mainImg.alt);

// mainImg.alt = "kurwa";

// console.log(mainImg.alt);

// const mainTitle = document.querySelector(".title")
// console.dir(mainTitle.textContent);


// mainTitle.textContent = "ТРЕНУЄМОСЬ-НАВЧАЖМОСЬ";
// console.dir(mainTitle.textContent);

//==============АТРИБУТИ=============================
// методи get, set, remove, has

//можна отримати значення якось атрибута

// const mainImg = document.querySelector(".main-img")
// mainImg.alt = "kurwa";

// console.log(mainImg.alt);

// console.log(mainImg.getAttribute("src"));

// mainImg.setAttribute("alt", "didko")

// console.log(mainImg.alt);

// mainImg.removeAttribute("width");

// console.log(mainImg.hasAttribute("width"));
// console.log(mainImg.hasAttribute("src"));


//===========================DATA-АТРИБУТИ================================

// const buttons = document.querySelectorAll(".btn")
// console.log(buttons);
// // buttons[2].dataset.action = "red"
// console.log(buttons[2].dataset.action);

//====================ІНТЕРФЕЙС classlist============================

// - add
// - remove
// - toggle
// - replace
// - contains



// const linkEl1 = document.querySelector('.list-link[href="/trulala"]');
// console.log(linkEl1);

// // linkEl1.classList.add("list-link--current");
// // linkEl1.classList.remove("list-link--current");


// linkEl1.classList.toggle("list-link--current");// якщо клас є - видалить, якщо немає - додасть
// linkEl1.classList.replace("list-link--current", "pong");// приймає два аргуиенти - який хочемо і на який хочемо замінити
// console.log(linkEl1.classList.contains("pong"));

//========================================СТВОРЕННЯ ЕЛЕМЕНТІВ==========================================================

// const titleElement = document.createElement("h1");// створєємо заголовк
// titleElement.textContent = "TITLE PUM-PU-RUM";// додаємо назву заголовка
// titleElement.classList.add("page-title");// створюємо клас

// // метод prepend - додає клкмент перед усіма дочірніми елементами

// document.body.prepend(titleElement);

// // метод append - додає eлeмент після усіх дочірніми елементами

// // document.body.append(titleElement);

// console.log(titleElement);

//------------------------------створюємо зображення--------------------------------------------

const newImg = document.createElement("img");

newImg.src = "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg";
newImg.alt = "wild hunt"
newImg.width = 320;



const titleElement = document.createElement("h1");
titleElement.textContent = "TITLE PUM-PU-RUM";
titleElement.classList.add("page-title");

const heroElement = document.querySelector(".hero");

heroElement.append(newImg, titleElement);// створений елемент можна додати тільки один раз, тілдьки в одне місце

//=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-створюємо та додаємо новий елемент списку=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

const listElement = document.createElement("li");
listElement.classList.add("list-item");

const linkElement = document.createElement("a");
linkElement.classList.add("list-link");
linkElement.href = "/wepidu";
linkElement.textContent = "WEPIDU"

listElement.append(linkElement);

const list = document.querySelector(".list");

list.append(listElement);

//=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-СТВОРЕННЯ ТА ДОДАВАННЯ КОЛЕКЦІЙ=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

const options = [
    { label: "червоний", color: '#F44336' },
    { label: "зелений", color: '#4CAF50' },
    { label: "синій", color: '#2196F3' },
    { label: "сірий", color: '#607D8B' },
    { label: "рожевий", color: '#E91E63' },
    { label: "індіго", color: '#3F51B5' },
];

const colorPickerContainerEl = document.querySelector(".color-picker");

// const elements = options.map(options => {
//     const buttonElement = document.createElement("button");
//     buttonElement.classList.add("color-picker-option");
//     buttonElement.textContent = options.label;
//     buttonElement.style.backgroundColor = options.color;

//     return buttonElement;
// })

// colorPickerContainerEl.append(...elements);

//=-=-=-=-=-=-=-=-=-=-=-створимо функцію-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

const createMarkup = (arr) => {
    return arr.map((options) => {
        const buttonElement = document.createElement("button");
        buttonElement.classList.add("color-picker-option");
        buttonElement.textContent = options.label;
        buttonElement.style.backgroundColor = options.color;

        return buttonElement;
    })
}
colorPickerContainerEl.append(...createMarkup(options));

//=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-СТВОРЕННЯ ТА ДОДАВАННЯ КОЛЕКЦІЙ=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// const oneMoreTitle = document.querySelector(".one-more-title");

// //для того щоб записати щось(наприклад теги)

// // oneMoreTitle.innerHTML = '<a href="#">we make bisquits</a>';//якщо присвоїти порожній рядок "" - він видалить абсолютно все; якщо додаєш нове значення то старе видаляється

// oneMoreTitle.insertAdjacentHTML("beforebegin", '<a href="#">we make bisquits</a>')// приямає два елементи - позиція куди треба вставити і що треба вставити
// oneMoreTitle.insertAdjacentHTML("afterbegin", '<a href="#">we make bisquits</a>')// приямає два елементи - позиція куди треба вставити і що треба вставити
// oneMoreTitle.insertAdjacentHTML("beforeend", '<a href="#">we make bisquits</a>')// приямає два елементи - позиція куди треба вставити і що треба вставити
// oneMoreTitle.insertAdjacentHTML("afterend", '<a href="#">we make bisquits</a>')// приямає два елементи - позиція куди треба вставити і що треба вставити

// console.log(oneMoreTitle);



//=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-


const transactionHistory = [
    {
      id: '758d5283-358e-4fbb-b222-a17fd04e8916',
      amount: '179.07',
      date: '2012-02-01T22:00:00.000Z',
      business: 'Bogan - DuBuque',
      name: 'Auto Loan Account 7313',
      type: 'deposit',
      account: '19808943',
    },
    {
      id: 'f0463ec4-7104-4adb-a41c-b1c7549055f8',
      amount: '930.87',
      date: '2012-02-01T22:00:00.000Z',
      business: 'Legros, Weimann and Treutel',
      name: 'Auto Loan Account 0721',
      type: 'invoice',
      account: '38277848',
    },
    {
      id: '6c0e5a78-ad9f-46af-8299-44b77f5099d5',
      amount: '704.53',
      date: '2012-02-01T22:00:00.000Z',
      business: 'Beatty, Wisozk and Koch',
      name: 'Savings Account 1894',
      type: 'withdrawal',
      account: '76727204',
    },
    {
      id: '16bd2a9d-7b0e-418f-a75c-7076e8ab6175',
      amount: '656.81',
      date: '2012-02-01T22:00:00.000Z',
      business: 'Hane - Bode',
      name: 'Personal Loan Account 2316',
      type: 'withdrawal',
      account: '27462350',
    },
    {
      id: 'd328680d-4aa5-40ee-912b-9b5149b602e6',
      amount: '280.21',
      date: '2012-02-01T22:00:00.000Z',
      business: 'Schulist - Waelchi',
      name: 'Savings Account 9032',
      type: 'payment',
      account: '99923313',
    },
    {
      id: 'e51fb348-8523-4e39-915f-39687ca4eebf',
      amount: '303.06',
      date: '2012-02-01T22:00:00.000Z',
      business: 'Swaniawski - Hayes',
      name: 'Checking Account 0573',
      type: 'invoice',
      account: '75028346',
    },
    {
      id: 'cd727197-5ffb-45a7-9bf5-9d08092a1cce',
      amount: '462.59',
      date: '2012-02-01T22:00:00.000Z',
      business: 'Berge - Reinger',
      name: 'Personal Loan Account 8173',
      type: 'invoice',
      account: '93437240',
    },
    {
      id: '247e150a-71ba-4df7-9836-5bb400e012bb',
      amount: '242.49',
      date: '2012-02-01T22:00:00.000Z',
      business: 'Stroman Inc',
      name: 'Savings Account 1383',
      type: 'withdrawal',
      account: '18476423',
    },
    {
      id: '6224c740-ff23-429d-854a-c7b310f7653b',
      amount: '770.94',
      date: '2012-02-01T22:00:00.000Z',
      business: 'Johns - Pagac',
      name: 'Auto Loan Account 1392',
      type: 'invoice',
      account: '07680863',
    },
    {
      id: '79ccb1dd-6544-47cc-9a40-ea453985a748',
      amount: '788.40',
      date: '2012-02-01T22:00:00.000Z',
      business: 'Ullrich, Shields and Koelpin',
      name: 'Personal Loan Account 8318',
      type: 'invoice',
      account: '07081761',
    },
];

const tableElement = document.querySelector(".js-transaction-table");

const createNewMarkup = (arr) => {
    return arr.map((item) => {
        return `
        <tr>
        <td>${item.id}</td>
        <td>${item.amount}</td>
        <td>${item.date}</td>
        <td>${item.business}</td>
        <td>${item.name}</td>
        <td>${item.type}</td>
        <td>${item.account}</td>
        </tr>
        `

    }).join("");// insertAdjacentHTML працює з рядками оу використовуємо метод join для переведення отриманого масиву в рядок
}

tableElement.insertAdjacentHTML("beforeend", createNewMarkup(transactionHistory));







