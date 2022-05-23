var inputRadius = document.getElementById('radius');
var elementResult = document.getElementById('result');
var form = document.querySelector('.surface-form');

form.addEventListener('submit', function (event) {
  var radius = inputRadius.value || 0;
  var result = 0;

  result = (4 / 3) * Math.PI * Math.pow(radius, 3);
  // aici mie imi da 1436.755040241732 in loc de 1436.7550402417319 desi formula ar trebui sa aiba input corect. Or fi marit numarul de zecimale la PI?
  elementResult.innerText = result;

  event.preventDefault();
});
