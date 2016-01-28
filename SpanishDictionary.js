var Dictionary = (function(originalDictionary){
	var spanishDictionary = {"merry": "feliz", "christmas": "navidad", "and": "y", "happy": "próspero", "new": "nuevo", "year": "año"};

	originalDictionary.translateToSpanish = function() {
		var userStringToArray = userInputString.toLowerCase().split(" ");
		console.log("userStringToArray", userStringToArray);
		var keyArray = Object.keys(spanishDictionary);
		console.log("keyArray", keyArray);
		for (var i = 0; i < userStringToArray.length; i++) {
			if (keyArray.indexOf(userStringToArray[1]) !== -1) {
				userStringToArray[i] = spanishDictionary[userStringToArray[i]];
			}
		};
		console.log("userStringToArray", userStringToArray);
		var translatedString = userStringToArray.join(" ");

		outputElement.innerHTML = translatedString;
	}
	return originalDictionary;
})(Dictionary);