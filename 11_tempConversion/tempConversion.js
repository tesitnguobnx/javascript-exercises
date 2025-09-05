const convertToCelsius = function(far) {
  resultado =  ((far - 32) * (5/9))
  return Math.round(resultado * 10 ) / 10
};

const convertToFahrenheit = function(cel) {
  resultado = ((cel * 9/5) + (32))

  return Math.round(resultado * 10) / 10
};

module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
