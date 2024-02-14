const fibonacci = function(num) {
    let convertedNum = 0;
    let num1 = 0;
    let num2 = 1;

    if (num < 0) return "OOPS";
    if (num == 0) return 0;

    // converts strings to numbers
    if (typeof num !== "number") {
        convertedNum = Number(num);
    } else {
        convertedNum = num;
    }

    for (let i = 2; i <= convertedNum; i++) {
        let sum = num2 + num1;
        num1 = num2;
        num2 = sum;
    }
    return num2;
}

// Do not edit below this line
module.exports = fibonacci;
