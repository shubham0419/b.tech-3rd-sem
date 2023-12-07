const form = document.getElementById('addForm');

const taskList = document.getElementById('items');

// console.log(form);

// adding task in totdo - list
form.addEventListener('submit', (e) => {
    e.preventDefault();
    // console.log(e.target.children[0].value);
    var task = e.target.children[0].value;

    var li = document.createElement('li');
    li.classList.add("list-group-item");
    li.innerText = task;

    const btn = document.createElement('button')
    btn.setAttribute('class', 'btn list-btn btn-sm float-right delete');
    btn.innerText = 'X';
    li.append(btn);
    taskList.append(li);
    e.target.children[0].value = '';
})

// Delete task
const delteEle = document.getElementById('items');

delteEle.addEventListener('click', (e) => {
    // console.log(e.target);
    if (e.target.classList.contains('delete')) {
        e.target.parentElement.remove();
    }
})

// Search Filter
const filter = document.getElementById('filter');

const listItem = document.getElementsByClassName('list-group-item');

filter.addEventListener('keyup', (e) => {
    // console.log(e.target.value);

    for (let i = 0; i < listItem.length; i++) {
        if (listItem[i].innerText.toLowerCase().includes(e.target.value)) {
            listItem[i].style.display = 'block';
        } else {
            listItem[i].style.display = 'none';
        }
    }
})

// Themes
const theme = document.getElementById('theme');
const body = document.getElementsByTagName('body')[0];

theme.addEventListener('click', (e) => {
    var color = e.target.getAttribute('id');

    removeClass();
    body.classList.add(color);
})

function removeClass() {
    for (let i = 0; i < body.classList.length; i++) {
        body.classList.remove(body.classList[i]);
    }
}
