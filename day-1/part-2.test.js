const getAnswer = require('./part-2');
const { inputToArray } = require('../utils');

const array = inputToArray('./day-1/input.txt');

test('getAnswer returns null when passed no array', () => {
  expect(getAnswer()).toBe(null);
});

test('getAnswer can find correct answer', () => {
  expect(getAnswer(array)).toBe(165080960);
});
