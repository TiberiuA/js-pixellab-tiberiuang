var i = 0;

// for (i = 0; i <= 3; i++) {
//   console.log(i);
// }

// 1. Modifica exemplul astfel incat bucla sa numere de la 1 la 100.
// for (i = 1; i <= 100; i++) {
//   console.log(i);
// }

// 2. Modifica exemplul astfel incat bucla sa numere de la 1 la 99 (dar nu schimba numarul 100).
// for (i = 1; i < 100; i++) {
//   console.log(i);
// }

// 3. Folosind keywordul break opreste bucla atunci cand numarul este egal cu 50 (dar afiseaza-l).
// for (i = 49; i < 100; i++) {
//   if (i <= 50) {
//     console.log(i);
//   } else {
//     break;
//   }
// }

// in cazul de mai sus if (1 <= 50) se vor face iteratii continue pana la 100
// chiar daca nu mai afisaza dupa 50
// for (i = 49; i < 100; i++) {
//   console.log(i);
//   if (i === 50) {
//     break;
//   }
// }
// break-ul opreste bucla dupa 50

// 4. Folosind keywordul continue afiseaza doar numerele pare intre 1 si 100 (inclusiv 100).
// for (i = 1; i <= 100; i++) {
//   if (i % 2 !== 0) {
//     continue;
//   }
//   console.log(i);
//   if (i % 5 === 0) {
//     console.log(i);
//   }
// }

// 5. In mod similar, afiseaza doar numerele care sunt divizibile cu 5.
// for (i = 1; i <= 100; i++) {
//   if (i % 5 === 0) {
//     console.log(i);
//   }

// 6. Modifica exemplul astfel incat bucla sa numere de la 1 la 89.
// for (i = 0; i <= 100; i++) {
//   if (i >= 1 && i <= 89) {
//     console.log(i);
//   }
// }
// SAU
// for (i = 1; i <= 89; i++) {
//     console.log(i);
// }
// SAU
// for (i = 0; i <= 100; i++) {
//   if (i < 1 || i > 89) {
//     continue;
//   }
//   console.log(i);
// }

// 7. Modifica exemplul astfel incat bucla sa numere de la 1 la 88 .
// for (i = 0; i <= 100; i++) {
//   if (i >= 1 && i <= 88) {
//     console.log(i);
//   }
// }
// SAU
// for (i = 1; i <= 88; i++) {
//   console.log(i);
// }
// SAU
// for (i = 0; i <= 100; i++) {
//   if (i >= 1 || i >= 88) {
//     console.log(i);
//   }
//   if (i >= 88) {
//     break;
//   }
// }

// 8. Folosind keywordul break opreste bucla atunci cand numarul este egal cu 42.
// for (i = 0; i <= 100; i++) {
//   console.log(i);
//   if (i === 42) {
//     break;
//   }
// }

// 9. Folosind keywordul continue, afiseaza doar numele impare intre 1 si 89.
// for (i = 0; i <= 100; i++) {
//   if (i >= 1 && i <= 89) {
//     continue;
//   }
//   console.log(i);
// }

// 10. In mod similar, afiseaza doar numerele care sunt divizibile cu 3.
// for (i = 0; i <= 100; i++) {
//   if (i % 3 !== 0) {
//     continue;
//   }
//   console.log(i);
// }
