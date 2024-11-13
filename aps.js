


const tbody = document.querySelector('tbody')

const createElement = (tag, innerText = '') => {
    const element = document.createElement(tag);
    element.innerText = innerText;
   
    return element;
}


const creatRow = (task) => {

const { id, title, created_at , status } = task;

const tr = createElement('tr');
const tdTitle = createElement('td', 'titulo da task');

}


createRow({})