var person = {
  name: 'Tiberiu',
  surname: 'Anghelina',
  age: 34,
  petOwner: false,
  skills: {
    html: true,
    css: true,
    javaScript: false,
  },
  friends: {
    larry: {
      name: 'Larry',
      surname: 'Larryson',
      age: 30,
    },
    steven: {
      name: 'Steven',
      surname: 'Stevenson',
      age: 31,
    },
    carol: {
      name: 'Carol',
      surname: 'Carolson',
      age: 29,
    },
  },
};

console.warn(
  `2. Afiseaza varsta prietenei Carol
  `,
);
console.log(person.friends.carol.age.toString());

console.warn(
  `3. Folosind anul curent calculeaza si afiseaza anul de nastere al lui Larry.  `,
);
console.log((2022 - person.friends.larry.age).toString());

console.warn(
  `4. Calculeaza diferenta si afiseaza propozitia:
  “Steven este cu xx ani mai mare decat Larry.” folosind proprietatile name. `,
);
console.log(
  person.friends.steven.name +
    ' este cu ' +
    (person.friends.steven.age - person.friends.larry.age) +
    ' ani mai mare decat ' +
    person.friends.larry.name +
    '.',
);
console.log(person.friends.larry);
console.log(person.skills.javaScript);

console.warn(`4b Calculeaza diferenta
si afiseaza propozitia:
“Steven este cu xx ani mai mare decat Larry.”
folosind proprietatile name.`);
console.log(
  person.friends.steven.name +
    ' este cu ' +
    (person.friends.steven.age - person.friends.larry.age) +
    ' ani mai mare decat ' +
    person.friends.larry.name +
    '.',
);

console.warn(
  `5. Afiseaza propozitia: “Prietenul meu Steven Stevenson are xx ani.”
  folosind doar proprietatile`,
);
console.log(
  'Prietenul meu ' +
    person.friends.steven.name +
    ' ' +
    person.friends.steven.surname +
    ' are ' +
    person.friends.steven.age +
    ' ani.',
);

console.warn(
  `6. Afiseaza propozitia: “Prietenii mei sunt: Steven, Carol si Larry.”`,
);
console.log(
  'Prietenii mei sunt: ' +
    person.friends.steven.name +
    ', ' +
    person.friends.carol.name +
    ' si ' +
    person.friends.larry.name +
    '.',
);

console.warn(`7. Afiseaza numarul de caractere al numelui de familie al lui Steven
`);
console.log(person.friends.steven.surname.length.toString());

console.warn(
  `8 Folosind anul curent calculeaza si afiseaza anul de nastere al lui Steven.`,
);
console.log((2022 - person.friends.steven.age).toString());

console.warn(
  `9 Calculeaza diferenta si afiseaza propozitia:
  “Steven este cu xx ani mai mare decat Carol.” folosind proprietatile name.`,
);
console.log(
  person.friends.steven.name +
    ' este cu ' +
    (person.friends.steven.age - person.friends.carol.age) +
    ' ani mai mare decat ' +
    person.friends.carol.name +
    '.',
);

console.warn(
  `10 Afiseaza propozitia:
  “Prietena mea Carol Carolson are xx ani.” folosind doar proprietatile.`,
);
console.log(
  'Prietena mea ' +
    person.friends.carol.name +
    ' ' +
    person.friends.carol.surname +
    ' are ' +
    person.friends.carol.age +
    ' ani.',
);

console.warn(
  `11 Afiseaza propozitia: “Prietenii mei sunt: Larry, Carol si Steven.”.`,
);
console.log(
  'Prietenii mei sunt: ' +
    person.friends.larry.name +
    ', ' +
    person.friends.carol.name +
    ' si ' +
    person.friends.steven.name +
    '.',
);

console.warn(
  `12 Afiseaza numarul de caractere al numelui de familie al lui Larry`,
);

console.log(person.friends.larry.surname.length.toString());

console.warn(
  `Calculeaza diferenta dintre numarul de caractere al numelor lui Steven si Carol.`,
);
console.log(
  (
    person.friends.steven.name.length - person.friends.carol.name.length
  ).toString(),
);
