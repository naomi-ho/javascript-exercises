const convertToCelsius = function(fahrenheitTemp) {
  let unRoundedCelsius = (fahrenheitTemp - 32) * (5/9);
  let roundedCelsius = unRoundedCelsius.toFixed(1);
  return Number(roundedCelsius);
};

const convertToFahrenheit = function(celsiusTemp) {
  let unRoundedFahrenheit = celsiusTemp * (9/5) + 32;
  let roundedFahrenheit = unRoundedFahrenheit.toFixed(1);
  return Number(roundedFahrenheit);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
