var arr = [39, 27, 11, 4, 24, 32, 32, 1];

var n = arr.length;

var brace = [];
var result = [];

for (i = 0; i < n; i++) {
  var temp = -1;
  for (j = i; j >= 0; j--) {
    if (arr[j] < arr[i]) {
      temp = arr[j];
      // brace.push(arr[j]);
      break;
    }
  }
  brace.push(temp);
}

console.log(brace.join(" "));
