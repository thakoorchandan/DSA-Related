var arr = [1, 3, 5, 2, 7, 4];
var n = arr.length;
var eve = [];
var odd = [];
for (i = 0; i < n; i++) {
  if (arr[i] % 2 == 0) {
    eve.push(arr[i]);
  } else {
    odd.push(arr[i]);
  }
}

var op = [...eve, ...odd];

console.log(op);
