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
var difference = 2022 - person.birthYear - person.pets[0].age;
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
console.log(`${2022 - person.pets[2].age}`);
// aici nu e greseala? cerinta zice: pozitia 2, dar pozitia 2 nu ar trebui sa fie person.pets[1]
// cu person.pets[2] chem ultima pozitie, care e a 3-a.

console.warn(
  `12 Afiseaza propozitia: “Intre firstName si petName este o diferenta de difference ani.”.`,
);
console.log(
  `Intre ${person.firstName} si ${person.pets[0].name} este o diferenta de ${difference} ani.`,
);

console.warn(
  `16 Folosind metoda document.getElementById()
  afiseaza urmatoarele 5 afirmatii despre obiectul person.
  Afiseaza propozitia “ firstName, pet1, pet2, pet3 locuiesc
  toti in aceeasi casa” (folosind bracket notation pe arrayul pets)`,
);
var prop01 = document.getElementById('prop01');
prop01.innerText = `${person.firstName}, ${person.pets[0].name}, ${person.pets[1].name}, ${person.pets[2].name} locuiesc toti in aceeasi casa`;

console.warn(
  `17 Folosind metoda document.getElementById()
  afiseaza urmatoarele 5 afirmatii despre obiectul person.
  Calculeaza si afiseaza diferenta de varsta dintre animalul
   de pe pozitia 0 si cel de pe pozitia 2
`,
);
var prop02 = document.getElementById('prop02');
prop02.innerText = person.pets[0].age - person.pets[2].age;

console.warn(
  `18 Folosind metoda document.getElementById()
  afiseaza urmatoarele 5 afirmatii despre obiectul person.
  Afiseaza propozitia: “Ma numesc xxx yyy,
  m-am nascut in birthYear si codul meu postal este: zipCode.”
`,
);
var prop03 = document.getElementById('prop03');
prop03.innerText = `Ma numesc ${person.firstName} ${person.lastName}, m-am nascut in ${person.birthYear} si codul meu postal este: ${person.zipCode}.`;

console.warn(
  `19 Folosind metoda document.getElementById()
  Afiseaza propozitia: “Animalele mele s-au nascut in xxxx, xxx, respectiv xxx.”
  Foloseste anul curent pentru a efectua scaderea.
`,
);
var prop04 = document.getElementById('prop04');
var pet1BirthYear = 2022 - person.pets[0].age;
var pet2BirthYear = 2022 - person.pets[1].age;
var pet3BirthYear = 2022 - person.pets[2].age;
prop04.innerText = `Animalele mele s-au nascut in ${pet1BirthYear}, ${pet2BirthYear}, respectiv ${pet3BirthYear}.`;

console.warn(
  `19 Folosind metoda document.getElementById()
  Afiseaza propozitia: “Animalele mele s-au nascut in xxxx, xxx, respectiv xxx.”
  Foloseste anul curent pentru a efectua scaderea.
`,
);
var prop04 = document.getElementById('prop04');
