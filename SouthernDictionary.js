var Dictionary = (function(originalDictionary) {
  var southernDictionary = {
    "merry":"mayreey", 
    "christmas":"creesmuhs", 
    "and":"ayn'", 
    "happy":"heppy", 
    "new":"nyew", 
    "year":"yeer"
  };

  originalDictionary.translateToSouthern = function(textString) {
    var userStringToArray = textString.toLowerCase().split(" ");
    console.log("userStringToArray", userStringToArray);
    var keyArray = Object.keys(southernDictionary);
    console.log("keyArray", keyArray);
    for (var i = 0; i < userStringToArray.length; i++) {
      if (keyArray.indexOf(userStringToArray[i]) !== -1) {
        userStringToArray[i] = southernDictionary[userStringToArray[i]];
      }
    };
    console.log("userStringToArray", userStringToArray);
    translatedString = userStringToArray.join(" ");

    return translatedString;
  }
  return originalDictionary;
})(Dictionary);