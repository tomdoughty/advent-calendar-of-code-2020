/**
 * Add together groups answers to landing cards
 * https://adventofcode.com/2020/day/6
 *
 * @param {number[]} array - Array of groups to process
 * @return {number} - Answer
 */
module.exports = (input) => input
  .map((group) => {
    const passengers = group.split('\n');
    const allAnswers = passengers.map((answers) => answers.split('')).flat();
    return [...new Set(
      allAnswers
        .filter((char) => allAnswers
          .filter((answer) => answer === char).length === passengers.length),
    )].length;
  }).reduce((a, b) => a + b, 0);
