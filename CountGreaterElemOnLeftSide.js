function countGreater(arr, n) {
  let stack = new Set();
  let counter = [];
  for (let i = 0; i < n; i++) {
    stack.add(arr[i]);
    let prev = 0;

    for (key of stack) {
      if (arr[i] < key) {
        prev += 1;
      }
    }
    counter[i] = Math.abs(prev);
  }
  for (let i = 0; i < n; i++) {
    console.log(counter[i], " ");
  }
}

var arr = [12, 1, 2, 3, 0];
var n = arr.length;

countGreater(arr, n);
