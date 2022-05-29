var person = {
  firstName: 'Tiberiu',
  lastName: 'Anghelina',
  email: 'tiberiu@anghelina.com',
  birthYear: 1987,
  pets: [
    {
      name: 'Ionel',
      species: 'ornitoring',
      age: 3,
    },
    {
      name: 'Mariana',
      species: 'vaca',
      age: 5,
    },
    {
      name: 'Ginel',
      species: 'iepure',
      age: 2,
    },
  ],
  zipCode: '123445',
};
console.warn(
  `10 Calculeaza si salveaza in variabila difference diferenta de ani dintre persoana si animalul
  de pe pozitia 0 si afiseaza aceasta diferenta. Foloseste anul curent.`,
);
var difference =
  new Date().getFullYear() - person.birthYear - person.pets[0].age;
console.log(difference.toString());
// console log nu era cerut, dar era signura modalitate prin care puteam sa verific daca am
// calculat $difference corect.
console.warn(
  `11 Salveaza numele animalului de pe pozitia 0 intr-o variabila numita petName. `,
);
var petName = person.pets[0].name;

console.warn(
  `6 Afiseaza propozitia: “Numele meu este: xxx yyy si am x animale.”. Nu uita de proprietatea length a arrayului pets. `,
);
console.log(
  `Numele meu este: ${person.firstName} ${person.lastName} si am ${person.pets.length} animale.`,
);

console.warn(`7 Afiseaza propozitia: “Am acelasi email din copilarie: xxx.”.`);
console.log(`Am acelasi email din copilarie: ${person.email}.`);

console.warn(
  `8 Afiseaza propozitia: “Unul din cele x animale ale mele este species si are age ani.”`,
);
console.log(
  `Unul din cele ${person.pets.length} animale ale mele este ${person.pets[1].species} si are ${person.pets[1].age} ani.`,
);

console.warn(
  `9 Calculeaza si afiseaza (folosind anul curent) anul de nastere al animalului de pe pozitia 2.`,
);
console.log(`${new Date().getFullYear() - person.pets[2].age}`);
// aici nu e greseala? cerinta zice: pozitia 2, dar pozitia 2 nu ar trebui sa fie person.pets[1]
// cu person.pets[2] chem ultima pozitie, care e a 3-a.

console.warn(
  `12 Afiseaza propozitia: “Intre firstName si petName este o diferenta de difference ani.”.`,
);
console.log(
  `Intre ${person.firstName} si ${person.pets[0].name} este o diferenta de ${difference} ani.`,
);

console.warn(
  `Folosind metoda document.getElementById()
  afiseaza urmatoarele 5 afirmatii despre obiectul person.
  Afiseaza propozitia “ firstName, pet1, pet2, pet3 locuiesc
  toti in aceeasi casa” (folosind bracket notation pe arrayul pets)`,
);

var message = 'x';
var messageParagraph = document.getElementById('message');
messageParagraph.innerText = message;

var prop01 = document.getElementById('prop01');
prop01.innerText = 'mancare';
// nu stiu cum sa afisez o informatie din JS in HTML
// m-am tot chinuit, am tot copiat din M01S04 ex1 si nu-mi iese
// de nicio culoare
