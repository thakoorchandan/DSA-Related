var arr = [39, 27, 11, 4, 24, 32, 32, 1];

var n = arr.length;

var stack = [];
var result = [];

for (i = 0; i < n; i++) {
  while (stack.length && arr[i] <= stack[stack.length - 1]) {
    stack.pop();
  }
  if (stack.length) {
    result.push(stack[stack.length - 1]);
  } else {
    result.push(-1);
  }
  stack.push(arr[i]);
}

console.log(result.join(" "));

//-1 -1 -1 -1 4 24 24 -1
