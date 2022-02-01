function real_To_roman(s) {
  const key = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };
  let ans = "";
  for (let i in key) {
    while (s >= key[i]) {
      ans += i;
      s -= key[i];
    }
  }
  return ans;
}

console.log(real_To_roman(1));
console.log(real_To_roman(3));
console.log(real_To_roman(4));
console.log(real_To_roman(9));
console.log(real_To_roman(57));
console.log(real_To_roman(1994));
