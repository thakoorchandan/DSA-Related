var arr = [7, 3, 5, 4, 5, 3, 4];
arr.sort(function (a, b) {
  return a - b;
});
var n = arr.length;
for (i = 0; i < n; i++) {
  if (arr[i] == arr[i + 1]) {
    i++;
    continue;
  } else {
    console.log(arr[i]);
  }
}
