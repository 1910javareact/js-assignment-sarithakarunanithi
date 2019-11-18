/* 1. Fibonacci
Define function: fib(n) 
Return the nth number in the fibonacci sequence. */
function fib(n) {
    let num1 = 1; // start number
    let num2 = 1; // start number
     n = 0;
    let f =0;        // temp var 
    console.log("1 ");
    console.log("1 ");
    
    while (n <= 50) {
        n = num1 + num2; // n = 1+1 
        console.log(n);  // n = 2
        num1 = num2;     
        num2 = n;    
        f = f + n ;   
    } 
}
console.log(fib(40));  