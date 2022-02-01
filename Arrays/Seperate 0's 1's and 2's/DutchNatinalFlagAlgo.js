function swap(x, y) {
  return [y, x];
}

function Ducth(arr, n) {
  let low = 0;
  let high = n - 1;
  let mid = 0;

  while (mid <= high) {
    switch (arr[mid]) {
      case 0: {
        swap(arr[low], arr[mid]);
        low++;
        mid++;
        break;
      }
      case 1: {
        mid++;
        break;
      }
      case 2: {
        swap(arr[mid], arr[high]);
        high--;
        break;
      }
    }
  }
  return arr;
}

var arr = [0, 1, 2, 0, 1, 2];
var n = arr.length;
var op = Ducth(arr, n);
console.log(op);
