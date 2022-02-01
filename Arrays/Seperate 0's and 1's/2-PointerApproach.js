var arr = [1, 1, 0, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0];
var n = arr.length;
var l = 0;
var r = n - 1;
while (l < r) {
  while (arr[l] == 0 && l < r) l++;
  while (arr[r] == 1 && l < r) r--;

  if (l < r) {
    let temp = arr[l];
    arr[l] = arr[r];
    arr[r] = temp;
    l++;
    r--;
  }
}
console.log(arr);
