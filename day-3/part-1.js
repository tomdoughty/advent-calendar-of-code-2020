/* eslint-disable no-restricted-syntax */
/**
 * Find how many trees you hit in input based off rules
 * https://adventofcode.com/2020/day/3
 *
 * @param {number[]} array - Array of numbers to process
 * @return {number} - Answer
 */
module.exports = (array = []) => array.reduce((data, row) => {
  const trees = row.charAt(data.position) === '#' ? data.trees + 1 : data.trees;
  let position = data.position + 3;
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
}).trees;
