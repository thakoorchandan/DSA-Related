// const sub = (arr, depth, subsets, results) => {
//   if (depth === arr.length) {
//     results.push([...subsets]);
//   } else {
//     sub(arr, depth + 1, subsets, results);
//     subsets.push(arr[depth]);
//     sub(arr, depth + 1, subsets, results);
//     subsets.pop();
//   }
//   return results;
// };

const sub = (arr, depth, subsets, results) => {
  if (depth === arr.length) {
    results.push(subsets);
  } else {
    sub(arr, depth + 1, subsets, results);
    sub(arr, depth + 1, [...subsets, arr[depth]], results);
  }
  return results;
};

var arr = [1, 2, 3];
var n = arr.length;
var depth = 0;
var subsets = [];
var results = [];

var op = sub(arr, depth, subsets, results);

console.log(op);
