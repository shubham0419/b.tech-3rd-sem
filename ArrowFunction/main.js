
var arr = [1, 2, 3, 4, 5, 6, 7];

// Normal
var sqare = arr.map(function (num) {
    return num * num;
})

// Arrow
var ArrowSq = arr.map((num) => {
    return num * num;
})

// Implicit Arrow return
var ArrowSq = arr.map((num) => num * num)


var arrowFunction = (parameter, parameter2) => {
    console.log(parameter);
}

arrowFunction("shubham", "NSIT");