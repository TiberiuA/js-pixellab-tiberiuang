// var i = 101;

// do {
//   console.log(i);
//   i++;
// } while ((i = 100));

var i = 1;

do {
  console.log(i);

  if (i === 50) {
    i++;
    break;
  }

  i++;
} while (i < 100);