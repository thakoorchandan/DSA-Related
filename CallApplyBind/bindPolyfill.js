let name = {
  firstname: "Thakoor",
  lastname: "Chandan",
};

let printName = function (hometown, state) {
  console.log(
    this.firstname + " " + this.lastname + " " + hometown + " " + state
  );
};

let printMyName = printName.bind(name, "Hyderabad");

printMyName("Telangana");

Function.prototype.myBind = function (...args) {
  let obj = this;
  params = args.slice(1);
  return function (...args2) {
    obj.apply(args[0], [...params, ...args2]);
  };
};

let printMyName2 = printName.myBind(name, "Hyderabad");
printMyName2("Telangana");
