var value = window.prompt('Introdu un numar');
var message = '';
var messageParagraph = document.getElementById('message');
// var number = 36;
var number = window.prompt('Cu ce numar compar?');

console.log('Valoarea este: ' + value);

// if (value % 2 === 0) {
//   message = 'Numarul este par.';
// } else {
//   message = 'Numarul este impar';
// }

value = Number(value);
number = Number(number);

// if (isNaN(value) === true) {
//   message = 'Nu ai introdus un numar.';
// } else if (value === 0) {
//   message = 'Numarul este par.';
// } else if (value % 2 === 0) {
//   message = 'Numarul este par';
// } else {
//   message = 'Numarul este impart';
// }

if (isNaN(value) === true) {
  message = `Nu ai introdus un numar.`;
} else if (value === number) {
  message = `Numarul ${value} este egal cu ${number}.`;
} else if (value > number) {
  message = `Numarul ${value} este mai mare decat ${number}.`;
} else {
  message = `Numarul ${value} este mai mic decat ${number}.`;
}

console.log(message);

messageParagraph.innerText = message;
