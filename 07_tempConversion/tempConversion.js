const ftoc = function(num) {
  return Number(((num - 32) * .5556).toFixed(1))
};

const ctof = function(num) {
  return Number(((num * 1.8) + 32).toFixed(1))
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
