function Equilibrium(arr, n) {
  var sum = 0;
  var leftSum = 0;
  for (let i = 0; i < n; i++) {
    sum += arr[i];
  }

  for (let i = 0; i < n; i++) {
    sum -= arr[i];

    if (leftSum == sum) {
      return i;
    }
    leftSum += arr[i];
  }
  return -1;
}

var arr = [-7, 1, 5, 2, -4, 3, 0];
var n = arr.length;
console.log(Equilibrium(arr, n));
