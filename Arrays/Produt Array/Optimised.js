var arr = [10, 3, 5, 6, 2];
var n = arr.length;
var prod = [];
var temp1 = 1;
for (let i = 0; i < n; i++) {
  prod[i] = temp1;
  temp1 *= arr[i];
}

var temp2 = 1;
for (let i = n - 1; i >= 0; i--) {
  prod[i] *= temp2;
  temp2 *= arr[i];
}

console.log(prod);
