#!/usr/bin/python

# Greatest Common Divisor
# Computes the Greatest Common Divisor between two integers using Euclid's
# Algorithm. If the innards are wrapped in more efficient methods, then it'd
# likely work quickly for very large integers!
def gcd (a, b):
  # Let us compute the gcd of negative numbers
  if a < 0: a = -a
  if b < 0: b = -b
  # Ensure that b is the larger number
  if b < a: (a, b) = (b, a)

  # Do the first iteration by hand
  r = b % a

  while r != 0:
    # Note: b = a * m + r
    b = a
    a = r
    m = b // a
    r = b % a

  return a

# Least Common Multiple
# Computes the least common multiple between two integers. This method is not
# good for very large integers
def lcm (a, b): return (a*b)/gcd(a, b)

print gcd(72, 22)
print lcm(72, 22)

