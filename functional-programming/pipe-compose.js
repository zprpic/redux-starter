import { compose, pipe } from "lodash/fp";

let input = "       jaVASCript      ";

let output = "<div>" + input.trim() + "</div>";

const trim = (untrimmed) => untrimmed.trim();

const wrap = (unwrapped) => `<div>${unwrapped}</div>`;

const toLowerCase = (string) => string.toLowerCase();

const transform = pipe(trim, toLowerCase, wrap); // pipe - from left to right
const transform = compose(wrap, toLowerCase, trim); // compose - from right to left

const result = transform(input);

console.log(result);
