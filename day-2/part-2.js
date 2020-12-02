/**
 * Works out how many passwords are valid based on a policy
 * https://adventofcode.com/2020/day/2
 *
 * @param {number[]} array - Array of rows to process
 * @return {number} - Answer
 */
module.exports = (array = []) => array.filter((row) => {
  const [policy, rawChar, password] = row.split(' ');
  const char = rawChar.substring(0, 1);
  return policy.split('-').filter((pos) => password.charAt(pos - 1) === char).length === 1;
}).length;
