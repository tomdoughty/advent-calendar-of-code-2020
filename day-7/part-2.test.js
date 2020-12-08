const getAnswer = require('./part-2');
const { inputToArray } = require('../utils');

const array = inputToArray('./day-7/input.txt', '\n');

test('getAnswer can find correct answer ', () => {
  expect(getAnswer(array)).toBe(20189);
});
