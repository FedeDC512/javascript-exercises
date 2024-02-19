const fibonacci = function(num) {
    if(num == 0) return 0;
    else if (num > 0){
        num = parseInt(num);
        let previousFibonacciNumber = 0;
        let nextFibonacciNumber = 1;
        let fibonacciNumber = 1;
        for(let i = 0; i<num-1; i++){
            fibonacciNumber = previousFibonacciNumber + nextFibonacciNumber;
            previousFibonacciNumber = nextFibonacciNumber;
            nextFibonacciNumber = fibonacciNumber;
        }
        return fibonacciNumber;
    } else return "OOPS";
};

// Do not edit below this line
module.exports = fibonacci;
