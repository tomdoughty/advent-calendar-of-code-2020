/**
 * Add together groups answers to landing cards
 * https://adventofcode.com/2020/day/6
 *
 * @param {number[]} array - Array of groups to process
 * @return {number} - Answer
 */
module.exports = (input) => input
  .map((group) => [
    ...new Set(
      group.split('\n').map((answers) => answers.split('')).flat(),
    ),
  ]).reduce((a, b) => a + b.length, 0);
