function convertDegree() {
  // Get the degree input element
  const degreeInput = document.getElementById('degree-input');

  // Get the select options element
  const conversionOptions = document.getElementById('conversion-options');

  // Get the selected option value
  const selectedOption = conversionOptions.value;

  // Get the result output element
  const resultOutput = document.getElementById('result-output');

  // Get the degree value
  const degree = parseFloat(degreeInput.value);

  // Check if the Kelvin option is selected
  if (selectedOption === 'kelvin') {
    const kelvin = convertToKelvin(degree);
    resultOutput.textContent = kelvin + ' K';
  }
  // Check if the Fahrenheit option is selected
  else if (selectedOption === 'fahrenheit') {
    const fahrenheit = convertToFahrenheit(degree);
    resultOutput.textContent = fahrenheit + ' °F';
  }
}

// Function to convert degree to Kelvin
function convertToKelvin(degree) {
  return degree + 273.15;
}

// Function to convert degree to Fahrenheit
function convertToFahrenheit(degree) {
  return (degree * 9/5) + 32;
}
