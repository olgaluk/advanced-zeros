module.exports = function getZerosCount(number, base) {
  function getCountNumber(a, b) {
    let res = 0;
    while (b > 0) {
     b = ~~(b/a);
     res = res + b;
    }
    return res;
  }

  const arr1 = [];
  const arr2 = [];
  let x = 2;

  while (base > 1) {
    while ((base % x) === 0) {
      base = base/x;
      arr1.push(x);
    }
    x = x + 1;
  }
 
  for (let i=0; i < arr1.length; i++) {
    let k = 1;
    while (arr1[i] === arr1[i+1]) {
      k = k + 1;
      i = i + 1;
    }
    arr2.push(~~(getCountNumber(arr1[i],number)/k));
  }

  arr2.sort((a, b) => a - b);
  return arr2[0];
}
