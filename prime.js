const checkPrime = n => {
    for (var i = 2; i < n; i++) {
        if (n % i == 0) {
            return (" Is Not A Prime No");
        } else {
            return (n + " Is A Prime No");
        }
    }
};
var result = checkPrime(19);
console.log(result);