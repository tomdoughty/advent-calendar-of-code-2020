/* eslint-disable no-restricted-syntax */
/**
 * Find the first number where 2 of the 25 numbers before it don't add to the number
 * https://adventofcode.com/2020/day/9
 *
 * @param {string[]} array - Array of numbers to process
 * @return {number} - Answer
 */
module.exports = (input) => {
  const inputNumbers = input.map(Number);
  const preamble = 25;

  return inputNumbers
    .slice(preamble)
    .map((val, index) => {
      const numbers = inputNumbers.slice(index, index + preamble);
      for (const num1 of numbers) {
        for (const num2 of numbers) {
          if (num1 + num2 === val) return null;
        }
      }
      return val;
    })
    .filter(Boolean)[0];
};
