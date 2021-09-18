function add(a) {
  return function (b) {
    return a + b;
  };
}

const add2 = (a) => (b) => a + b;
// N (arguments) => 1 (argument)
add(1)(5);
