
const btn = document.getElementsByTagName('button');

// console.log(btn);

// btn[0].onclick = function (e) {
//     console.log(e.target);
//     btn.classList.add('active')
// }

// btn.onclick = function () {
//     btn.classList.add('bold')
// }

// for (let i = 0; i < btn.length; i++) {
//     btn[i].onclick = (e) => {
//         console.log(e.target);
//         btn[i].classList.add('active');
//     }
// }

// Add event  Listener

btn[0].addEventListener('click', (e) => {
    console.log(e.target);
    btn[0].classList.add('active');
})

btn[0].addEventListener('click', (e) => {
    console.log(e.target);
    btn[0].classList.add('bold');
})

btn[1].addEventListener('mouseenter', () => {
    btn[1].classList.add('active');
})

btn[1].addEventListener('mouseleave', () => {
    btn[1].classList.remove('active');
})




