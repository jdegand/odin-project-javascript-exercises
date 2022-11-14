const palindromes = function (str) {
    /*
    var regex = /[\W_]/g;
    var lowRegStr = str.toLowerCase().replace(regex, '');
    var reverseStr = lowRegStr.split('').reverse().join(''); 
    return reverseStr === lowRegStr;
    */
    
    let regex = /[\W_]/g;
    let lowRegStr = str.toLowerCase().replace(regex, '');
    let reverseStr = lowRegStr.split("").reduce((acc, char) => char + acc, '').replace(/\s/g, '')
    return lowRegStr === reverseStr
    
};

// Do not edit below this line
module.exports = palindromes;
