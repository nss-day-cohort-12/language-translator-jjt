var Dictionary = (function(originalDictionary) {
  var southernDictionary = {
    "merry":"mayreey", 
    "christmas":"creesmuhs", 
    "and":"ayn'", 
    "happy":"heppy", 
    "new":"nyew", 
    "year":"yeer"
  };

  originalDictionary.translateToSouthern = function() {
    var userStringToArray = userInputString.toLowerCase().split(" ");
    console.log("userStringToArray", userStringToArray);
    var keyArray = Object.keys(southernDictionary);
    console.log("keyArray", keyArray);
    for (var i = 0; i < userStringToArray.length; i++) {
      if (keyArray.indexOf(userStringToArray[1]) !== -1) {
        userStringToArray[i] = southernDictionary[userStringToArray[i]];
      }
    };
    console.log("userStringToArray", userStringToArray);
    var translatedString = userStringToArray.join(" ");

    outputElement.innerHTML = translatedString;
  }
  return originalDictionary;
})(Dictionary);