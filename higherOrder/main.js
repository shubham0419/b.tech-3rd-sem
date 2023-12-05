

// function cb() {
//     console.log("cb")
// }

// function fun(inside) {
//     console.log("fun");
//     inside();
// }

// fun(cb);

// function fun() {
//     console.log("fun");

//     function cb() {
//         console.log("cb");
//     }

//     return cb;
// }

// var highoreder = fun();

// highoreder();


// map


var arr = [1, 2, 3, 4, 5, 6, 7];


function square(num) {
    return Math.pow(num, 2);
}

var squreArr = arr.map(square);

console.log(arr);
console.log(squreArr);

var cubeArr = arr.map(function cube(num) {
    return Math.pow(num, 3);
})
console.log(cubeArr);


var sqrt = arr.map(function (num) {
    return parseInt(Math.sqrt(num));
})
console.log(sqrt);

// Filter
var even = arr.filter(function (num) {
    return !(num % 2);
})

// String Template literals-->  ``
console.log(`even array : ${even}`);


let menu = ["Chhole Bhature", "Butter Chicken", "Rajma Chawal", "Chicken Biryani", "Dal Makhni",
    "Kadhai Paneer", "Garlic Bread", "onion rings", "Amritsari Naan", "Paav Bhaaji", "Ras Malai",
    "Onion Pizza", "Egg Curry", "Egg Omlet", "Garlic Naan", "Garlic Rice", "kadhai paneer",
    "Shahi Paneer", "Chai", "Momos", "Chicken Korma", "Dosa", "Uttapam", "Sambhar", "Vada Paav"];

// Write code to filter out veg items array and non-veg items array from the
// menu and console both the array.

var veg = menu.filter(function (item) {
    return !(item.toLowerCase().includes("chicken") || item.toLowerCase().includes("egg"));
})

console.log(veg);