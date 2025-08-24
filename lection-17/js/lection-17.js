// // Local Storage/ В НЬОМУ ЗБЕРІГАЄТЬСЯ ІНФОРМАЦІЯ НА СТОРОНІ КЛІЄНТА(В БРАУЗЕРІ)

// const LS_KEY = "Array of names";
// const names = ["Alice", "Petya", "Yurii"];

// localStorage.setItem(LS_KEY, names);// setItem метод який використовується для завантаження данних в localStorage

// // все що ми ложимо в Local Storage перетворюється на рядок

// localStorage.setItem(LS_KEY, JSON.stringify(names));// метод stringify перетворить масив в нормальний рядок валідний JSON
// // ВИСНОВОК:
// // ЯКЩО НАМ ПОТРІБНО ПОКЛАСТИ ПРИМІТИВНИЙ ТИП ДАННИХ ПРОСТО БЕРЕМО І КЛАДЕМО.
// // ЯКЩО НАМ ТРЕБА ПОКЛАСТИ СКОАДНИЙ ТИП ДАННИХ (О'ЄКТ, МАСИВ) ВИКОРИСТОВУЄМО JSON.stringify.



// //ЗБЕРЕЖЕННЯ
// // ЧОМУ ТРЕБА ВИКОРИСТОВУВАТИ МЕТОД JSON

// const value = localStorage.getItem(LS_KEY)// в метод getItem передається ім'я ключа - значення під яким хочемо зберегти

// console.log(value);// ОТРИМАЄМО РЯДОК З СИНТАКСИСОМ МАСИВУ.

// // ЩОБ ОТРИМАТИ МАСИВ НЕОБХІДНО ПРОПИСАТИ:

// console.log(JSON.parse(value));

// //  ДЛЯ ВИДАЛЕННЯ ЗАПИСУ ІЗ local storage

// localStorage.removeItem(LS_KEY)

// //LocalStorage не може зберігати функціїї


//==-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

const SRORAGE_KEY = "feedback-msg"

const form = document.querySelector(".feedback-form");

const textarea = document.querySelector("textarea");

textarea.addEventListener("input", handleInput);

form.addEventListener("submit", handleSubmit);

popelateTextArea()

/*
*Скасовуємо стандартну поведінку
*Видаляємо та очищаємо зі сховища
*Очіщуємо форму
*/

function handleInput(e) {
    const message = e.target.value;

    localStorage.setItem(SRORAGE_KEY, message);
}

/*
Отримуємо значення зі сховича
Якщо там щось було, оновлюємо DOM
*/

function popelateTextArea(e) {
    const message = localStorage.getItem(SRORAGE_KEY);
    if (message) {
        textarea.value = message;
    }
    
}

function handleSubmit(e) {
    e.preventDefault()
    e.currentTarget.reset();
    localStorage.removeItem(SRORAGE_KEY);


    console.log("send");
    
}