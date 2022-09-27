/**
 * Write a function that takes an integer as input,
 * and returns the number of bits
 * that are equal to one in the binary representation of that number.
 * You can guarantee that input is non-negative.
 * Example: The binary representation of 1234 is 10011010010,
 * so the function should return 5 in this case
 */

const convertToBinary = (dec) => {
  if (dec > 0) {
    return convertToBinary(parseInt(dec / 2)) + (dec % 2)
  };
  return ''
}
const bitCounting = (number) => {
  let bin = convertToBinary(number)
  let count = 0
  for (const bit of bin) {
    if (bit == 1) count++
  }
  return count
}