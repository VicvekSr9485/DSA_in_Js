// finding palindrome strings using loops
/*
const palindrome = (string) => {
    const len = string.length

    for (let i = 0; i < len / 2; i++) {
        if (string[i] !== string[len - 1 - i]) {
            return "It is not palindrome!";
        }
    }
    return "It is palindrome!";
}
console.log(palindrome('hello'));
*/
// finding palindrome strings using inbuilt functions

const palindrome2 = (string) => {

    // convert string to an array
    const splittedString = string.split('');

    // reverse the array
    const reversedString = splittedString.reverse();

    // join the array to string
    const joinedString = reversedString.join('');

    if (string !== joinedString) {
        return "It is not a palindrome!"
    }
    return "It is a palindrome!"

}
console.log(palindrome2("boss"));
