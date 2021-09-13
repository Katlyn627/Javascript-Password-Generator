
// Start by generating values of password function
var enter;
var confirmNumberofChars;
var confirmCharSymbols;
var confirmUppercaseChars;
var confirmLowercaseChars;
// Special symbols
symbols = ["!“#$%&’()*+,-./:;<=>?@[\]^_`{|}"];
//Numeric characters
number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
// Alphabetical characters
charAlpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// Choices delcared outside of if statement
var choices;
// Convert letters to uppercase
var toUpperCase = function (x) {
  return x.toUpperCase();
};
// Create variable for uppercase conversion
charAlpha2 = charAlpha.map(toUpper);

// Assignment Code
var generateBtn = document.querySelector("#generate");
// Add event listener to generate button
generateBtn.addEventListener("click", function () {
  password = generatePassword();
  document.getElementById("password").placeholder = password;
});
// Start function to generate a password
function writePassword() {
  // Asks for users inputs
  enter = window.prompt("How many characters would you like in your password? Choose between 2 and 128");
  // First if statement for user validation 
  if (!enter) {
    alert("This needs a value");
    }
    else if (enter < 8 || enter > 128) {
    // Validates the users chice and input
    // Start user input prompts
    enter = window.prompt("You must choose between 8 and 128");
    }
    else {
    // Continues once user iputs are valid and complete
    confirmNumberofCharacters = confirm("Will this contain numbers?");
    confirmCharSymbols = confirm("Will this contain special characters?");
    confirmUppercaseChars = confirm("Will this contain Uppercase letters?");
    confirmLowercaseChars = confirm("Will this contain Lowercase letters?");
  };
  // First if statement taking users choice to determine password outcome
  // If statement for all negative outcomes
    if (!confirmCharSymbols && !confirmNumberofCharacters && !confirmUppercaseChars && !confirmLowercaseChars) {
    choices = alert("You must choose a criteria!");
    }
    else if(confirmCharSymbols && confirmNumberofCharacters && confirmUppercaseChars && confirmLowercaseChars) {
    choices = symbols.concat(number, charAlpha, charAlpha2);{
    }
    // If else if for 3 posotive outcome choices
    if(confirmCharSymbols && confirmNumberofChars && confirmUppercaseChars){
    choices = symbols.concat(number, charAlpha);
    }
    else if (confirmCharSymbols && confirmNumberofChars && confirmLowercaseChars) {
    choices = symbols.concat(number, charAlpha)
    }
    else if (confirmCharSymbols && confirmLowercaseChars && confirmUppercaseChars) {
    choices = symbols.concat(charAlpha, charAlpha2);
    }
    else if (confirmNumberofChars && confirmLowercaseChars && confirmUppercaseChars) {
    choices = number.concat(charAlpha, charAlpha2);
  }
  // If else if for 2 positive options 
    if (confirmCharSymbols && confirmNumberofChars) {
      choices = symbols.concat(number);
      } 
      else if (confirmCharSymbols && confirmLowercaseChars) {
      choices = symbols.concat(charAlpha);
      } 
      else if (confirmCharSymbols && confirmUppercaseChars) {
      choices = symbols.concat(alpha2);
      }
      else if (confirmLowercaseChars && confirmNumberofChars) {
      choices = charAlpha.concat(number);
      } 
      else if (confirmLowercaseChars && confirmUppercaseChars) {
      choices = charAlpha.concat(charAlpha2);
      } 
      else if (confirmNumberofChars && confirmUppercaseChars) {
      choices = number.concat(charAlpha2);
    }
}
