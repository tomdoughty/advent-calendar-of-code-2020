/**
 * Find highest seat ID from boarding passes
 * https://adventofcode.com/2020/day/5
 *
 * @param {string[]} array - Array of boarding passes
 * @return {number} - Answer
 */
module.exports = (array) => {
  const rows = Array.from(Array(128).keys());
  const columns = Array.from(Array(8).keys());

  const commands = {
    F: (s) => s.slice(0, s.length / 2),
    B: (s) => s.slice(s.length / 2),
    L: (s) => s.slice(0, s.length / 2),
    R: (s) => s.slice(s.length / 2),
  };

  const runCommands = (pass, arr) => pass.split('').reduce((remaining, command) => commands[command](remaining), arr);

  return array.map((pass) => {
    const [row] = runCommands(pass.slice(0, 7), rows);
    const [column] = runCommands(pass.slice(7), columns);
    return ((row * 8) + column);
  }).sort((a, b) => b - a)[0];
};
