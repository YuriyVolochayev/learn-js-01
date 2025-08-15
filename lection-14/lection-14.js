const btn = document.querySelector(".click-button");
const box = document.querySelector(".square");

btn.addEventListener("click", handleClick);// приймає два аргументи. Перший - подію, другий - функція. Функцію можна розписати в аргумента, або створити окрему змінну та передати посиланням.
box.addEventListener("click", handleClick);

let step = 0;

function handleClick() {
    step += 50;
    box.style.marginTop = `${step}px`;
    box.style.marginLeft = `${step}px`;
}

//=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=


const checkbox = document.querySelector(".checkbox")
checkbox.addEventListener("change", () => {
    console.log(step += 1);
})

const imput = document.querySelector(".input");
imput.addEventListener("input", hendleClick2);// addEventListener в функцію передає параметром об'єкт подіїї - "event"

function hendleClick2(event) {
    console.log(event.target.value);
    
} 

//=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

//focus, blur

const username = document.querySelector(".username");

username.addEventListener("blur", (event) => {
    const name = event.target.value;

    alert(`Hello ${name}`)
})

//=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// в імпутах обов'язково повинен бути атрибут name з унікальним значенням. Саме через нього ми слухаємо той чи інший елемент форми
const feedbackForm = document.querySelector(".feedback-form");// події відправлення форми ми завжди вішаємо на саму форму а не на її елементи

feedbackForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();

    const elements = event.target.elements;

    const info = {
        email: elements.email.value,
        password: elements.password.value,
        comment: elements.coments.value
    }
    console.log(info);
    event.target.reset();
}
//=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=






//=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
//=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
//=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
//=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
//=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

