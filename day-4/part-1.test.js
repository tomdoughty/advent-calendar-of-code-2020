const getAnswer = require('./part-1');
const { inputToArray } = require('../utils');

const array = inputToArray('./day-4/input.txt', '\n\n');

test('getAnswer can find correct answer ', () => {
  expect(getAnswer(array)).toBe(245);
});
