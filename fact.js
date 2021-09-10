// var factorial = 1;
// for (var i = 1; i <= 5; i++) {
//     factorial = factorial * i;
// }
// console.log(factorial);


// var factorial = 1;
// function fact(n) {
//     for (var i = 1; i <= n; i++) {
//         factorial = factorial * i;
//     }
//     return factorial;
// }

// const result = fact(5);
// console.log(result);

let factorial = 1;
const fact = n => {
    for (let i = 1; i <= n; i++)
        factorial = factorial * i;
    return factorial;
}
const result = fact(10);
console.log(result);