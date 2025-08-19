// const btn = document.querySelector(".click-button");
// const box = document.querySelector(".square");

// btn.addEventListener("click", handleClick);// приймає два аргументи. Перший - подію, другий - функція. Функцію можна розписати в аргумента, або створити окрему змінну та передати посиланням.
// box.addEventListener("click", handleClick);

// let step = 0;

// function handleClick() {
//     step += 50;
//     box.style.marginTop = `${step}px`;
//     box.style.marginLeft = `${step}px`;
// }

//=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=


// const checkbox = document.querySelector(".checkbox")
// checkbox.addEventListener("change", () => {
//     console.log(step += 1);
// })

// const imput = document.querySelector(".input");
// imput.addEventListener("input", hendleClick2);// addEventListener в функцію передає параметром об'єкт подіїї - "event"

// function hendleClick2(event) {
//     console.log(event.target.value);
    
// }

//=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

//focus, blur

// const username = document.querySelector(".username");

// username.addEventListener("blur", (event) => {
//     const name = event.target.value;

//     alert(`Hello ${name}`)
// })

//=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// в імпутах обов'язково повинен бути атрибут name з унікальним значенням. Саме через нього ми слухаємо той чи інший елемент форми
// const feedbackForm = document.querySelector(".feedback-form");// події відправлення форми ми завжди вішаємо на саму форму а не на її елементи

// feedbackForm.addEventListener("submit", handleSubmit);

// function handleSubmit(event) {
//     event.preventDefault();

//     const elements = event.target.elements;

//     const info = {
//         email: elements.email.value,
//         password: elements.password.value,
//         comment: elements.coments.value
//     }
//     console.log(info);
//     event.target.reset();
// }
//=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-ТИПИ ПОДІЙ keypress, keydown, keyup. ОБМЕЖЕННЯ keypress. ВЛАСТИВОСТІ key та code=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

//key - отримуємо символ який ввожимо

//code - повертає фізичний код клавіші. Не враховує регістри, мови.

// document.addEventListener("keydown", hadleKeyPress);

// function hadleKeyPress(event) {
//     // console.log(event.key);
//     console.log(event.code);
    
// }

//----------------------обробка комбінацій клавіш-------------------------------------------------------

// document.addEventListener("keydown", hadleKeyPress);

// function hadleKeyPress(event) {
//     if (event.ctrlKey && event.code === "KeyC") {
//         console.log('ok');
//         event.preventDefault();
        
//     }
// }

//=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-ПОДІЇ МИШІ=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
//**Mouseenter і mouseleave(цу ховер). Корсор заходить в певну область  і залишає її

// const bigBox = document.querySelector('.big-square');

// bigBox.addEventListener('mouseenter', onMouseEnter);
// bigBox.addEventListener('mouseleave', onMouseLeave);

// function onMouseEnter() {
//     console.log('mouseenter');
    
// }

// function onMouseLeave() {
//     console.log('mouseleave');
    
// }

// **Mouseover i mouseout. Реагує на вхід та вихід з батьківських та дочірніх елементів

// const bigBox = document.querySelector('.big-square');

// bigBox.addEventListener('mouseover', onMouseEnter);
// bigBox.addEventListener('mouseout', onMouseLeave);

// function onMouseEnter() {
//     console.log('mouseover');
    
// }

// function onMouseLeave() {
//     console.log('mouseout');
    
// }
// **Mousemove (chatty event - балакуча подія)

// bigBox.addEventListener('mousemove', onMouseMove);

// function onMouseMove() {
//     console.log('mousemove');
    
// }




//=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=


const cars = [
    {
      id: 1,
      car: "Audi",
      type: "A6",
      price: 30000,
      img: "https://static.wixstatic.com/media/90aeac_387e937e295a4f8586d9ff9d09b60cff~mv2.jpg/v1/fill/w_520,h_338,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/90aeac_387e937e295a4f8586d9ff9d09b60cff~mv2.jpg",
    },
    {
      id: 2,
      car: "Honda",
      type: "Civic",
      price: 12000,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTCOHzdE-dK6WK7ax8NzQolTcCWA_jhJD-CRGWfqKJIJuGs8ML_-OyiDwzsdC8jOi_K10&usqp=CAU",
    },
    {
      id: 3,
      car: "Audi",
      type: "Q7",
      price: 40000,
      img: "https://upload.wikimedia.org/wikipedia/commons/8/8b/2017_Audi_Q7_S_Line_Quattro_3.0_Front.jpg",
    },
    {
      id: 4,
      car: "BMW",
      type: "5 siries",
      price: 9000,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUH96e58ynLO8SXMsFTNYkJci79eAZ8CyqcZsZ8snvzz2sfLl3Ojd1BQoaWBcrMKWvSYc&usqp=CAU",
    },
    {
      id: 5,
      car: "Honda",
      type: "Accord",
      price: 20000,
      img: "https://upload.wikimedia.org/wikipedia/commons/7/76/2021_Honda_Accord_Sport_%28facelift%29%2C_front_11.30.21.jpg",
    },
    {
      id: 6,
      car: "Volvo",
      type: "XC60",
      price: 7000,
      img: "https://www.volvocars.com/media/shared-assets/master/images/pages/my19/xc60-my19/accessories/xc60my19_accessories_exteriorfeature2_1.jpg?w=320",
    },
];


const form = document.querySelector(".js-form");
const container = document.querySelector(".js-list");

function createMarkup(arr) {
  return arr.map(car => `
      <li class="car-card" data-id="${car.id}">
        <img src="${car.img}" alt="${car.type}" class="car-image"/>
        <h1 class="car-title">${car.car}</h1>
        <h3 class="car-type">${car.type}</h3>
        <span class="car-price">${car.price}$</span>
      </li>
    `).join("")
}

container.style.display = "flex";
container.style.flexWrap = "wrap";
container.style.gap = "20px";

container.insertAdjacentHTML("beforeend", createMarkup(cars));

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const query = event.target.elements.query;
  const options = event.target.elements.options;
  const optionValue = options.value; // car - type
  
  
  const result = cars.filter(item => {
    console.log(item[optionValue])
    return item[optionValue].toLowerCase().includes(query.value.toLowerCase())
  })
  
  container.innerHTML = createMarkup(result);
}


//=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
//=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
//=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

