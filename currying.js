// multiply(a)(b)(c)(d).........(n) = 6

function multiply(a) {
  return function x(b) {
    return function y(c) {
      return function z() {
        console.log(a * b * c);
      };
    };
  };
}

multiply(1)(2)(3)();
