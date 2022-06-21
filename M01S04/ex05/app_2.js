var defaultDivNumber = 2;
var defaultWarningDivNumber = `Nu ai introdus un numar ca divizor. Folosesc ${defaultDivNumber}.`;

var defaultMaxNumber = 1000;
var defaultWarningMaxNumber = `Nu ai introdus un numar ca limita maxima. Folosesc ${defaultMaxNumber}`;

var divNumber = prompt(`Introdu un numar divizor.`);
divNumber = divNumber.trim();

var maxNumber = prompt(`Introdu un numar limita maxima.`);
maxNumber = maxNumber.trim();

if (
  divNumber === null ||
  divNumber.trim().length === 0 ||
  isNaN(divNumber) === true
) {
  console.warn(defaultWarningDivNumber);
  divNumber = defaultDivNumber;
} else {
  divNumber = Number(divNumber);
}

if (
  maxNumber === null ||
  maxNumber.trim().length === 0 ||
  isNaN(maxNumber) === true
) {
  console.warn(defaultWarningMaxNumber);
  maxNumber = defaultMaxNumber;
} else {
  maxNumber = Number(maxNumber);
}

for (i = 1; i <= maxNumber; i++) {
  console.log(i);

  if (i % divNumber !== 0) {
    continue;
  }
  console.log(`Acest numar este multiplu de ${divNumber}`);
}
