
var Dictionary = (function() {
  var germanDictionary = {"merry":"frohlich", "christmas":"weihnachten", "and":"neu", "happy":"glucklich", "new":"neu", "year":"jahr"};

  return {

  translateToGerman: function() {
    var userStringToArray = userInputString.toLowerCase().split(" ");
    console.log("userStringToArray", userStringToArray);
    var keyArray = Object.keys(germanDictionary);
    console.log("keyArray", keyArray);
    for (var i = 0; i < userStringToArray.length; i++) {
      if (keyArray.indexOf(userStringToArray[i]) !== -1) {
        userStringToArray[i] = germanDictionary[userStringToArray[i]];
      }
    };
    console.log("userStringToArray", userStringToArray);
    var translatedString = userStringToArray.join(" ");

    outputElement.innerHTML = translatedString;
  }
}
  
})();