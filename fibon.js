const fibo = n => {
    if (n == 0) {
        return 0;
    } else if (n == 1) {
        return (0,1);
    } else {
        return fibo(n - 1) + fibo(n - 2);
    }
}
var result = fibo(10);
console.log(result);