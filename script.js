
// Start by generating values of password function
var enter;
var confirmNumberofChars;
var confirmCharSymbols;
var confirmUppercaseChars;
var confirmLowercaseChars;
// Special symbols
symbols = ["!“#$%&’()*+,-./:;<=>?@[\]^_`{|}"];
//Numeric characters
number = [1,2,3,4,5,6,7,8,9,0];
// Alphabetical characters
charAlpha= ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
// Choices delcared outside of if statement
var choices;
// Convert letters to uppercase
var toUpperCase = function (x){
  return x.toUpperCase();
};
// Create variable for uppercase conversion
charAlpha2 = charAlpha.map(toUpper);

// Assignment Code
var generateBtn = document.querySelector("#generate");
// Add event listener to generate button
generateBtn.addEventListener("click", function(){
  pass
}
// Write password to the #password input

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  
}

