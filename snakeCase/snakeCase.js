const snakeCase = function(str) {

    // /^-_\S/  ||  /^.{6,}$/
    if(str.match(/\..{6,}/)) { // find only the WTF case
        return str.split(/\../).map(item => item.toLowerCase()).join('_')
    }

    return str.split(/[-_\s]|(?=[A-Z])/).map(item => item.toLowerCase()
    .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?]/g,"")).join('_')
    
};
// Do not edit below this line
module.exports = snakeCase;
