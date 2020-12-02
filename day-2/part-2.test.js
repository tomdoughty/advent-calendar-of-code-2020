const getAnswer = require('./part-2');
const { inputToArray } = require('../utils');

const array = inputToArray('./day-2/input.txt');

test('getAnswer returns 0 when passed no array', () => {
  expect(getAnswer()).toBe(0);
});

test('getAnswer can find correct answer ', () => {
  expect(getAnswer(array)).toBe(263);
});
