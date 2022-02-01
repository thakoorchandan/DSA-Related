var arr = [-1, 2, 1, -4];
var key = 1;
var n = arr.length;
var result = [];
for (i = 0; i < n; i++) {
  for (j = 0; j < n; j++) {
    for (k = 0; k < n; k++) {
      if ((i !== j) !== k) {
        if (arr[i] + arr[j] + arr[k] == key) {
          result.push([arr[i], arr[j], arr[k]]);
        }
      }
    }
  }
}
console.log(result);
