const getAnswer = require('./part-2');
const { inputToArray } = require('../utils');

const array = inputToArray('./day-3/input.txt');

test('getAnswer can find correct answer ', () => {
  expect(getAnswer(array)).toBe(5813773056);
});
