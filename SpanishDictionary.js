var Dictionary = (function(originalDictionary){
	var spanishDictionary = {"merry": "feliz", "christmas": "navidad", "and": "y", "happy": "próspero", "new": "nuevo", "year": "año"};

	originalDictionary.translateToSpanish = function(textString) {
		var userStringToArray = textString.toLowerCase().split(" ");
		console.log("userStringToArray", userStringToArray);
		var keyArray = Object.keys(spanishDictionary);
		console.log("keyArray", keyArray);
		for (var i = 0; i < userStringToArray.length; i++) {
			if (keyArray.indexOf(userStringToArray[i]) !== -1) {
				userStringToArray[i] = spanishDictionary[userStringToArray[i]];
			}
		};
		console.log("userStringToArray", userStringToArray);
		translatedString = userStringToArray.join(" ");

		return translatedString;
	}
	return originalDictionary;
})(Dictionary);