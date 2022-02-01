let printFullName = function (homeTown, state) {
  console.log(
    this.firstName + " " + this.lastName + "is from " + homeTown + " @ " + state
  );
};

var name = {
  firstName: "Thakoor",
  lastName: "Chandan",
};

let name2 = {
  firstName: "Thakoor",
  lastName: "Rishu",
};

//Call
printFullName.call(name, "Pochampad", "Telangana");

//Apply
printFullName.apply(name2, ["Hyderabad", "Telangana"]);

//Bind
let printMyName = printFullName.bind(name2, "Mumbai", "Maharashtra");
printMyName();
