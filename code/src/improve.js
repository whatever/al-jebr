var _ = require('underscore');

var MIN = require('./min.js')

function improve (n, vec) {
  var sub_array = [0];

  if (typeof vec === 'undefined')
    vec = number_array(n);

  var current_total = 0;
  var iterations = 0;


  do {
    current_total  = vec.reduce(function (a, b) { return a + b; });
    current_total2 = n*(n+1)/2.0 - sub_array.reduce(function (a, b) { return a+b; });
    // console.log(current_total2, current_total);
    iterations++;
  } while (iterate(vec));

  // console.log(delta_list);
  // console.log('best =', best_delta);

  // console.log('iterations =', iterations);
  return current_total;

  /**
   * [iterate description]
   * @param  {[type]} vec [description]
   * @return {[type]}     [description]
   */
  function iterate (vec) {
    var min_index = -1;
    var min_delta = Infinity;
    var max_delta = -Infinity;

    // 1 ... n
    // 

    _.each(vec, function (val, index) {
      var next_val = current_total - 2 * val;
      var delta    = 2*val;

      if (next_val >= 0 && delta > max_delta) {
        min_index = index;
        max_delta = delta;
      }
    });

    

    // console.log('max delta >', max_delta);
    vec[min_index] *= -1;
    sub_array.unshift(max_delta);

    // console.log(sub_array[0]/2, vec[min_index]);

    // console.log('best delta =', min_delta);

    return max_delta > 0;

  }
}

function D (n) {
  return n % 2;
}

function number_array (n) {
  var arr = new Array(n);
  for (var i=0; i < arr.length; i++) {
    arr[i] = i+1;
  }
  return arr;
}

console.log(summa);
// console.log(improve(4));
// console.log(MIN(702));