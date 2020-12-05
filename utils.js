const fs = require('fs');

/**
 * Convert input string into array of numbers
 *
 * @param {string} input - input file contents as a string
 * @return {string[]} - Array of rows
 */
const splitInput = (input, splitBy = '\n') => input.split(splitBy);

/**
 * Read input file into a string
 *
 * @param {string} file - Path to the input file
 * @return {string} - string with content of file
 */
const readInput = (file) => {
  try {
    return fs.readFileSync(file, 'utf8').toString();
  } catch (error) {
    return error;
  }
};

/**
 * Convert input file into array
 *
 * @param {string} file - Path to the input file
 * @return {number[]} - Array of numbers
 */
module.exports.inputToArray = (file, splitBy) => {
  const input = readInput(file);
  return splitInput(input, splitBy);
};
