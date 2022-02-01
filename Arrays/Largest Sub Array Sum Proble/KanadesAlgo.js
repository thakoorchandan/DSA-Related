var arr = [-2, -3, 4, -1, -2, 1, 5, -3];
var n = arr.length;
var sum = -Infinity;
var current_sum = 0;

for (i = 0; i < n; i++) {
  current_sum += arr[i];
  if (current_sum > sum) {
    sum = current_sum;
  }
  if (current_sum < 0) {
    current_sum = 0;
  }
}

console.log(sum);
