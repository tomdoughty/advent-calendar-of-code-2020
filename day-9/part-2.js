/**
 * Find the consecutive numbers which add to part one total and add highest and lowest
 * https://adventofcode.com/2020/day/9
 *
 * @param {number[]} array - Array of op codes to run
 * @return {number} - Answer
 */
module.exports = (input) => {
  const inputNumbers = input.map(Number);
  const target = 27911108;
  let nums;

  inputNumbers.find((_, index1) => inputNumbers.find((__, index2) => {
    nums = inputNumbers.slice(index1, index2);
    return (nums.reduce((a, b) => a + b, 0) === target);
  }));

  return nums.sort()[0] + nums.sort()[nums.length - 1];
};
