function MIN (n) {
  
  if (n < 1)
    return undefined;

  
  var min_val = n*(n+1);

  for (var i=0; i < 2000; i++) {
    var total = 0;
    var vals = random_array(n);
    for (var k=0; k < n; k++) {
      total += vals[k] * (k+1);
    }

    if (total >= 0 && total < min_val) {
      min_val = total;
    }
  }

  /**
   * [random_array description]
   * @param  {[type]} num [description]
   * @return {[type]}     [description]
   */
  function random_array (num) {
    var vals = new Array(num);
    for (var i=0; i < vals.length; i++)
      vals[i] = Math.random() > 0.5 ? +1 : -1;
    return vals;
  }

  return min_val;
}



// var sum = 0;

// for (var i=1; i < 10; i++) {
//   sum += MIN(i);
// }

// console.log(MIN(10));
// console.log(sum);

module.exports = MIN;