/*
function pigLatin(str) {
    let vowels = ['a', 'e', 'i', 'o', 'u']
    if(vowels.includes(str.split('')[0])) {
      return str + 'ay' // or 'way'
    }
    return str.replace(/(\w+?)([aeiou]\w+)/i, '$2$1') + 'ay'
}
*/

function pigLatin(str){
  let vowels = ['a', 'e', 'i', 'o', 'u']
  let arr = str.split(' ')

  let newWords = arr.map(word => {

    if(word.includes('qu')) {
      let index = word.indexOf('u');
      return word.slice(index+1) + word.slice(0,index+1) + 'ay'
    }

    let cluster = '';
    for(let i = 0; word.length; i++){
      if(vowels.some(v => v === word[i])){
        break;
      } else {
        cluster += word[i]
      }
    }
    if(cluster === '') {
      return word + 'ay'
    } else {
      return word.slice(cluster.length) + cluster + 'ay'
    }
  })
  return newWords.join(' ')
}
  
// Do not edit below this line
module.exports = pigLatin;
