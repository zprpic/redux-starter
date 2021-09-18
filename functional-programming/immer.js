import { produce } from "immer";

let book = { title: "harry potter" };

function publish(book) {
  // book.isPublished = true; - no. don't mutate objects. use immer instead

  // produce(initialState, functionThatSpecifiesMutations/proxy) => { mutating code}
  return produce(book, (draftBook) => {
    draftBook.isPublished = true;
  });
}

let updated = publish(book);

console.log(book);
console.log(updated);
