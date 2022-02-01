function apporach(arr, n, key) {
  var l, r;
  for (i = 0; i <= n - 2; i++) {
    l = i + 1;
    r = n - 1;
    while (l < r) {
      if (arr[i] + arr[l] + arr[r] == key) {
        console.log([arr[i], arr[l], arr[r]]);
        return true;
      } else if (arr[i] + arr[l] + arr[r] < key) {
        l++;
      } else {
        r--;
      }
    }
  }
  return false;
}

var arr = [12, 3, 4, 1, 6, 9];
var key = 24;
arr.sort(function (a, b) {
  return a - b;
});
var n = arr.length;
apporach(arr, n, key);
