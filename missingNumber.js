const missingNumber = (num) => {
    let sum = 0;
    for (let i = 0; i < num.length; i++) {
        sum += num[i];
    }
    return num.length*(num.length + 1)/2 - sum;
    //using reduce array method
    // return num.length*(num.length + 1)/2 - num.reduce((acc, num) => acc + num);
}
console.log(missingNumber([0,1,4,3]))