const fibonacci = (fib) => {
    if (fib < 2 ) {
        return fib;
    }
    let prev = 0, current = 1, next;
    for (let i = 2; i <= fib; i++) {
        next = prev + current;
        prev = current;
        current = next;
    }
    return next;
}
console.log(fibonacci(10))