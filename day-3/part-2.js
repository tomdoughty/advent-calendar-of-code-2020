/* eslint-disable no-restricted-syntax */
/**
 * Find how many trees you hit in input based off rules
 * https://adventofcode.com/2020/day/3
 *
 * @param {number[]} array - Array of rows to process
 * @return {number} - Answer
 */
module.exports = (array = []) => [
  { right: 1, down: 1 },
  { right: 3, down: 1 },
  { right: 5, down: 1 },
  { right: 7, down: 1 },
  { right: 1, down: 2 },
].map(({ right, down }) => array.filter((_, i) => (i % down === 0)).reduce((data, row) => {
  const trees = row.charAt(data.position) === '#' ? data.trees + 1 : data.trees;
  let position = data.position + right;
  if (position > (row.length - 1)) {
    position -= row.length;
  }
  return {
    trees,
    position,
  };
}, {
  trees: 0,
  position: 0,
}).trees).reduce((a, b) => a * b);
