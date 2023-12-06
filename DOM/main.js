// var h1 = document.getElementsByTagName('h1');
// console.log(h1[0]);

// var movie = document.getElementById('movie');
// console.log(movie);

// var listItem = document.getElementsByClassName('list-item');
// console.log(listItem);

// var ele = document.querySelector('.list-item');
// console.log(ele);

// var elements = document.querySelectorAll('.list-item');
// console.log(elements);

var para = document.getElementsByTagName('p')[0];

// // console.log(para.innerText);

// // console.log(para.textContent);

// console.log(para.getAttribute('id'));
// // to set Attribute
// para.setAttribute('class', 'two');

// para.setAttribute('class', 'para two');

// // to make list of classes
// console.log(para.classList);

// // to remave any class from tag
// para.classList.remove('para');

// // to add any class from tag
// para.classList.add('para');

// // gives all the tags which is directly inside the element 
// console.log(para.children);

// // gives immediate parent
const strong = document.getElementsByTagName('strong')[0];

// console.log(strong.parentElement.innerHTML);

// // gives next element/previous element
// console.log(strong.nextElementSibling.previousElementSibling);

const dynamicDiv = document.createElement('div');
// console.log(dynamicDiv);

// div.innerText = 'this is div'

dynamicDiv.innerHTML = '<h1>this is div</h1>';


dynamicDiv.setAttribute('id', 'div-1');

console.log(dynamicDiv.getAttribute('id'));

// to push at last position
para.appendChild(dynamicDiv);

para.append('this is appended text');

// to push at starting position
para.prepend(dynamicDiv)
para.prepend('dynamicDiv')

// to push element after some element
const list = document.getElementsByTagName('ol')[0];
console.log(list);

list.after(dynamicDiv);

list.before(dynamicDiv);

// checks for class (present in classList or not) if(present)-> remove the class else add the class
// btn[0].classList.toggle('active')
// btn[0].classList.toggle('active')
