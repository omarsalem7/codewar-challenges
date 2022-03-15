function smash(words) {
  if (!words.length) {
    return '';
  }
  let res = '';
  for (let i = 0; i < words.length; i++) {
    i === 0 ? (res = res + words[i]) : (res = res + ' ' + words[i]);
  }
  return res;
}
