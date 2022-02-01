function moore(arr, n) {
  let majIndex = 0;
  let count = 1;
  for (i = 1; i < n; i++) {
    if (arr[majIndex] == arr[i]) count++;
    else count--;
    if (count == 0) {
      majIndex = i;
      count = 1;
    }
  }
  return arr[majIndex];
}

var arr = [1, 1, 2, 2, 2, 3, 4, 4, 4];
var n = arr.length;
var op = moore(arr, n);
console.log(op);
