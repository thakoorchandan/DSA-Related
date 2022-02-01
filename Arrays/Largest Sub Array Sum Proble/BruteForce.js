var arr = [-2, -3, 4, -1, -2, 1, 5, -3];
var n = arr.length;
var max = 0;
for (i = 0; i < n; i++) {
  var sum = 0;
  for (j = i; j < n; j++) {
    sum += arr[j];
    if (max < sum) {
      max = sum;
    }
  }
}

console.log(max);
