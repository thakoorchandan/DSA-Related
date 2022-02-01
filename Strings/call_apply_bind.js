const kitchen = {
  name: "kitchen",
  purpose: "cook",
  order: "meal",

  cookFood() {
    console.log(`Serving ${this.order} in 2 mins`);
  },
};

const bedroom = {
  name: "bedroom",
  purpose: "sleep",
  order: "magiee",
};

kitchen.cookFood.call(bedroom);
