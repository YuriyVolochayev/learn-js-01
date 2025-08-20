
//СПЛИВАННЯ ПОДІЙ
// event.target
// event.currentTarget)

const parent = document.querySelector(".parent");
const child = document.querySelector(".child");
const innerChild = document.querySelector(".inner-child");


parent.addEventListener("click", onParentClick);
child.addEventListener("click", onChildClick);
innerChild.addEventListener("click", onInnerChildClick);


innerChild.addEventListener("click", () => {
    console.log("lalala");
    
});


function onParentClick(event) {
    console.log("onParentClick target", event.target);
    console.log("onParentClick currentTarget", event.currentTarget);
}

function onChildClick(event) {
    console.log("onChildClick target", event.target);
    console.log("onChildClick currentTarget", event.currentTarget);
}

function onInnerChildClick(event) {
    event.stopPropagation();
    event.stopImmediatePropagation();
    console.log("onInnerChildClick target", event.target);
    console.log("onInnerChildClick currentTarget", event.currentTarget);
}

//ВИСНОВОК:
// В ОБ'ЄКТІ ПОДІЇ event У ВЛАСТИВОСТІ target ЗНАХОДИТЬСЯ ЕЛЕМЕНТ НА ЯКОМУ ВІДБУЛАСЯ ПОДІЯ (БЕЗПОСЕРЕДНЬО КУДИ ТИЦЬНУЛИ)
// В currentTarget ЗНАХОДИТЬСЯ ЕЛЕМЕНТ ДЕ МИ ЦЮ ПОДІЮ ПІЙМАЛИ
//МЕТОД stopPropagation ЗУПИНЯЄ СПЛИВАННЯ ПОДІЇ


// ДОДАВАННЯ ПРОСЛУХОВУВАЧА ПОДІЙ НА КОЖЕН ЕЛЕМЕНТ

const boxContainer = document.querySelector('.box-container');
// console.log(boxContainer.children);

[...boxContainer.children].forEach(box => {
    box.addEventListener('click', handleClick);
    
})

function handleClick(event) {
    const color = event.target.dataset.color;
    console.log(color);
}

// ДЕЛЕГУВАННЯ ПОДІЙ
// слухач події ставить на один батьківський елемент

const boxArea = document.querySelector('.box-area');

boxArea.addEventListener('click', handleClick);

function handleClick(event) {
    if(!event.target.classList.contains("box")) {// відловлюємо клік не по квадратику
        return;
    }
    
    console.log(event.target.dataset.color);
    
}


//=-=-==-=-=-=-=-=-=-=-=-=-=-ЗАДАЧА=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

/**
 * Створи картки з товарами на основі масиву products,
 * приклад картки https://prnt.sc/KmgDlzqOIA3M
 *
 * Реалізуй делегування подій на колекції карток
 * Після кліку на картку повинно з'являтись модальне вікно
 * з детальною інформацією про продукт,
 * приклад модального вікна https://prnt.sc/vWNoCeZcw7ii
 *
 * Для реалізації модального вікна використай
 * бібліотеку basicLightbox (https://github.com/electerious/basicLightbox
 */

const products = [
    {
      id: 1,
      img: "https://www.vodafone.ua/shop/media/wysiwyg/novosti/Capture_1_large.JPG",
      name: "Monitor",
      price: 3000,
      description: "23-inch monitor with Full HD resolution.",
    },
    {
      id: 2,
      img: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTzWqRMI3HQiDfICHAmbArmaP4uOOIjfz0sDITv0dfkpb0mbbgX",
      name: "Laptop",
      price: 20000,
      description:
        "Lightweight and powerful laptop with a 15-inch display and SSD.",
    },
    {
      id: 3,
      img: "https://cdn.27.ua/799/66/39/6841913_1.jpeg",
      name: "Smartphone",
      price: 8000,
      description: "Equipped with a triple camera and a multi-core processor.",
    },
    {
      id: 4,
      img: "https://cdn.27.ua/799/b6/16/4371990_1.jpeg",
      name: "Tablet",
      price: 12000,
      description: "10-inch tablet with high performance and a Retina display.",
    },
];

const container = document.querySelector('.products');

container.insertAdjacentHTML("beforeend", createMarkup(products));
container.addEventListener('click', handleClick)


function createMarkup(arr) {//функція приймає масив і повертає результат роботи методу map над цим масивом. медот map приймає як аргумент фенкцію. Робимо її стрілочною і використовуємо неявне перетворення
    return arr.map(({id, img, name, price, description}) => `
        <li class="item product-item" data-id="${id}">
        <img src="${img}" alt="${description}" width=300">
        <h2>${name}</h2>
        <p>Ціна: ${price} грн</p>
        </li>
    `).join('')//метод join перетворить отриманий масив на рядок оскільки ми будемо використовувати
}

function handleClick(event) {
    if (event.currentTarget === event.target) {
        return
    }

    const currentProduct = event.target.closest('.product-item')// метод closest приймає в себе селектор найближчого батьківсбкого елементу який ми хочкмо отримати
    
    const id = currentProduct.dataset.id;

    const product = products.find(item  => item.id === Number(id));//використовуємо Number для того щоб перетворити рядок в число, адже в масиві у нас число а повернули з функції рядо

    const instance = basicLightbox.create(`
	<div class="modal">
    <img src="${product.img}" alt="${product.name}">
        <h2>${product.name}</h2>
        <h3>Ціна: ${product.price} грн</h3>
        <p>${product.description}</p>
    </div>
`)
    instance.show();
    
}

