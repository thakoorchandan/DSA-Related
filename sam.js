// var myFucntion = {
//   base: 2,
//   add: function (x) {
//     var f = (v) => v + this.base;
//     return f(x);
//   },
//   addThruCall: function (x) {
//     var y = (v) => v + this.base;
//     var b = {
//       base: 5,
//     };
//     return y.call(b, x);
//   },
// };

// console.log(myFucntion.add(5));
// console.log(myFucntion.addThruCall(5));

// let arr = Array.of(10, 4, 3, 1, 6);

// console.log(arr.length);
// console.log(arr[2]);
// let id = arr.findIndex((arr) => arr === 4);
// console.log(id);

// Array.prototype.myMethod = function () {
//   for (i = 0; i < this.length; i++) {
//     this[i] = this[i].toUpperCase();
//   }
// };

// var myArr = ["one", "two", "Three", "Four"];
// myArr.myMethod();
// console.log(myArr);

// var newArr = [1, 2];
// var name = ["john", "Mathew"];
// var res = "";
// for (i = 0; i < newArr.length; i++) {
//   for (j = 0; j < name.length; j++) {
//     res += name[j];
//   }
// }
// console.log(res);

// console.log(parseInt("123XYZ"));

// let x = 2.1;
// const y = 3.8;

// var sum = function () {
//   return x + y + 0.1;
// };

// var fun = function (a, b) {
//   if (a + b != sum()) console.log(sum());
//   console.log("6.0");
// };

// fun();
// let l1 = (a, b, c) => {
//   let res = (a + b) % c;
//   return l2(res);
// };

// let l2 = (a) => {
//   return a > 0 ? a : a++;
// };

// console.log(l1(10, 15, 10));

// let x = 15;
// let i = 0;
// while (x % 2 == 0) {
//   i++;
//   x -= 2;
//   if (x == 9) break;
// }

// console.log(i);

// let employee = {
//   id: 22,
//   name: "john",
// };

// let cloneEmp = Object.assign({}, employee);

// cloneEmp.id = 132;

// console.log(employee);
// console.log(cloneEmp);

const newPromise = new Promise((rejFunc, resFunc) => {
  resFunc(100);
});
console.log("output");
newPromise.then((val) => console.log(val));
