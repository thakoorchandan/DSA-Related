var arr = [1, 2, 3, 4, 5, 6];
var n = arr.length;
var d = 2;
d = d % n;

var data = arr.splice(0, d);

console.log(...arr, ...data);
