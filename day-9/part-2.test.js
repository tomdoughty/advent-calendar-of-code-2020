const getAnswer = require('./part-2');
const { inputToArray } = require('../utils');

const array = inputToArray('./day-9/input.txt', '\n');

test('getAnswer can find correct answer ', () => {
  expect(getAnswer(array)).toBe(4023754);
});
