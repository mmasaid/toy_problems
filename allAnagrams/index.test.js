/**
 * Given a single input string, write a function that outputs an array of strings with every possible
 * combination of letters.
 *
 * At first, don't worry about repeated (duplicate) strings.
 *
 * What time complexity is your solution?
 *
 * Extra credit: De-duplicate your return array without using uniq().
 */

/**
  * example usage:
  * var anagrams = allAnagrams('abc');
  * console.log(anagrams); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
  */


let generator = function (roundCount, playedSoFar) {
  if (roundCount === 0) {
    const char = playedSoFar.split('')

    const check = char.some((v, i, a) => {
      return a.lastIndexOf(v) != i
    })

    if (check) return

    return result.push(playedSoFar)
  }

  for (let i = 0;i < charCounts;i++) {
    generator(roundCount - 1, playedSoFar + charachters[i])
  }
}

const allAnagrams = function (string) {
  let charachters = string.split('')
  let charCounts = charachters.length
  let result = []

  generator(charCounts, '')

  return result
};



