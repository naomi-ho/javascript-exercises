const palindromes = function (str) {
    // convert to lowercase
    let lowerStr = str.toLowerCase();
    console.log(lowerStr);

    // remove numbers and special characters
    const specialChar = /[^A-Za-z0-9]+/g;
    let replacedStr = lowerStr.replace(specialChar, "");
    console.log(replacedStr);

    // reverse string
    let reversedStr = replacedStr.split("").reverse().join("");

    // check if both strings are equal to one another and return true or false
    return replacedStr === reversedStr;
};

// Do not edit below this line
module.exports = palindromes;
