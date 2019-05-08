/* 1. Fibonacci
Define function: fib(n) 
Return the nth number in the fibonacci sequence. */

function fib(n) {
    if (n < 0 || isNaN(n) || n === Infinity) throw "Hey man, n has to be a positive number less than infinity.";
    if (n === 0) return 0;
    if (n === 1) return 1;
    return fib(n-1) + fib(n-2);
}

for (let i = 0; i <= 10; i++) {
    try {
        console.log(`fib(${i}) = ${fib(i)}`);
    } catch(obj) {
        console.log(obj);
    }
}

try {
    console.log(fib('hi'));
} catch(obj) {
    console.log(obj);
} finally {
    console.log('Finished.');
}