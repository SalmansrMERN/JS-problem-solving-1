
const fibo = n => {
    if (n == 0) {
        return 0;
    } else if (n == 1) {
        return [0, 1]
    } else {
        var fibona = fibo(n - 1);
        var nextElement = fibona[n - 1] + fibona[n - 2];
        fibona.push(nextElement);
        return fibona;
    }
}
var result = fibo(10);
console.log(result);