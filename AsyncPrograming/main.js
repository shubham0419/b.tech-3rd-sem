function fun() {
    console.log("fun");
}

// function delay(n) {
//     for (var i = 0; i < n; i++) {
//         var x = new Date().getTime();
//         while (new Date().getTime() != x + 1000);
//     }
// }

console.log("Start");

// delay(5);

setTimeout(fun, 1000);;

console.log("End");


const id = setInterval(() => {
    console.log("Hello")
}, 1000);


setTimeout(() => {
    clearInterval(id);
}, 5000);



