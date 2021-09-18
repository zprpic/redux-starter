//
// SHALLOW COPY
//

/* const person = {
  name: "john",
  address: {
    country: "USA",
    city: "NY",
  },
};
 */
//const updatedPerson = { ...person, name: "Dodo" };
//updatedPerson.address.city = "LA"; // changes the ADRESS OBJECT OF "person" too. updatedPerson = shallow copy

/* console.log(person);
console.log(updatedPerson); */

//
// DEEP COPY
//

const person = {
  name: "john",
  address: {
    country: "USA",
    city: "NY",
  },
};

const updatedPerson = {
  ...person,
  address: {
    ...person.address,
    city: "LA",
  },
  name: "Bob",
};

console.log(person);
console.log(updatedPerson);
