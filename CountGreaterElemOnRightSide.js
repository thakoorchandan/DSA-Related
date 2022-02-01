function countGreater(arr, n) {
  let stack = new Set();
  let counter = [];
  for (let i = n - 1; i >= 0; i--) {
    stack.add(arr[i]);
    let prev = 0;

    for (key of stack) {
      if (arr[i] > key) {
        prev += 1;
      }
    }
    counter[i] = prev;
  }
  console.log(counter);
}

var arr = [12, 1, 0, 3, 5];
var n = arr.length;

countGreater(arr, n);
