const repeatString = function(str, num) {
    if (num < 0) return 'ERROR'
    let final = ''
    for(let i = 1; i <= num; i++){
        final += str
    }
    return final
};

// Do not edit below this line
module.exports = repeatString;
