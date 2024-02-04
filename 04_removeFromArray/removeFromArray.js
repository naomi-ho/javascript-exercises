const removeFromArray = function(array, ...values) {
    // create a new array
    let newArray = [];
    // checks each item in array
    array.forEach((item) => {
        // push every element into array unless it is included in values
        if (!values.includes(item)) {
            newArray.push(item);
        }
    });
    // return array with removed values
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
