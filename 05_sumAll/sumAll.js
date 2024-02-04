const sumAll = function(first, last) {
    let array = [];
    let sum = 0;
    let temp;

    if (first < 0 || last < 0) return "ERROR";
    if (typeof first !== "number" || typeof last !== "number") return "ERROR";
    
    if (first > last) {
        temp = first;
        first = last;
        last = temp;
    }

    for (let i = first; i <= last; i++) {
        sum += i;
    }
    console.log(sum);
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
