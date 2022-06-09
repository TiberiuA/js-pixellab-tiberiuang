const person = {
  getName: function () {
    return 'Tiberiu Anghelina';
  },
  getAge: function () {
    return 34;
  },
};

function accessor(methodSuffix) {
  const methodName = `get${methodSuffix}`;

  return person[methodName]();
}

console.warn(`
Folosind accesorul salveaza numele mic al persoanei
intr-o variabila si foloseste-l in propozitia: “Eu sunt xxx.”
`);
const personFirstName = accessor('Name').split(' ')[0];
console.log(`Eu sunt ${personFirstName}`);
