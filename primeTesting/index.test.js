/**
 * A prime number is an integer number that cannot be divided by any number
 * except itself and 1.
 * Write a function that accepts a number and returns true if it's
 * a prime number, false if it's not.
 */

const primeTester = function(n) {
  let isPrime = true

  if (n === 1) {
    return ("not prime nor composite")
  }

  if (n === 0) {
    return false
  }

  if (n > 1) {
    for (let i = 2;i < n;i++) {
      if (n % i == 0) {
        isPrime = false
        break
      }
    }
    return isPrime
  }
};

/* Extra credit: Write a function that generates a list of all prime numbers
  * in a user-specified range (inclusive).
 If you're not quite sure where to start,
  * check out the Sieve of Eratosthenes on Wikipedia. (And if you're feeling
  * saucy, check out the Sieve of Atkin.)
*/
