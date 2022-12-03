//Task 1. Temperature converter
function convertCelsiusToKelvin(tempCelsius){
	//temperature in Kelvin = temperature in Celcius + 273.15
	return tempCelsius + 273.15; 
} 

function convertFarenheitToKelvin(tempFahrenheit){
	//temperature in Kelvin = (temperature in Fahrenheit 32) * 5/9 + 273.15
	return (tempFahrenheit - 32) * 5/9 + 273.15;
} 

console.log(convertCelsiusToKelvin(30));
console.log(convertFarenheitToKelvin(30));

//Task 2. Tip calculator
function computeTip(totalBill){
	return totalBill / 10;
}

console.log(computeTip(50));