/*
Given an integer n, write a function to determine if it is a power of two:

Example:

Input: n = 16
Output: true (16 is a power of 2: 2^4 = 16)

Input: n = 5
Output: false (5 is not a power of 2)
*/

const powerOfTwo = (num) => {
    if (num <= 0) {
        return false;
    }
    while (num > 1) {
        if (num % 2 !== 0) {
            return false;
        }
        num /= 2;
    }
    return true;
}
console.log(powerOfTwo(5));