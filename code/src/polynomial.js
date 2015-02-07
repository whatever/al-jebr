var _ = require('underscore');
var factor = require('./factor.js');

function p (x) {
  // return Math.pow(x, 3) + x;
  return Math.pow(h(x), 1/6.0);
}

function deriv (f, delta) {
  delta = delta || 0.00000001;
  return function (x) {
    return (f(x+delta) - f(x-delta))/delta/2.0;
  };
}

function solve (F, x0) {

  var error;
  
  x0 = x0 || 0;

  f = deriv(F);

  do {
    x1 = x0 - F(x0)/f(x0);
    x0 = x1;
    error = F(x1);
  } while (error < 0.000000001);

  return x1;
}

// var guess = solve(p, 10000000.0);

// console.log(Math.pow(guess, 6));

function g (y) {
  return Math.pow(y, 6);
}

function h (x) {
  return Math.pow(x, 6) + 8 * Math.pow(x, 4) - 6 * Math.pow(x, 2) + 8;;
}

function works (x, y) {
  return g(y) === h(x);
}


var BEGIN = -10;
var END   = +100;

for (var n=BEGIN; n <= END; n++) {

  var x = Math.pow(h(n), 1/6.0);

  if (x)
    console.log(n, x);
}



