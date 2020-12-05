/* eslint-disable no-restricted-syntax */
/**
 * Count valid passports
 * https://adventofcode.com/2020/day/4
 *
 * @param {number[]} array - Array of passports to process
 * @return {number} - Answer
 */
module.exports = (input) => input.filter((passport) => ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid'].every((field) => passport.includes(field))).length;
