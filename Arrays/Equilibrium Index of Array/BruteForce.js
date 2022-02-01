function Equilibrium(arr, n) {
  for (i = 0; i < n; i++) {
    var leftSum = 0;
    var rightSum = 0;
    for (j = 0; j < i; j++) {
      leftSum += arr[j];
    }
    for (k = i + 1; k < n; k++) {
      rightSum += arr[k];
    }
    //   console.log(leftSum + " " + rightSum);
    if (leftSum === rightSum && i != 0 && i != n - 1) {
      return i;
    }
  }
  return -1;
}

var arr = [-7, 1, 5, 2, -4, 3, 0];
var n = arr.length;
console.log(Equilibrium(arr, n));
