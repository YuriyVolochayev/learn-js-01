// https://jsonplaceholder.typicode.com/todos

const list = document.querySelector('.todo-list');

fetch('https://jsonplaceholder.typicode.com/todos')
  .then(res => {
    console.log('then', res);
    if (!res.ok) {
      throw new Error('Oops');
    }

    return res.json();
  })
  .then(data => {
    list.insertAdjacentHTML('beforeend', createMarkup(data));
  })
  .catch(error => {
    console.log('catch', error);
  });

function createMarkup(arr) {
  return arr
    .map(
      ({ id, title, comleted }) => `
          <li data-id="${id}" class="list-item">
              <input type="checkbox" ${comleted && 'checked'}/>
              <p>${title}</p>
    </li>
    `
    )
    .join('');
}
