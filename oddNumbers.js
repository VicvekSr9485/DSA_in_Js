const countOdd =  (start, end) => {
    let count = 0;
    for (let i = start; i <= end; i++) {
        if (i % 2 !== 0) {
            count += 1;
        }
    }
    return count;
}
console.log(countOdd(3,11));
