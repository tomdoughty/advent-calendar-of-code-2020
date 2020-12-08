/**
 * Find the accumalator value before loop starts repeating
 * https://adventofcode.com/2020/day/8
 *
 * @param {number[]} array - Array of op codes to run
 * @return {number} - Answer
 */
module.exports = (input) => {
  const aoo = input.map((row) => {
    const [op, arg] = row.split(' ');
    return {
      op, arg,
    };
  });

  let acc = 0;
  let index = 0;
  let visited = [];

  const performOps = () => {
    if (visited.includes(index)) return acc;
    visited = [...visited, index];

    const { op, arg } = aoo[index];
    if (op === 'nop') index += 1;
    if (op === 'jmp') index += +arg;
    if (op === 'acc') {
      acc += +arg;
      index += 1;
    }
    return performOps();
  };

  return performOps();
};
