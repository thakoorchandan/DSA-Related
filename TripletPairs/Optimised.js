function findTriplet(arr, n, sum) {
  let l, r;
  arr.sort((a, b) => a - b);
  for (let i = 0; i < n - 2; i++) {
    l = i + 1;
    r = n - 1;
    while (l < r) {
      if (arr[i] + arr[l] + arr[r] === sum) {
        console.log(arr[i] + " " + arr[l] + " " + arr[r]);
        return true;
      } else if (arr[i] + arr[l] + arr[r] < sum) {
        l++;
      } else if (arr[i] + arr[l] + arr[r] > sum) {
        r--;
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
