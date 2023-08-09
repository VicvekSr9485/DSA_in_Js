const isPallindrome = (num) => {
    let newNum = num, reverseNum = 0;

    while (newNum > 0) {
        const lastdigit = newNum%10
        reverseNum = reverseNum*10 + lastdigit
        newNum = Math.floor(newNum/10)
    }
    return num === reverseNum;
}
console.log(isPallindrome(121))