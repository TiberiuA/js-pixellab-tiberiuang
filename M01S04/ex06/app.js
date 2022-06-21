var person = {
  name: 'Tiberiu',
  surname: 'Anghelina',
  age: 34,
  petOwner: false,
  skills: [
    'html',
    'javascript',
    'css',
    'java',
    'c++',
    'node',
    'jquery',
    'node.js',
  ],
  friends: [
    { name: 'Larry', surname: 'Larryson', age: 30 },
    { name: 'Steven', surname: 'Stevenson', age: 31 },
    { name: 'Carol', surname: 'Carolson', age: 29 },
  ],
};

console.warn(
  `1. Folosind obiectul person si un for, afiseaza in consola skillurile de pe pozitiile pare ale arrayului.`,
);
for (var i = 0; i < person.skills.length; i++) {
  if (i % 2 === 0) {
    console.log(person.skills[i]);
  }
}

console.warn(`2. In mod similar, afiseaza skillurile care NU incep cu j.`);
for (var i = 0; i < person.skills.length; i++) {
  var skill = person.skills[i];

  if (skill.startsWith('j') === false) {
    console.log(skill);
  }
}

console.warn(
  `3. Folosind un for afiseaza propozitia: "Prietenii mei se numesc: xxx yyy, xxx yyy, xxx yyy."`,
);
var message = 'Prietenii mei se numesc: ';
for (var i = 0; i < person.friends.length; i++) {
  var friend = person.friends[i];
  var punctuation = ', ';

  if (i === person.friends.length - 1) {
    // ultima iteratie
    punctuation = '.';
  }
  // v1 concatenare
  message = message + friend.name + ' ' + friend.surname + punctuation;
}
console.log(message);

console.warn(`
4. Folosind un for, afiseaza numarul total de ani pe care il au persoanele din arrayul friends, doar daca varsta este mai mare sau egala cu 30 de ani.
`);

for (var i = 0; i <= person.friends.length; i++) {
  var sum = 0;
  var friend = person.friends[i];
  if (friend.age >= 30) {
    sum += friend.age;
    console.log(sum.toString());
  }
}

console.warn(`6. Afiseaza diferenta de varsta dintre
persoana si prietenii din arrayul friends
doar daca aceasta este mai mare de 2 ani.`);
for (var i = 0; i < person.friends.length; i++) {
  var friend = person.friends[i];
  var ageDiff = Math.abs(person.age - friend.age);

  if (ageDiff > 2) {
    console.log(ageDiff);
  }
}

console.warn(` Folosind proprietatea length a arrayului skills
si o bucla for, afiseaza in ordine inversa
elementele arrayului skills. Atentie,
va trebui sa numeri invers, de la length la 0.`);
for (var i = person.skills.length - 1; i >= 0; i--) {
  console.log(person.skills[i]);
}
