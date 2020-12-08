/**
 * Finds how many bags can directly or indirectly carry my bag
 * https://adventofcode.com/2020/day/7
 *
 * @param {number[]} array - Array of bags to process
 * @return {number} - Answer
 */
module.exports = (input) => {
  const rowsObj = input.reduce((data, row) => {
    const [rawKey, rawValue] = row.split('contain');
    const key = rawKey.replace(/[^a-z]|bags|bag/gi, '');
    const value = rawValue.split(',').map(((bag) => bag.replace(/[^a-z]|bags|bag/gi, '').trim()));
    return {
      ...data,
      [key]: value,
    };
  }, {});

  return Object.values(rowsObj).map((row) => {
    const getAllBags = (allBagsRow) => allBagsRow.reduce((allBags, bag) => {
      if (bag === 'noother') return ['noother'];
      if (bag === 'shinygold') return ['shinygold'];
      return [...allBags, ...getAllBags(rowsObj[bag])];
    }, []);
    return getAllBags(row).includes('shinygold');
  }).filter(Boolean).length;
};
