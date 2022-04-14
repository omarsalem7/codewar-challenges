function unusedDigits(...arr) {
  let numbers = '0123456789';
  let str = arr + '';
  let res = '';
  for (let i = 0; i < numbers.length; i++) {
    if (!str.includes(numbers[i])) res += numbers[i];
  }
  return res;
}
