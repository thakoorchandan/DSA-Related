function findTriplet(arr, n, sum) {
  for (let i = 0; i < n - 2; i++) {
    for (let j = i + 1; j < n - 1; j++) {
      for (let k = j + 1; k < n; k++) {
        if (arr[i] + arr[j] + arr[k] === sum) {
          console.log(arr[i] + " " + arr[j] + " " + arr[k]);
          return true;
        }
      }
    }
  }
  return false;
}

var arr = [1, 4, 45, 6, 10, 8];
var n = arr.length;
var sum = 22;
if (findTriplet(arr, n, sum)) {
  console.log("Triplets Found");
} else {
  console.log("Triplets not found");
}
