function convertToCelsius(degree) {
  let convertedCelsius;

  convertedCelsius = (degree - 32) / (9/5);
  convertedCelsius = convertedCelsius.toFixed(1);
  convertedCelsius = parseFloat(convertedCelsius)
  return convertedCelsius
};

 function convertToFahrenheit(degree) {
  let convertedFahrenheit = 0;

  convertedFahrenheit = (degree * 9/5 + 32);
  convertedFahrenheit = convertedFahrenheit.toFixed(1);
  convertedFahrenheit = parseFloat(convertedFahrenheit);
  return convertedFahrenheit

};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
