module.exports = function reverse (n) {
  let reverseNum = 0;
  let origNum = Math.abs(n);
  do {
    reverseNum = reverseNum * 10 + origNum % 10;
    origNum = Math.floor(origNum / 10);
  } while (origNum > 0);
  return reverseNum;
}
