const getAnswer = require('./part-1');
const { inputToArray } = require('../utils');

const array = inputToArray('./day-5/input.txt');

test('getAnswer can find correct answer ', () => {
  expect(getAnswer(array)).toBe(963);
});
