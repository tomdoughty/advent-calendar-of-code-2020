/**
 * Finds 2 numbers in an array which add to 2020 and multiplies them
 * https://adventofcode.com/2020/day/1
 *
 * @param {number[]} array - Array of numbers to process
 * @return {number} - Answer
 */
module.exports = (array = []) => {
  // eslint-disable-next-line no-restricted-syntax
  for (const num1 of array) {
    const num2 = array.find((num) => (num1 + num) === 2020);
    if (num2) return num1 * num2;
  }
  return null;
};
