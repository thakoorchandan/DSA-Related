var arr = [1, 1, 0, 1, 0, 0, 0, 1];
var n = arr.length;
var zc = 0;
var result = [];
for (i = 0; i < n; i++) {
  if (arr[i] == 0) {
    zc++;
  }
}
for (j = 0; j < zc; j++) {
  result.push(0);
}
var oc = Math.abs(n - zc);
for (k = 0; k < oc; k++) {
  result.push(1);
}
console.log(result);
