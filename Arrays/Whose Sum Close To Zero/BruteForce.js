var arr = [1, 2, 6, 9, -5, -2];
var n = arr.length;
if (n < 2) {
  console.log("Invalid Input");
} else {
  var min_l = 0;
  var min_r = 1;
  var min_sum = arr[0] + arr[1];
  var sum = 0;
  for (i = 0; i < n - 1; i++) {
    for (j = i + 1; j < n; j++) {
      sum = arr[i] + arr[j];
      if (Math.abs(min_sum) > Math.abs(sum)) {
        min_sum = sum;
        min_l = j;
        min_r = i;
      }
    }
  }
  console.log(arr[min_l], arr[min_r]);
}
