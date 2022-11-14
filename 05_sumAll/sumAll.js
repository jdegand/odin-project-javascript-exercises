const sumAll = function(num1, num2) {
    if(typeof num1 === 'string' || typeof num2 === 'string' || num1 < 0 || num2 < 0) return 'ERROR'
    let max = Math.max(num1, num2)
    let min = Math.min(num1, num2)
    
    let difference = max + 1;
    let total = 0;
    
    while (difference > min) { 
      difference--;
      total += difference; 
    }

    return total;
};

// Do not edit below this line
module.exports = sumAll;
