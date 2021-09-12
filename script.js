
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
charset= "abcdefghijklmnopqrstuvwxyz";

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
