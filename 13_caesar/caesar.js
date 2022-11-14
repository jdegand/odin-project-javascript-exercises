/*
const caesar = function(str, shift) {

    const alphabet = 'abcdefghijklmnopqrstuvwxyz'

    let newStr = ''

    for(let i = 0; i < str.length; i++){
        let index = alphabet.indexOf(str[i].toLowerCase())
        if(index === -1) {
            newStr += str[i]
        } else {
            let newIndex = (index + shift) % 26;
            newStr += alphabet[newIndex]
        }
    }
    return newStr
};
*/

const caesar = function (str, amount) {
 
    if (amount < 0) {
      //return caesar(str, amount + 26);
      amount = amount + 26
    }

    let output = "";
  
    for (var i = 0; i < str.length; i++) {
      var c = str[i];
  
      if (c.match(/[a-z]/i)) {
        var code = str.charCodeAt(i);
  
        // Uppercase letters
        if (code >= 65 && code <= 90) {
          c = String.fromCharCode(((code - 65 + amount) % 26) + 65);
        }
  
        // Lowercase letters
        else if (code >= 97 && code <= 122) {
            c = String.fromCharCode(((code - 97 + amount) % 26) + 97);
        }
      }
  
      // Append
      output += c;
    }
  
    // All done!
    return output;
};


/* 

const caesar = function(str, shift) {

    if (shift < 0) {
        return caesar(str, shift + 26);
    }

    str = str.split("")
    str = str.map(char => {

    if (char.match(/[a-z]/i)) {
                             
    let code = char.charCodeAt(0)
 
    if( (code > 64 && code < 78) || (code > 96 && code < 110) )
        code += shift
 
    else if ( (code > 77 && code < 91) || (code > 109 && code < 123) )
        code -= shift
         
        return String.fromCharCode(code)
    }
    })
 
    return str.join("")
}
*/


// Do not edit below this line
module.exports = caesar;
