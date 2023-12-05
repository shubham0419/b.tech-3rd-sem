
// function simple() {
//     console.log(this);
//     console.log("simple");
// }

// simple();

// function Person(name, rollno, branch) {
//     console.log(this);
//     this.studentName = name;
//     this.rollNo = rollno;
//     this.branch = branch;
// }

// var add = {
//     Address: "SAITM"
// }

// Person.call(add, "nikhil", 46, "CST");

// console.log(add);

// const p1 = new Person("shubham", 92, "CSE");

// const p2 = new Person('Nikhil', 46, "CST");


// // Implicit binding
// function Car(model, color, price) {
//     this.Model = model;
//     this.color = color;
//     this.Price = price;

//     this.getPrice = function () {
//         console.log(this);
//         return this.Price;
//     }
// }

// var car1 = new Car("fortuner", "black", 4800000);

// console.log(car1.getPrice());

// // Explicit 

// function Cloths(price, color, size) {
//     console.log(this);
//     this.price = price;
//     this.color = color;
//     this.size = size;
// }

// var obj = {
//     name: "tshirt"
// }

// Cloths.call(obj, 5000, "red", "medium");


function Product(img, name, price, discription) {
    this.Img = img;
    this.Name = name;
    this.Price = price;
    this.Discription = discription;
}

const shoe1 = new Product("shoe.png", "addidas", 2000, "running shoes");

const shoe2 = new Product("shoe2.png", "Nike", 2000, "casual shoes");

const shoe3 = new Product("shoe3.png", "Jordan", 2000, "running shoes");

const shoe4 = new Product("shoe4.png", "Campus", 2000, "running shoes");

var sizeObj = {
    size: 8
}

Product.call(sizeObj, "NikeShoe.png", "Nike-Air", 5000, "casual shoes");
console.log(sizeObj);

console.log(shoe1);




