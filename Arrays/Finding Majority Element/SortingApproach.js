var arr = [1, 1, 2, 2, 3];
arr.sort(function (a, b) {
  return a - b;
});
var n = arr.length;
var index = -1;
for (i = 0; i < n / 2; i++) {
  if (arr[i] == arr[Math.floor(i + n / 2)]) {
    index = i;
    break;
  }
}
if (arr[index] == undefined) {
  console.log("-1");
} else {
  console.log(arr[index]);
}
