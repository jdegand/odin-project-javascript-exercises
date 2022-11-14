const reverseString = function(str) {
    return str.split('').reduce((a,b)=> b + a, '')
};

// Do not edit below this line
module.exports = reverseString;
