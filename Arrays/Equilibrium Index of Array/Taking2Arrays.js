function Equilibrium(arr, n) {
  if (n == 1) return -1;
  var arr1 = [];
  var arr2 = [];
  for (let i = 0; i < n; i++) {
    if (i !== 0) {
      arr1[i] = arr1[i - 1] + arr[i];
    } else {
      arr1[i] = arr[i];
    }
  }
  for (let i = n - 1; i > 0; i--) {
    if (i <= n - 2) {
      arr2[i] = arr2[i + 1] + arr[i];
    } else {
      arr2[i] = arr[i];
    }
  }
  for (let i = 0; i < n; i++) {
    if (arr1[i] == arr2[i]) {
      return i;
    }
  }
  return -1;
}

var arr = [-7, 1, 5, 2, -4, 3, 0];
var n = arr.length;
console.log(Equilibrium(arr, n));
