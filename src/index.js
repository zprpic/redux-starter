import { compose, pipe } from "lodash/fp";

let input = "       jaVASCript      ";

let output = "<div>" + input.trim() + "</div>";

const trim = (untrimmed) => untrimmed.trim();

const wrap = (type) => (unwrapped) => `<${type}>${unwrapped}</${type}>`;

const toLowerCase = (string) => string.toLowerCase();

const transform = pipe(trim, toLowerCase, wrap("span"));

const result = transform(input);

console.log(result);
