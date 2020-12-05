const getAnswer = require('./part-2');
const { inputToArray } = require('../utils');

const array = inputToArray('./day-5/input.txt', '\n');

test('getAnswer returns answer', () => {
  expect(getAnswer(array)).toBe(592);
});
