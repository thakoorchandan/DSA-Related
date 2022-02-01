var arr = [1, 2, 3, 6, 3, 6, 1];
var n = arr.length;
var brace = [];
for (i = 0; i < n; i++) {
  var j = Math.abs(arr[i]);
  if (arr[j] >= 0) {
    arr[j] = -arr[j];
  } else {
    brace.push(j);
  }
}
console.log(brace);
