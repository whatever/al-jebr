function factor (n) {
  var primes = {}, k;
  n = Math.abs(n);
  k=2;

  while (k <= n) {
    if (n % k === 0) {
      n /= k;
      primes[k] = k in primes ? primes[k]+1 : 1;
    }
    else
      k++;
  }

  return primes;
}

module.exports = factor;