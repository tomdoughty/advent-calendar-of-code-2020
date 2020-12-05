const iyr = (val) => val.length === 4 && val * 1 >= 2010 && val * 1 <= 2020;
console.log(iyr('2012'));
