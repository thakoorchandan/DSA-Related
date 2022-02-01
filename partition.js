function maxPartitions(n, k) {
  if (n == 0 || k == 0 || k > n) {
    return 0;
  }
  if (k == 1 || k == n) {
    return 1;
  }

  return k * maxPartitions(n - 1, k) + maxPartitions(n - 1, k - 1);
}

let arr = 5;
let n = 2;
console.log(maxPartitions(arr, n));
