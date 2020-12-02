/**
 * Finds 3 numbers in an array which add to 2020 and multiplies them
 * https://adventofcode.com/2020/day/1
 *
 * @param {number[]} array - Array of numbers to process
 * @return {number} - Answer
 */
/* eslint-disable no-restricted-syntax */
module.exports = (array = []) => {
  const numbers = array.map(Number);
  for (const num1 of numbers) {
    for (const num2 of numbers) {
      const num3 = numbers.find((num) => (num1 + num2 + num) === 2020);
      if (num3) return num1 * num2 * num3;
    }
  }
  return null;
};
