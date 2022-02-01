var arr = [-5, -2, 1, 2, 6, 9];
arr.sort(function (a, b) {
  return a - b;
});
var n = arr.length;
var min_sum = 99999;
var sum = 0;
var left = 0;
var right = n - 1;
var min_l = 0;
var min_r = n - 1;
if (n < 2) {
  console.log("Invalid Input");
} else {
  while (left < right) {
    sum = arr[left] + arr[right];
    if (Math.abs(sum) < Math.abs(min_sum)) {
      min_sum = sum;
      min_l = left;
      min_r = right;
    }
    if (sum < 0) {
      left++;
    } else {
      right--;
    }
  }
  console.log(arr[min_l], arr[min_r]);
}
