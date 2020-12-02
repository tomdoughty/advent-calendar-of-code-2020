/**
 * Works out how many passwords are valid based on a policy
 * https://adventofcode.com/2020/day/2
 *
 * @param {number[]} array - Array of rows to process
 * @return {number} - Answer
 */
module.exports = (array = []) => array.filter((row) => {
  const [policy, rawChar, password] = row.split(' ');
  const [min, max] = policy.split('-');
  const char = rawChar.substring(0, 1);
  const count = password.split(char).length - 1;
  return count >= min * 1 && count <= max * 1;
}).length;
