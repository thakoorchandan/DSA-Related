function search(arr, key) {
  let i = 0;
  let j = arr.length - 1;
  while (i < arr.length && j >= 0) {
    if (key == arr[i][j]) {
      return `${i}---${j}`;
    }
    if (key < arr[i][j]) {
      j--;
    }
    if (key > arr[i][j]) {
      i++;
    }
  }
  return "Key Not Found";
}

var arr = [
  [10, 20, 30, 40],
  [15, 25, 35, 45],
  [27, 29, 37, 48],
  [32, 33, 39, 50],
];

var key = 50;

console.log(search(arr, key));
