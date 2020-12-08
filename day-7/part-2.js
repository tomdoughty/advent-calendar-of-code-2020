/**
 * Finds how many bags are inside my bag
 * https://adventofcode.com/2020/day/7
 *
 * @param {number[]} array - Array of bags to process
 * @return {number} - Answer
 */
module.exports = (input) => {
  const rowsObj = input.reduce((data, row) => {
    const [rawKey, rawValue] = row.split('contain');
    const key = rawKey.replace(/[^a-z]|bags|bag/gi, '');
    const value = rawValue.split(',').reduce((bags, bag) => {
      const length = +bag.substring(2, 0) || 1;
      return [
        ...bags,
        ...new Array(length).fill(bag.replace(/[^a-z]|bags|bag/gi, '').trim()),
      ];
    }, []).flat();
    return {
      ...data,
      [key]: value,
    };
  }, {});

  const getAllBags = (allBagsRow) => allBagsRow.reduce((allBags, bag) => {
    if (bag === 'noother') return allBags;
    return [...allBags, bag, ...getAllBags(rowsObj[bag])];
  }, []);

  return getAllBags(rowsObj.shinygold).length;
}