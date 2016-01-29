var outputElement = document.getElementById("output-div");
var userInputElement = document.getElementById("user-input");
var userInputString = "";
var selectedLanguage; 
var translatedString;


//Capture which language was selected
// will be Spanish, German, or Southern

document.getElementById("translate-button").addEventListener("click", function() {
	selectedLanguage = document.getElementById("selected-language").value;
});




//Function to capture user input from text area and store it as a variable

document.getElementById("translate-button").addEventListener("click", function() {
	userInputString = userInputElement.value;
	return userInputString;
});




//Add function to button that executes one of the 3 translate functions 
//based on the value of the select input

document.getElementById("translate-button"),addEventListener("click", function() {
		if (selectedLanguage === "German") {
			Dictionary.translateToGerman(userInputString);
			outputElement.innerHTML = translatedString;
		} else if (selectedLanguage === "Spanish") {
			Dictionary.translateToSpanish(userInputString);
			outputElement.innerHTML = translatedString;
		} else if (selectedLanguage === "Southern") {
			Dictionary.translateToSouthern(userInputString);
			outputElement.innerHTML = translatedString;
		} else {
			outputElement.innerHTML = userInputString;
		}	
	});