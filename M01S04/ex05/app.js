var defaultNumber = 2;
var defaultWarningNumber = `Nu ai introdus un numar. Folosesc ${defaultNumber}`;

var number = prompt('Introdu un numar.');
number = number.trim();

if (number === null || number.trim().length === 0) {
  console.warn(defaultWarningMessage);
  number = defaultNumber;
} else {
  number = Number(number);
}

if (isNaN(number) === true) {
  console.warn(defaultWarningNumber);
  number = defaultNumber;
}

for (i = 1; i <= maxNumber; i++) {
  console.log(i);

  if (i % number !== 0) {
    continue;
  }

  console.log(`Acest numar este multiplu de ${number}.`);
}
