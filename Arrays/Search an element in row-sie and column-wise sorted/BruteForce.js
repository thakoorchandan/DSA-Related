function search(arr, n, key) {
  for (i = 0; i < n; i++) {
    for (j = 0; j < arr[i].length; j++) {
      if (arr[i][j] == key) {
        return `Key Found at ${i}-${j} location`;
      }
    }
  }
  return "Key not Found";
}

var arr = [
  [10, 20, 30, 40],
  [15, 25, 35, 45],
  [27, 29, 37, 48],
  [32, 33, 39, 50],
];

var n = arr.length;
var key = 29;

console.log(search(arr, n, key));
