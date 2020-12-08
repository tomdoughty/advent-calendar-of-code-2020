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

  let aooIndex = 0;

  const changeAoo = () => {
    const newAoo = aoo.map((obj, index) => {
      if (aooIndex === index && obj.op !== 'acc') {
        const newObj = {
          op: obj.op === 'nop' ? 'jmp' : 'nop',
          arg: obj.arg,
        };
        return newObj;
      }
      return obj;
    });
    aooIndex += 1;
    return newAoo;
  };

  const performOpsOnArray = (array) => {
    let acc = 0;
    let index = 0;
    let visited = [];

    const performOps = () => {
      if (visited.includes(index)) return false;
      if (!array[index]) {
        return acc;
      }
      visited = [...visited, index];
      const { op, arg } = array[index];
      if (op === 'acc') {
        acc += +arg;
        index += 1;
      }
      if (op === 'nop') index += 1;
      if (op === 'jmp') index += +arg;
      return performOps();
    };

    return performOps(array);
  };

  let array = aoo;

  while (performOpsOnArray(array) === false) {
    array = changeAoo();
  }

  return performOpsOnArray(array);
};
