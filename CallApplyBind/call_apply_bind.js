let printFullName = function (hometown, state) {
  console.log(
    this.firstName + " " + this.lastName + " from " + hometown + " " + state
  );
};

let name = {
  firstName: "Thakoor",
  lastName: "Chandan",
};

let name2 = {
  firstName: "Pushpa",
  lastName: "Raj",
};

// Function Borrowing // CALL Method :- In call method we pass arguments seperately
printFullName.call(name, "Hyderabad", "Telangana");
printFullName.call(name2, "Mumbai", "Maharashtra");

// Apply Method :- In apply method we arguments in array format
printFullName.apply(name, ["Hyderabad", "Telangana"]);
printFullName.apply(name2, ["Mumbai", "Maharashtra"]);

// Bind Method :- Bind method binds "printFullName" method with the object and returns us the copy of that method
let printMyName = printFullName.bind(name, "Hyderabad", "Telangana");
console.log(printMyName);
printMyName();
