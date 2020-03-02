module.exports = function reverse (n) {
  let result = 0;
  let number = Math.abs(n);
  for (let i = number; i > 0; i = Math.trunc(i/10)) {
    result = result*10 + i%10;
    console.log(result);
  }
  return result;
}
