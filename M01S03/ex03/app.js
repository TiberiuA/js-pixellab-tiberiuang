var person = {
  name: 'Tiberiu',
  surname: 'Anghelina',
  friends: {},
};

var larry = {
  name: 'Larry',
  surname: 'Larryson',
  friends: {},
};

var steven = {
  name: 'Steven',
  surname: 'Stevenson',
  friends: {},
};

var carol = {
  name: 'Carol',
  surname: 'Carolson',
  friends: {},
};

var andra = {
  name: 'Andra',
  surname: 'Andrason',
  friends: {},
};

console.warn(`prietenii sunt prieteni pe friends ai lui person`);
person.friends.larry = larry;
person.friends.steven = steven;
person.friends.andra = andra;
// reverse
larry.friends.person = person;
steven.friends.person = person;
andra.friends.person = person;

console.warn(
  `2 Seteaza-l pe Steven ca prieten al lui Larry si al Andrei (si invers).`,
);
steven.friends.larry = larry;
steven.friends.andra = andra;
// reverse
larry.friends.steven = steven;
andra.friends.steven = steven;

console.warn(`3 Seteaz-o pe Carol ca prietena a Andrei (si invers).`);
carol.friends.andra = andra;
andra.friends.carol = carol;

console.warn(
  `4 Folosind keywordul delete sterge prietenia dintre Person si Larry (si invers).`,
);
delete person.friends.larry;
delete larry.friends.person;

console.warn(
  `5 Afiseaza numele complet al lui Person folosind obiectul Larry.`,
);
console.log(
  larry.friends.steven.friends.person.name +
    ' ' +
    larry.friends.steven.friends.person.surname,
);

console.warn(`6 Afiseaza numele complet a lui Larry folosind obiectul Person.`);
console.log(
  person.friends.steven.friends.larry.name +
    ' ' +
    person.friends.steven.friends.larry.surname,
);

console.warn(
  `7 Folosind obiectul Carol afiseaza numele complet al lui Persons.`,
);
console.log(
  carol.friends.andra.friends.person.name +
    ' ' +
    carol.friends.andra.friends.person.surname,
);

console.warn(`
8 Folosind obiectul Andra afiseaza numarul total de caractere
al numelui complet al lui Person.`);
console.log(
  (andra.friends.person.name + andra.friends.person.surname).length.toString(),
);
