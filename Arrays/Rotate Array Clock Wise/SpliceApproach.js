var arr = [1, 2, 3, 4, 5, 6];
var n = arr.length;
var d = 3;
d = d % n;

var data = arr.splice(n - d, d);

console.log([...data, ...arr]);
