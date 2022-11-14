const removeFromArray = function(arr, item, item2, ...rest) {
    return arr.filter(a => a !== item && a !== item2 && !rest.includes(a))
};

// Do not edit below this line
module.exports = removeFromArray;
