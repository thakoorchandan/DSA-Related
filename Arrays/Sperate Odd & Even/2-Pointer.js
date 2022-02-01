var arr = [7, 23, 1, 8, 6, 13, 21, 14];
var n = arr.length;
var left = 0;
var right = n - 1;
while (left < right) {
  while (arr[left] % 2 == 0 && left < right) {
    left++;
  }
  while (arr[right] % 2 == 1 && left < right) {
    right--;
    if (left < right) {
      let temp = arr[left];
      arr[left] = arr[right];
      arr[right] = temp;
      left++;
      right--;
    }
  }
}

console.log(arr);
