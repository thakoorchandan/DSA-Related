var arr = [10, 3, 5, 6, 2];
var n = arr.length;
var brace = [];
for (i = 0; i < n; i++) {
  var prod = 1;
  for (j = 0; j < n; j++) {
    if (i != j) {
      prod *= arr[j];
    }
  }
  brace.push(prod);
}

console.log(brace);
