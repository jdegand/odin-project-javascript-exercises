const fibonacci = function(n) {
    if (n <= 1)
    return +n < 0 ? 'OOPS': +n;
  return fibonacci(n-1) + fibonacci(n-2);
};

// Do not edit below this line
module.exports = fibonacci;
