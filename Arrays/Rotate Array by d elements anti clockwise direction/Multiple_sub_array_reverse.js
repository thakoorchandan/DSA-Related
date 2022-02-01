var arr = [1, 2, 3, 4, 5, 6];
var n = arr.length;
var d = 2;
d = d % n;

function reverse(arr, x, y) {
  while (x <= y) {
    var temp = arr[x];
    arr[x] = arr[y];
    arr[y] = temp;
    x++;
    y--;
  }
  return arr;
}

reverse(arr, 0, d - 1);
reverse(arr, d, n - 1);
console.log(reverse(arr, 0, n - 1).join(" "));
