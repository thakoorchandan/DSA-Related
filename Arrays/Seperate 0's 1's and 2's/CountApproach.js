var arr = [0, 1, 2, 0, 1, 2];
var n = arr.length;
var zc = 0;
var oc = 0;
var tc = 0;
var result = [];
for (let i = 0; i < n; i++) {
  if (arr[i] == 0) {
    zc++;
  }
  if (arr[i] == 1) {
    oc++;
  }
  if (arr[i] == 2) {
    tc++;
  }
}

for (let i = 0; i < zc; i++) {
  result.push(0);
}
for (let i = 0; i < oc; i++) {
  result.push(1);
}

for (let i = 0; i < tc; i++) {
  result.push(2);
}

console.log(result);
