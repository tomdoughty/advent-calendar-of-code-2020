const { validate, getAnswer } = require('./part-2');
const { inputToArray } = require('../utils');

const array = inputToArray('./day-4/input.txt', '\n\n');

test('byr validation works', () => {
  expect(validate.byr()).toBe(false);
  expect(validate.eyr(false)).toBe(false);
  expect(validate.byr('1920')).toBe(true);
  expect(validate.byr('1919')).toBe(false);
  expect(validate.byr('2002')).toBe(true);
  expect(validate.byr('2003')).toBe(false);
});

test('iyr validation works', () => {
  expect(validate.iyr()).toBe(false);
  expect(validate.eyr(false)).toBe(false);
  expect(validate.iyr('2010')).toBe(true);
  expect(validate.iyr('2009')).toBe(false);
  expect(validate.iyr('2020')).toBe(true);
  expect(validate.iyr('2021')).toBe(false);
});

test('eyr validation works', () => {
  expect(validate.eyr()).toBe(false);
  expect(validate.eyr(false)).toBe(false);
  expect(validate.eyr('2020')).toBe(true);
  expect(validate.eyr('2019')).toBe(false);
  expect(validate.eyr('2030')).toBe(true);
  expect(validate.eyr('2031')).toBe(false);
});

test('hgt validation works', () => {
  expect(validate.eyr()).toBe(false);
  expect(validate.eyr(false)).toBe(false);
  expect(validate.hgt('59in')).toBe(true);
  expect(validate.hgt('58in')).toBe(false);
  expect(validate.hgt('193cm')).toBe(true);
  expect(validate.hgt('194cm')).toBe(false);
});

test('hcl validation works', () => {
  expect(validate.eyr()).toBe(false);
  expect(validate.eyr(false)).toBe(false);
  expect(validate.hcl('#123abc')).toBe(true);
  expect(validate.hcl('#123abz')).toBe(false);
  expect(validate.hcl('123abc')).toBe(false);
});

test('ecl validation works', () => {
  expect(validate.eyr()).toBe(false);
  expect(validate.eyr(false)).toBe(false);
  expect(validate.ecl('brn')).toBe(true);
  expect(validate.ecl('wat')).toBe(false);
});

test('pid validation works', () => {
  expect(validate.eyr()).toBe(false);
  expect(validate.eyr(false)).toBe(false);
  expect(validate.pid('000000001')).toBe(true);
  expect(validate.pid('0123456789')).toBe(false);
});

test('cid validation works', () => {
  expect(validate.eyr()).toBe(false);
  expect(validate.eyr(false)).toBe(false);
  expect(validate.cid('anything')).toBe(true);
});

test('getAnswer returns answer', () => {
  expect(getAnswer(array)).toBe(133);
});
