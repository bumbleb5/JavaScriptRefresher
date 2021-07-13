const number = 1;
const num2 = number;

console.log(num2);
//copy happens

//whereas in object its reference. pointer is copies.

const person = {
  name: "Chetna",
};

const secondPerson = person;

person.name = "Arianna";

console.log(secondPerson);

//same for Array

//instead of reference if u want to make a copy use spread.

const thirdPerson = {
  ...person,
};

person.name = "Lost";

console.log(thirdPerson);
