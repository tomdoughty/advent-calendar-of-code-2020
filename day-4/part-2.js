/* eslint-disable no-restricted-syntax */

module.exports.validate = {
  byr: (val) => !!val && val.length === 4 && val * 1 >= 1920 && val * 1 <= 2002,
  iyr: (val) => !!val && val.length === 4 && val * 1 >= 2010 && val * 1 <= 2020,
  eyr: (val) => !!val && val.length === 4 && val * 1 >= 2020 && val * 1 <= 2030,
  hgt: (val) => {
    const rawVal = val.slice(0, -2) * 1;
    if (val.slice(-2) === 'cm') {
      return rawVal >= 150 && rawVal <= 193;
    }
    return rawVal >= 59 && rawVal <= 76;
  },
  hcl: (val) => val.charAt(0) === '#' && !!val.match(/[0-9A-Fa-f]{6}/g),
  ecl: (val) => ['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth'].includes(val),
  pid: (val) => !!val.match(/^\d{9}$/),
  cid: () => true,
};

/**
 * Count valid passports
 * https://adventofcode.com/2020/day/4
 *
 * @param {number[]} array - Array of passports to process
 * @return {number} - Answer
 */
module.exports.getAnswer = (input) => input
  .map((passport) => passport.split(' ')
    .map((val) => val.split('\n'))
    .flat())
  .map((passport) => passport.reduce((data, arr) => {
    const [key, value] = arr.split(':');
    if (!module.exports.validate[key] || key === 'cid') return data;
    return {
      ...data,
      [key]: value,
    };
  }, {}))
  .filter((passport) => Object.entries(passport)
    .filter(([key, value]) => (module.exports.validate[key](value))).length === 7).length;
