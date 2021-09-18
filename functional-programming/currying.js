function add(a) {
  return function (b) {
    return a + b;
  };
}

const add2 = (a) => (b) => a + b;
// N (arguments) => 1 (argument)
add(1)(5);

/////////////////////////////////

import { compose, pipe } from "lodash/fp";

let input = "       jaVASCript      ";

let output = "<div>" + input.trim() + "</div>";

const trim = (str) => str.trim();

const wrap = (type) => (str) => `<${type}>${str}</${type}>`;

const toLowerCase = (str) => str.toLowerCase();

const transform = pipe(trim, toLowerCase, wrap("div"));

const result = transform(input);

console.log(result);
